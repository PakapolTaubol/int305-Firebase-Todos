import { and, getAggregateFromServer, collection, documentId, getDocs, limit, or, sum, orderBy, query, where, count, average } from 'firebase/firestore';
import db from '../firebase/init.js';
import Swal from 'sweetalert2';

let isAsc = true;
let lastIndex = 0;
export const queryByCondition = async (index, mode) => {
    let qry = null
    const colEmployee = collection(db, "employees");
    const colDepartment = collection(db, "departments");

    let snapshotText = '';
    let text = '';
    // ทำให้การกดปุ่มอื่นเริ่มด้วย asc เสมอ
    lastIndex == index ? '' : isAsc = true
    if (mode == 'employees') {
        switch (index) {
            case 0:
                qry = query(colEmployee, orderBy('name', isAsc ? 'asc' : 'desc'));
                break;
            case 1:
                qry = query(colEmployee, orderBy('salary', isAsc ? 'asc' : 'desc'));
                break;
            case 2:
                qry = query(colEmployee, where('department', '==', 'QA'), limit(2));
                break;
            case 3:
                qry = query(colEmployee, where('salary', '>=', 30000), orderBy('salary', isAsc ? 'asc' : 'desc'));
                break;
            case 4:
                qry = query(colEmployee, and(where('department', '==', 'Full-stack'), where('salary', '>=', 28500)), orderBy('salary', isAsc ? 'asc' : 'desc'));
                break;
            case 5:
                qry = query(colEmployee, or(where('department', '==', 'Frontend'), where('department', '==', 'Backend')));
                break;
            case 6:
                qry = query(colEmployee, where('department', 'in', ['QA', 'BA']));
                break;
        }
    } else if (mode == 'condition') {
        switch (index) {
            case 0:
                qry = query(colEmployee)
                break;
            case 1:
                qry = query(colEmployee, where('company', '==', 'CMP01'));
                snapshotText = await getAggregateFromServer(qry, { total: count('company') });
                text = snapshotText.data().total;
                Swal.fire({
                    title: 'จำนวนคนที่อยู่บริษัท Arise',
                    text: `ทั้งหมด ${text} คน`,
                    showConfirmButton: false
                })
                break;
            case 2:
                qry = query(colEmployee, where('department', '==', 'DevOps'));
                snapshotText = await getAggregateFromServer(qry, { total: average('salary') });
                text = snapshotText.data().total;
                Swal.fire({
                    title: 'เงินเดือนเฉลี่ยของ DevOps',
                    text: `ทั้งหมด ${text} บาท`,
                    showConfirmButton: false
                })
                break;
            case 3:
                qry = query(colEmployee, and(where('salary', '>=', 24000), where('salary', '<=', 26000)), orderBy('salary', isAsc ? 'asc' : 'desc'))
                break;
            case 4:
                qry = query(colEmployee);
                snapshotText = await getAggregateFromServer(qry, { total: count('company') });
                text = snapshotText.data().total;
                Swal.fire({
                    title: `จำนวนทั้งหมด ${text} คน`,
                    showConfirmButton: false
                })
                break;
        }
    }

    else if (mode == 'departments') {
        switch (index) {
            case 0:
                qry = query(colDepartment, where('skill', 'array-contains-any', ['HTML', 'CSS', 'JavaScript']));
                break;
            case 1:
                qry = query(colDepartment, where('skill', 'array-contains', 'Excel'));
                break;
            case 2:
                qry = query(colDepartment, where('skill', 'array-contains', 'SQL'));
                break;
            case 3:
                qry = query(colDepartment, where('skill', 'array-contains', 'Python'));
                break;
            case 4:
                break;
        }
    }


    lastIndex = index
    isAsc = !isAsc;
    const snapshot = await getDocs(qry);
    const data = [];

    for (const doc of snapshot.docs) {
        const docData = doc.data();
        docData.id = doc.id;
        data.push(docData);
    }
    return data;
}

export const getDataByCollectionName = async (col_name) => {
    const col = collection(db, col_name);
    const snapshot = await getDocs(col);
    const data = [];

    for (const doc of snapshot.docs) {
        const docData = doc.data();
        docData.id = doc.id;
        data.push(docData);
    }
    return data;
}

export const getCompanyNameById = async (cmp_id) => {
    const col = collection(db, "companies");
    const qry = query(col, where(documentId(), '==', cmp_id));
    const snapshot = await getDocs(qry);
    let data = null;

    for (const doc of snapshot.docs) {
        const docData = doc.data();
        // docData.id = doc.id;
        data = docData;
    }

    return data.name;
}

export const queryEmployeesByCompanyID = async (cmp_id) => {
    const col = collection(db, "employees");
    const qry = query(col, where('company', '==', cmp_id));
    const snapshot = await getDocs(qry);
    const data = [];

    for (const doc of snapshot.docs) {
        const docData = doc.data();
        // docData.id = doc.id;
        data.push(docData);
    }
    return data;
}
