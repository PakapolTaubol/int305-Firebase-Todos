import { collection, documentId, getDocs, query, where } from 'firebase/firestore';
import db from '../firebase/init.js';

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

export const qurryEmployeesByCompanyID = async (cmp_id) => {
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
