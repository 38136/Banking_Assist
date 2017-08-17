var express = require('express');
var app = express();
var bodyParser=require('body-parser');
var fs=require('fs');
const FACEBOOK_ACCESS_TOKEN = 'EAAEWihjxxmgBAGPW3iDD4t7lq0HCPGohnzmuXaclOZBX22hwCqAtfb7Y1vNibuSUtwyWeVZCnx8NsZC8szAuc6LkFbN7kc7fmWMfsmQQQdrm7up15YpN7sHDOblOLO3jnk8bCWVqp0MfFSanV5T89qdiqtElhnPFoiv9YZCzSQZDZD';
const fburl='https://graph.facebook.com/v2.6/';
const request = require('request');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/webhook', function(req, res) {
  if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === FACEBOOK_ACCESS_TOKEN ) {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);          
  }  
});
