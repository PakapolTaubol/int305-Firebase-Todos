var admin = require("firebase-admin");
const { getFirestore } = require('firebase-admin/firestore')
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


var db = getFirestore();

var departments = [
    {
        "name": "Full-stack",
        "skill": ["HTML", "CSS", "JavaScript", "React.js", "Java", "SQL"]
    },
    {
        "name": "Backend",
        "skill": ["Java", "SQL"]
    },
    {
        "name": "Frontend",
        "skill": ["HTML", "CSS", "JavaScript", "React.js"]
    },
    {
        "name": "BA",
        "skill": ["Excel", "PowerPoint", "SQL"]
    },
    {
        "name": "HR",
        "skill": ["Excel", "PowerPoint", "จิตวิทยา", "การสื่อสาร"]
    },
    {
        "name": "QA",
        "skill": ["HTML", "CSS", "JavaScript", "JUnit", "Selenium"]
    },
    {
        "name": "DevOps",
        "skill": ["Docker", "Kubernetes", "Git", "CI/CD"]
    },
    {
        "name": "Data Scientist",
        "skill": ["Python", "SQL", "Machine Learning", "Deep Learning"]
    },
    {
        "name": "Data Engineer",
        "skill": ["SQL", "Hadoop", "Spark", "Machine Learning"]
    },
    {
        "name": "Data Analyst",
        "skill": ["Excel", "SQL", "Power BI", "Tableau"]
    },
    {
        "name": "Product Manager",
        "skill": ["Business", "Marketing", "UX/UI", "Technical"]
    },
    {
        "name": "Marketing Manager",
        "skill": ["SEO", "SEM", "PPC", "Social Media"]
    },
    {
        "name": "Sales Manager",
        "skill": ["Negotiation", "Presentation", "Customer Relationship Management"]
    },
]


departments.forEach(function (obj) {
    db.collection("departments").doc(obj.name).set({
        name: obj.name,
        skill: obj.skill
    }).then(() => { console.log("Document written with ID : " + obj.name) })
});