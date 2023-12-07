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
        "salary": 25000,
        "company": "CMP01",
        "department": "Full-stack"
    },
    {
        "name": "สุภาวดี แสนดี",
        "age": 25,
        "email": "supawadee.sande@gmail.com",
        "salary": 28000,
        "company": "CMP03",
        "department": "Frontend"
    },
    {
        "name": "วิชญากร ประดิษฐ์",
        "age": 30,
        "email": "wichayakorn.pra@company.com",
        "salary": 35000,
        "company": "CMP06",
        "department": "Backend"
    },
    {
        "name": "ณัฐกฤต สุขสุข",
        "age": 28,
        "email": "nuttakrit.suk@gmail.com",
        "salary": 30000,
        "company": "CMP01",
        "department": "Full-stack"
    },
    {
        "name": "จันทร์ทิพย์ มีดี",
        "age": 23,
        "email": "jantip.midi@workplace.net",
        "salary": 26000,
        "company": "CMP05",
        "department": "Data Analyst"
    },
    {
        "name": "ภัทรวรรณ พรหมประสิทธิ์",
        "age": 27,
        "email": "patrawan.promp@domain.com",
        "salary": 32000,
        "company": "CMP02",
        "department": "Frontend"
    },
    {
        "name": "สุวัจน์ วรเชษฐ์",
        "age": 29,
        "email": "suwat.vor@service.org",
        "salary": 29000,
        "company": "CMP07",
        "department": "QA"
    },
    {
        "name": "วิทยา อุตโม",
        "age": 26,
        "email": "witthaya.uto@enterprise.com",
        "salary": 27000,
        "company": "CMP10",
        "department": "DevOps"
    },
    {
        "name": "กาญจนา สุขใจ",
        "age": 24,
        "email": "kanjana.sukjai@business.co",
        "salary": 25500,
        "company": "CMP04",
        "department": "HR"
    },
    {
        "name": "ณัฐภัทร จันทร์สว่าง",
        "age": 31,
        "email": "nattapat.jansawang@company.net",
        "salary": 36500,
        "company": "CMP09",
        "department": "Product Manager"
    },
    {
        "name": "ประวิทย์ แจ่มใส",
        "age": 22,
        "email": "prawit.jamsai@startup.io",
        "salary": 24000,
        "company": "CMP04",
        "department": "Data Engineer"
    },
    {
        "name": "ชาญวิทย์ วรรณรอง",
        "age": 33,
        "email": "chanwit.wanrong@tech.com",
        "salary": 38000,
        "company": "CMP10",
        "department": "Data Scientist"
    },
    {
        "name": "วิชิต พรหมทอง",
        "age": 29,
        "email": "wichit.promthong@corporation.org",
        "salary": 31000,
        "company": "CMP07",
        "department": "BA"
    },
    {
        "name": "กฤษฎา อัครวุฒิ",
        "age": 27,
        "email": "krita.akkarawut@business.co",
        "salary": 32000,
        "company": "CMP03",
        "department": "BA"
    },
    {
        "name": "ณภัทร ทองสุข",
        "age": 26,
        "email": "naphat.thongsuk@company.net",
        "salary": 28500,
        "company": "CMP10",
        "department": "Full-stack"
    },
    {
        "name": "สมชาย ประดิษฐ์",
        "age": 28,
        "email": "somchai.pra@service.org",
        "salary": 29500,
        "company": "CMP08",
        "department": "QA"
    },
    {
        "name": "สิทธิโชค วงศ์วิสิฐ",
        "age": 25,
        "email": "sitthichok.wongwisit@enterprise.com",
        "salary": 27500,
        "company": "CMP06",
        "department": "Data Scientist"
    },
    {
        "name": "วรเมธ สุวรรณประสิทธิ์",
        "age": 30,
        "email": "woramat.suwannaprasit@business.co",
        "salary": 33500,
        "company": "CMP01",
        "department": "DevOps"
    },
    {
        "name": "ณัฐนนท์ พันธุ์ทอง",
        "age": 24,
        "email": "nattanun.panthong@startup.io",
        "salary": 26500,
        "company": "CMP02",
        "department": "Product Manager"
    },
    {
        "name": "ธนวิชญ์ รักษาดี",
        "age": 29,
        "email": "thanawit.raksa@tech.com",
        "salary": 30500,
        "company": "CMP05",
        "department": "Frontend"
    },
    {
        "name": "อริสา จันทร์สว่าง",
        "age": 26,
        "email": "orisar.jansawang@corporation.org",
        "salary": 29000,
        "company": "CMP09",
        "department": "Marketing Manager"
    },
    {
        "name": "อรวรรณ ศิลปวัฒน์",
        "age": 23,
        "email": "orawan.silpawat@company.net",
        "salary": 25500,
        "company": "CMP07",
        "department": "BA"
    },
    {
        "name": "ณฐวุฒิ สุขดี",
        "age": 27,
        "email": "nattawut.sukdi@service.org",
        "salary": 28000,
        "company": "CMP10",
        "department": "Data Analyst"
    },
    {
        "name": "พงษ์พัฒน์ วงศ์ชัย",
        "age": 25,
        "email": "phongphat.wongchai@enterprise.com",
        "salary": 27000,
        "company": "CMP08",
        "department": "DevOps"
    },
    {
        "name": "ธนกฤต บุญส่ง",
        "age": 30,
        "email": "thanakrit.bunsong@business.co",
        "salary": 32500,
        "company": "CMP04",
        "department": "Product Manager"
    },
    {
        "name": "ธนากร สุขสวัสดิ์",
        "age": 28,
        "email": "thanakorn.sukswasdi@startup.io",
        "salary": 29500,
        "company": "CMP02",
        "department": "BA"
    },
    {
        "name": "สิรวิชญ์ มีประสิทธิ์",
        "age": 26,
        "email": "sirisit.meeprasit@tech.com",
        "salary": 28500,
        "company": "CMP05",
        "department": "Frontend"
    },
    {
        "name": "วิศวกร ศรีสุข",
        "age": 29,
        "email": "wisaeng.suks@corporation.org",
        "salary": 31000,
        "company": "CMP09",
        "department": "Marketing Manager"
    },
    {
        "name": "วิศุทธิ์ ศิลปวัฒน์",
        "age": 27,
        "email": "wisut.silpawat@company.net",
        "salary": 29000,
        "company": "CMP07",
        "department": "Data Engineer"
    },
    {
        "name": "ศรัณย์ วงศ์ชัย",
        "age": 25,
        "email": "saran.wongchai@service.org",
        "salary": 28000,
        "company": "CMP10",
        "department": "Full-stack"
    },
    {
        "name": "วิษณุ บุญส่ง",
        "age": 30,
        "email": "visanu.bunsong@business.co",
        "salary": 33000,
        "company": "CMP04",
        "department": "DevOps"
    },
    {
        "name": "วรวุฒิ สุขสวัสดิ์",
        "age": 28,
        "email": "woravut.sukswasdi@startup.io",
        "salary": 30000,
        "company": "CMP02",
        "department": "Product Manager"
    },
    {
        "name": "วสุพล ศรีสุข",
        "age": 26,
        "email": "vasupol.suks@tech.com",
        "salary": 29000,
        "company": "CMP05",
        "department": "Frontend"
    },
    {
        "name": "วราพร ศิลปวัฒน์",
        "age": 29,
        "email": "waraporn.silpawat@corporation.org",
        "salary": 31500,
        "company": "CMP09",
        "department": "Marketing Manager"
    },
    {
        "name": "วุฒิชัย ศิลปวัฒน์",
        "age": 27,
        "email": "wutticha.silpawat@company.net",
        "salary": 29500,
        "company": "CMP07",
        "department": "Data Engineer"
    }
]

employees.forEach(function (obj, index) {
    const employee_id = `EM${(index + 1).toString().padStart(2, '0')}`;
    db.collection("employees").doc(employee_id).set({
        name: obj.name,
        age: obj.age,
        email: obj.email,
        company: obj.company,
        department: obj.department,
        salary: obj.salary
    }).then(() => { console.log("Document written with ID : " + employee_id) })
});