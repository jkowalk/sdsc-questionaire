/**
 * The NodeJs Backend
 */


const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const session = require("express-session");
const {handleSubmission, handleGenericSubmission} = require("./submission_handler");
const {verifyConnection} = require("./email");


var app = express();
app.use(
    session({
        secret: "mysecret",
        resave: true,
        saveUninitialized: true,
        //cookie: { secure: true }
    })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/**
 * Receives the Survey Result
 */
app.post(`/${process.env.REACT_APP_URL || "survey"}/post`, function (req, res) {
    let dataJSON = req.body.surveyResult;
    let surveyJSON = req.body.surveyJson;
    if (process.env.GENERIC_REPORT) {
        handleGenericSubmission(dataJSON, surveyJSON);
    } else {
        handleSubmission(dataJSON, surveyJSON);
    }
    res.sendStatus(200);
});


// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));
const app_path = "/" + (process.env.REACT_APP_URL || "survey");
// All other GET requests not handled before will return our React app
app.get(app_path, (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
const port = process.env.SERVER_PORT || 3000;
app.listen(port, function () {
    console.log("Listening on  " + port + app_path);
    console.log("GENERIC_REPORT: " + process.env.GENERIC_REPORT);
    console.log("SEND_CLIENT_EMAIL " + process.env.SEND_CLIENT_EMAIL);
});

// Check email connection
verifyConnection();
