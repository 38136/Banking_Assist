const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/ai', (req, res) => {
    if (request.body.result.action === "greeting") {

        let json = JSON.parse(body);
        let fbUsername = bodyObj.first_name;
        let sender = event.sender.id;

        request.get((err, response, body) => {
            if (!err && response.statusCode == 200) {
                let textResponse = "hi" + fbUsername + "need to open the account ? Which type Saving or Current Account ?"

                return res.json({
                    speech: textResponse,
                    display: textResponse,
                    source : "greeting"
                });
            }
            else {
                return res.status(400).json({
                    status : {
                        code : 400,
                        errorType : "Error while binding the username"
                    }
                });
            }
        });
    }
});
