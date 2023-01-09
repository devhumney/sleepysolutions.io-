const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public' + '/index.html');
} )



app.post('/submit', (req, res) => {
if(
    req.body.captcha === undefined ||
    req.body.captcha === '' ||
    req.body.captcha === null
){
    return res.json({"success": false, "msg": "Please select captcha"});
//Secret key
const secretKey = '6Le3d8whAAAAAL_AYNWB5bUsNk79obaKAQcHVCJ8';

// Verify URL

const verifyUrl = `https://google.com/recaptch/api/siteverify?secret=$
{secretKey}&response${req.body.captcha}&remoteip=${req.connection.remoteAddress}`;


//Make request to Verify URL

request(verifyURL, (err, response, body) => {
    body = JSON.parse(body);

    //If NOT successful

    if(body.success!== undefined && !body.success){
        return res.json({"success": false, "msg": "Failed captch verification!"});
    }

    //If success
    return res.json({"success": true, "msg": "Captcha passed!"});
    
});


}});




app.listen(3000, () => {
    console.log('Server started on port 3000')
});