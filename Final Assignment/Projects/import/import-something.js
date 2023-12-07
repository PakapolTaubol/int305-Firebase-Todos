var admin = require("firebase-admin");
const { getFirestore } = require('firebase-admin/firestore')
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


var db = getFirestore();

var companies = [
    {}
]

companies.forEach(function (obj) {
    db.collection("companies").add({
        name: obj.name,
        type: obj.type,
        status: obj.status,
    }).then(docRef => { console.log("Document written with ID : " + docRef.id) })
});