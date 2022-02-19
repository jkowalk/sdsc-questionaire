const {sendEmail} = require("./email");
const fs = require("fs");
const {generateBasicReportPDF, generateFullReportPDF, generateGenericReportPDF} = require("./pdf_generator");
const variables = require("./variables");

const sdsc_email = process.env.SDSC_RECEIVER_EMAIL || "";

/**
 * Generates Html, then PDF, sends Mail and deletes file again (for Potentialanalyse)
 * @param dataJson
 * @param surveyJson
 */
function handleSubmission(dataJson, surveyJson) {
    try {
        generateFullReportPDF(dataJson, surveyJson, sendEmailToSDSC, handleSdscError);
    } catch (err) {
        handleSdscError(err);
    }
    if (process.env.SEND_CLIENT_EMAIL) {
        try {
            generateBasicReportPDF(dataJson, sendClientEmail, handleClientError);
        } catch (err) {
            handleClientError(err, dataJson);
        }
    } else
        console.log("Client mail disabled");
}

/**
 * Generates Html, then PDF, sends Mail and deletes file again (for all possible surveys)
 * @param dataJson
 * @param surveyJson
 */
function handleGenericSubmission(dataJson, surveyJson) {
    try {
        generateGenericReportPDF(dataJson, surveyJson, sendEmailToSDSC, handleSdscError);
    } catch (err) {
        handleSdscError(err);
    }

    if (process.env.SEND_CLIENT_EMAIL) {
        try {
            generateGenericReportPDF(dataJson, surveyJson, sendClientEmail, handleClientError);
        } catch (err) {
            handleClientError(err, dataJson);
        }
    }
}

/**
 * Sends email to dataJson.kontakt_email_adresse
 * @param pdf_path
 * @param dataJson
 */
function sendClientEmail(pdf_path, dataJson) {
    let content = `\nSehr geehrte/r ${dataJson.kontakt_vorname} ${dataJson.kontakt_nachname},\n \n` + variables.email_text;

    sendEmail(dataJson.kontakt_email_adresse, "Ihr Datenanalys-Potential Report", content, [{
        filename: "report.pdf",
        path: pdf_path
    }])
        .finally(() => {
            handleSuccess(pdf_path)
        })
        .catch((reason) => {
            handleClientError(reason, dataJson);
        });
}

/**
 * Sends email to specified SDSC Receiver
 * @param pdf_path
 * @param dataJson
 */
function sendEmailToSDSC(pdf_path, dataJson) {
    let content = `Im Anhang befindet sich der automatisch generierte Report.`;
    if (!process.env.GENERIC_REPORT) {
        content += `\n\n
        Unternehmen: ${dataJson.unternehmensname}, \n
        Bearbeiter: ${dataJson.kontakt_vorname} ${dataJson.kontakt_nachname},\n
        Email: ${dataJson.kontakt_email_adresse},\n
        Telefon: ${dataJson.kontakt_telefonnummer}\n
        Adresse: ${dataJson.unternehmensanschrift}
        \n\n`;
    }
    const subject = (!process.env.GENERIC_REPORT ? "Neue Anfrage zur Potentialanalyse" : "Neue Anfrage");
    sendEmail(
        sdsc_email,
        subject,
        content,
        [{filename: `${dataJson.unternehmensname}_report.pdf`, path: pdf_path},
            {filename: `${dataJson.unternehmensname}.json`, content: JSON.stringify(dataJson)},]
    ).finally(() => {
        handleSuccess(pdf_path)
    })
        .catch((reason) => {
            console.log(reason);
        });
}

/**
 * Sends Mail to SDSC on Error on client report generation
 * @param msg
 * @param dataJson
 */
function handleClientError(msg, dataJson) {
    console.log("Client Error");
    console.log(msg);
    let content = `Es gab einen Fehler bei der Generierung und Versendung des Potentialanalyse Reports, mit folgender Fehlermeldung: \n\n
            ${msg} \n\n
            Das Json mit den erhaltenen Daten ist angefügt.`;
    sendEmail(
        sdsc_email,
        "Fehler bei Potentialanalyse Eingang",
        content,
        [{filename: `data.json`, content: JSON.stringify(dataJson)},]
    ).catch((reason) => {
        console.log(reason);
    });
}

function handleSdscError(msg) {
    console.log(msg);
}

/**
 * Deletes PDF on success
 * @param path
 */
function handleSuccess(path) {
    fs.unlink(path, console.log);
}

module.exports.handleSubmission = handleSubmission;
module.exports.handleGenericSubmission = handleGenericSubmission;