const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HmK6lJ5kitpbpAHcG1m3nugGBTEEUeowCm0nf1LzTv9ki8JyErjNGXoAT6qYCbtlbpPhDtBm2qADVy1JFTSVTuc00MEWenAYk')

//TO SET UP API

// API

// App config
const app = express ();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('Hello'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total; 

    // paymentIntent - confirmation of payment
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    // Send a request to backend server, then respond back 

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/challenge-38ceb/us-central1/api