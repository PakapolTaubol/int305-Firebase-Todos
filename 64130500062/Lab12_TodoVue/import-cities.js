const { initializeApp } = require('firebase-admin/app');
const { getFirestore} = require('firebase-admin/firestore');

const app = initializeApp({
    apiKey: "AIzaSyDmlwVUv7jFLo03xLykWPIFz6kGiht8EBo",
    authDomain: "int305fb.firebaseapp.com",
    projectId: "int305fb",
    storageBucket: "int305fb.appspot.com",
    messagingSenderId: "1025419955804",
    appId: "1:1025419955804:web:adc693d3c774e0f3352099"
}) ;

var db = getFirestore() ;

var cities = [
    {
        "id": "SF",
        "name": "San Francisco",
        "state": "CA",
        "country": "USA",
        "capital": false,
        "population": 860000,
        "regions": ["west_coast","norcal"]
    },
    {
        "id": "LA",
        "name": "Los Angeles",
        "state": "CA",
        "country": "USA",
        "capital": false,
        "population": 3900000,
        "regions": ["west_coast","social"]   
    },
    {
        "id": "SF",
        "name": "San Francisco",
        "state": "CA",
        "country": "USA",
        "capital": false,
        "population": 680000,
        "regions": ["east_coast"]
    },
    {
        "id": "TOK",
        "name": "Tokyo",
        "state": null,
        "country": "Japan",
        "capital": true,
        "population": 9000000
    },{
        "id": "BJ",
        "name": "Beijing",
        "state": null,
        "country": "China",
        "capital": true,
        "population": 21500000,
        "regions": ["jingjinji","hebei"]
    }
]

cities.forEach(function(obj){
    db.collection("cities").add({
        id: obj.id,
        name: obj.name,
        state: obj.state,
        country: obj.country,
        capital: obj.capital,
        population: obj.population,
        regions: obj.regions
    }).then(function(docRef){
        console.log("Document written with ID: ",docRef.id) ;
    }).catch(function(error){
        console.log("Error adding document: ",error) ;
    }) ;
}) ;

