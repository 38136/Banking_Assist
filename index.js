const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/', (req, res) => {
    if (req.body.result.action === "greeting") {

//         let json = JSON.parse(body);
//         let fbUsername = json.first_name;
        

//          request.get((err, response, body) => {
//             if (!err && response.statusCode == 200) {
//                 let textResponse = "hi" + fbUsername + "need to open the account ? Which type Saving or Current Account ?"

//                 return res.json({
//                     speech: textResponse,
//                     display: textResponse,
//                     source : "greeting"
//                 });
//             }
//             else {
//                 return res.status(400).json({
//                     status : {
//                         code : 400,
//                         errorType : "Error while binding the username"
//                     }
//                 });
//             }
//         });
        
            if (req.body.result.resolvedQuery == "hi") {
                let textResponse = "hi, Siri need to open the account ? Which type Saving or Current Account ?"
                 return res.json({
                    speech: textResponse,
                    display: textResponse,
                    source : "greeting"
                });
            }
     }
  
});

  app.listen(process.env.PORT || 8080, function (message) {
    console.log("Server is running on the port...");
}) 
