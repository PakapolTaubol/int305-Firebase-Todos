import { and, collection, documentId, getDocs, limit, or, orderBy, query, where } from 'firebase/firestore';
import db from '../firebase/init.js';

let isAsc = true;
let lastIndex = 0;
export const queryByCondition = async (index, mode) => {
    let qry = null
    const colEmployee = collection(db, "employees");
    const colCompany = collection(db, "companies");
    const colDepartment = collection(db, "departments");
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
        docData.id = doc.id;
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
        docData.id = doc.id;
        data.push(docData);
    }
    return data;
}
