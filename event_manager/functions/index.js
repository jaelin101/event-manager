// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

const express = require('express');

const api = express();

api.get('/', (req, res) => {

    const testJSON = {
        id: 1,
        title: 'Test Title',
        date: '08-25-20',
    }
    
    res.send(testJSON);

});


// Expose Express API as a single Cloud Function:
exports.api = functions.https.onRequest(api);