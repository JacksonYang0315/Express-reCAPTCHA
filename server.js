const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    // Sending our HTML file to browser.
    res.sendFile(__dirname + '/index.html');
})

app.post('/login', (req, res) => {
    axios.get(`https://www.google.com/recaptcha/api/siteverify?secret=6Lc_b6cUAAAAABf7KkKY3SJPaB_KLbPzu8CtUBYJ&response=${req.body.token}`)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });

})


app.use("*", function (req, res) {
    res.status(404).send("404");
})

app.listen(3000);