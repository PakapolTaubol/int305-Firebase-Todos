var admin = require("firebase-admin");
const { getFirestore } = require('firebase-admin/firestore')
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


var db = getFirestore();

var employees = [
    {
        "name": "ภคพล ทาอุบล",
        "age": 21,
        "email": "pakapol.taub@kmutt.ac.th",
        "salary": 25000
    },
    {
        "name": "ณัฐพล ทองดี",
        "age": 22,
        "email": "natthapol.thongdee@kmutt.ac.th",
        "salary": 30000
    },
    {
        "name": "ณัฐธิดา ศรีสังข์",
        "age": 23,
        "email": "nathida.srisaeng@kmutt.ac.th",
        "salary": 35000
    },
    {
        "name": "ภัทรพล แก้วมณี",
        "age": 24,
        "email": "pattrapol.kaewmanee@kmutt.ac.th",
        "salary": 40000
    },
    {
        "name": "สุวัฒน์ ศรีสุวิมล",
        "age": 25,
        "email": "suwat.srisuwimool@kmutt.ac.th",
        "salary": 45000
    },
    {
        "name": "วรากรณ์ จันทรเสรี",
        "age": 26,
        "email": "warakorn.chantraseri@kmutt.ac.th",
        "salary": 50000
    },
    {
        "name": "ธนัตถ์ ศุภผล",
        "age": 27,
        "email": "thanat.supaphon@kmutt.ac.th",
        "salary": 55000
    },
    {
        "name": "ศุภชัย ทองสุก",
        "age": 28,
        "email": "supachai.thongsuk@kmutt.ac.th",
        "salary": 60000
    },
    {
        "name": "ณัฐพล ประเสริฐ",
        "age": 29,
        "email": "natthapol.prasert@kmutt.ac.th",
        "salary": 65000
    },
    {
        "name": "ณัฐชญา ศรีจันทร์",
        "age": 30,
        "email": "natthacha.srichan@kmutt.ac.th",
        "salary": 70000
    },
    {
        "name": "ภัทรวัฒน์ ศรีพิพัฒน์",
        "age": 31,
        "email": "pattarawatt.sripipat@kmutt.ac.th",
        "salary": 75000
    },
    {
        "name": "สุภัทร ศรีสุวรรณ",
        "age": 32,
        "email": "suphat.srisuwan@kmutt.ac.th",
        "salary": 80000
    },
    {
        "name": "วรายุฑ จันทรเสรี",
        "age": 33,
        "email": "warayut.chantraseri@kmutt.ac.th",
        "salary": 85000
    }
]

employees.forEach(function (obj) {
    db.collection("employees").add({
        name: obj.name,
        age: obj.age,
        email: obj.email,
        salary: obj.salary
    }).then(docRef => { console.log("Document written with ID : " + docRef.id) })
});