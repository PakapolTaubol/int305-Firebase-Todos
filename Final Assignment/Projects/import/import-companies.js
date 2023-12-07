var admin = require("firebase-admin");
const { getFirestore } = require('firebase-admin/firestore')
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


var db = getFirestore();

var companies = [
    {
        "name": "Arise by Infinitas",
        "type": "นวัตกรรมดิจิทัล",
        "status": {
            "open": true,
            "createdOn": "2021-12-13T00:00:00.000Z",
            "updatedOn": "2023-07-07T00:00:00.000Z"
        }
    },
    {
        "name": "SCB 10X",
        "type": "ธุรกิจเชิงนวัตกรรม",
        "status": {
            "open": true,
            "createdOn": "2020-07-20T00:00:00.000Z",
            "updatedOn": "2023-10-07T00:00:00.000Z"
        }
    },
    {
        "name": "K-Arise",
        "type": "แพลตฟอร์มดิจิทัล",
        "status": {
            "open": true,
            "createdOn": "2023-01-17T00:00:00.000Z",
            "updatedOn": "2023-10-07T00:00:00.000Z"
        }
    },
    {
        "name": "CVC Venture Capital",
        "type": "กองทุนร่วมลงทุน",
        "status": {
            "open": true,
            "createdOn": "2021-03-08T00:00:00.000Z",
            "updatedOn": "2023-10-07T00:00:00.000Z"
        }
    },
    {
        "name": "500 TukTuks",
        "type": "กองทุนร่วมลงทุน",
        "status": {
            "open": true,
            "createdOn": "2016-08-01T00:00:00.000Z",
            "updatedOn": "2023-10-07T00:00:00.000Z"
        }
    },
    {
        "name": "InnoHub",
        "type": "ศูนย์กลางนวัตกรรม",
        "status": {
            "open": true,
            "createdOn": "2019-01-02T00:00:00.000Z",
            "updatedOn": "2023-10-07T00:00:00.000Z"
        }
    },
    {
        "name": "Digital Thailand Hub",
        "type": "หน่วยงานด้านดิจิทัล",
        "status": {
            "open": true,
            "createdOn": "2022-01-01T00:00:00.000Z",
            "updatedOn": "2023-10-07T00:00:00.000Z"
        }
    },
    {
        "name": "AI for Thailand",
        "type": "โครงการพัฒนาปัญญาประดิษฐ์",
        "status": {
            "open": true,
            "createdOn": "2021-07-20T00:00:00.000Z",
            "updatedOn": "2023-10-07T00:00:00.000Z"
        }
    },
    {
        "name": "Google Thailand",
        "type": "บริษัทเทคโนโลยี",
        "status": {
            "open": true,
            "createdOn": "2005-01-01T00:00:00.000Z",
            "updatedOn": "2023-10-07T00:00:00.000Z"
        }
    },
    {
        "name": "Microsoft Thailand",
        "type": "บริษัทเทคโนโลยี",
        "status": {
            "open": true,
            "createdOn": "1995-01-01T00:00:00.000Z",
            "updatedOn": "2023-10-07T00:00:00.000Z"
        }
    }

]

companies.forEach(function (obj, index) {
    // แปลงเป็น Timestamp
    obj.status.createdOn = new Date(obj.status.createdOn);
    obj.status.updatedOn = new Date(obj.status.updatedOn);
    // เพิ่มข้อมูล
    const company_id = `CMP${(index + 1).toString().padStart(2, '0')}`; // Generate CMP001 -> CMPXXX
    db.collection("companies").doc(company_id).set({
        name: obj.name,
        type: obj.type,
        status: obj.status,
    }).then(() => { console.log(`Document written with ID: ${company_id}`) })
    .catch(error => { console.error("Error adding document: ", error); });
});