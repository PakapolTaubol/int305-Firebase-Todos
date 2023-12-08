import { collection, getDocs } from 'firebase/firestore';
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