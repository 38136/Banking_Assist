var express = require('express');
var app = express();
var bodyParser=require('body-parser');
var fs=require('fs');
const FACEBOOK_ACCESS_TOKEN = 'EAAEWihjxxmgBAGPW3iDD4t7lq0HCPGohnzmuXaclOZBX22hwCqAtfb7Y1vNibuSUtwyWeVZCnx8NsZC8szAuc6LkFbN7kc7fmWMfsmQQQdrm7up15YpN7sHDOblOLO3jnk8bCWVqp0MfFSanV5T89qdiqtElhnPFoiv9YZCzSQZDZD';
const fburl='https://graph.facebook.com/v2.6/';
const request = require('request');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//-----------------------------------------
app.post('/webhook', function (req, res) {
  var data = req.body;

  // Make sure this is a page subscription
  if (data.object === 'page') {

    // Iterate over each entry - there may be multiple if batched
    data.entry.forEach(function(entry) {
      var pageID = entry.id;
      var timeOfEvent = entry.time;

      // Iterate over each messaging event
      entry.messaging.forEach(function(event) {
        if (event.message) {
          receivedMessage(event);
        } else {
          console.log("Webhook received unknown event: ", event);
        }
      });
    });

    // Assume all went well.
    //
    // You must send back a 200, within 20 seconds, to let us know
    // you've successfully received the callback. Otherwise, the request
    // will time out and we will keep trying to resend.
    res.sendStatus(200);
  }
});
  
//---------------------------------------------

function receivedMessages(event){
  let senderId = event.sender.id;
  let reciptentId = event.recipient.id;
  let timeOfMessage = event.timespan;
  let message = event.message;
  
  console.log("Received message from user %d and page %d at %d with message", senderId, timeOfMessage, );
  console.log(json.stringify(message));
  
  let messageId  = message.mid;
  let messageText = message.text;
  let messageAttachment = message.attachment;
  
  if(messageText) {
  switch(messageText) { 
    case 'generic' :
      sendGenericMessage(senderId);
      break;
      
    default :
      sendTextMessage(senderId, messageText);
  }
    else if (messageAttachment) {
    sendTextMessage(senderId , "message with attachment");
    }
}
  
  function sendGenericMessage(recipitentId, messageText){
  // latter will add the code
  }
  
  function sendTextMessage(recipitentId, messageText) {
      let messageData = {
      recipitent :{
      id : recipitentId
      },
        message : {
        text : messageText
        }
      };
    callSendAPI(messageData){
      request({
      
      });
  }
