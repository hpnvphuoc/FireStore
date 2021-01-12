const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors");
const express = require("express");
const app = express();

app.get("/helloworld",(req,res)=>{
    return res.status(200).send("Hello world");
})

exports.app=functions.https.onRequest(app)