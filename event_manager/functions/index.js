// require("firebase/firestore");
// import * as admin from 'firebase-admin';

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://event-manager-8e18d.firebaseio.com'
  });
const express = require('express');

const api = express();
const db = admin.firestore();


api.get('/', (req, res) => {

    // const eventsRef = db.collection('events');
    // const events = eventsRef.get();

    // const eventDocs = events.docs.map(doc => doc.data());

    let events = (async function() {
        const snapshot = await db.collection('events').get();
        return snapshot.docs.map(doc => doc.data());
    });
    
    res.json(events);

});


// Expose Express API as a single Cloud Function:
exports.api = functions.https.onRequest(api);