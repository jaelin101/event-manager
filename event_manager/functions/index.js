const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();

const express = require('express');
const api = express();

api.get('/:id', (req,res) => {

    const eventRef = db.collection('events').doc(req.params.id);

    const getDoc = eventRef.get()
    .then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
        return res.send('Not Found')
      } 
        console.log(doc.data());
        return res.send(doc.data());
    })
    .catch(err => {
      console.log('Error getting document', err);
    });

});

api.get('/', (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");
    
    db.collection("events").get()
        .then(querySnapshot => { 
            let eventArray = [];

            querySnapshot.forEach(doc => {
                const data = doc.data();
                if (data.isPublished) {
                    eventArray.push(doc.data());
                }
            });

            return res.json(eventArray);
        })
        .catch(err => console.log(err));

});


// Expose Express API as a single Cloud Function:
exports.api = functions.https.onRequest(api);