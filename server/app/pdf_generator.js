const {generateBasicReportHTML, generateFullReportHTML, generateGenericReportHTML} = require("./html_generator");

const puppeteer = require("puppeteer");

/**
 * Generates a Basic Report for the Client with Score Chart and descriptions
 * @param dataJson
 * @param callbackSuccess
 * @param callbackError
 * @returns {Promise<void>}
 */
async function generateBasicReportPDF(dataJson, callbackSuccess, callbackError) {
    console.log("Generating Basic Report ...");

    let filename = "./tmp/" + new Date().valueOf() + "_" + dataJson.unternehmensname + "_basic.pdf";
    let html = generateBasicReportHTML(dataJson);

    generatePDF(html, filename)
        .then(() => {callbackSuccess(filename, dataJson);})
        .catch((err) => {callbackError(err, dataJson);});
}

/**
 * Generates a Full Report for the Client with Score Chart and all answers
 * @param dataJson
 * @param callbackSuccess
 * @param callbackError
 * @returns {Promise<void>}
 */
function generateFullReportPDF(dataJson, surveyJson, callbackSuccess, callbackError) {
    console.log("Generating Full Report ...");

    let filename = "./tmp/" + new Date().valueOf() + "_" + dataJson.unternehmensname + "_full.pdf";
    let html = generateFullReportHTML(dataJson, surveyJson);

    generatePDF(html, filename)
        .then(() => {callbackSuccess(filename, dataJson);})
        .catch((err) => {callbackError(err, dataJson);});
}

/**
 * Generates a Generic Report for the SDSC which can be used for all purposes
 * @param dataJson
 * @param callbackSuccess
 * @param callbackError
 * @returns {Promise<void>}
 */
function generateGenericReportPDF(dataJson, surveyJson, callbackSuccess, callbackError) {
    console.log("Generating Generic Report ...");

    let filename = "./tmp/" + new Date().valueOf() + "_" + dataJson.unternehmensname + "_generic.pdf";
    let html = generateGenericReportHTML(dataJson, surveyJson);

    generatePDF(html, filename)
        .then(() => {callbackSuccess(filename, dataJson);})
        .catch((err) => {callbackError(err, dataJson);});
}

/**
 * Generates the PDF using Puppeteer
 * @param html
 * @param path
 * @returns {Promise<void>}
 */
async function generatePDF(html, path) {
    let options = {
        PaperFormat: "A4",
        headerTemplate: "<p></p>",
        footerTemplate: "<p></p>",
        displayHeaderFooter: false,
        margin: {
            top: "0",
            bottom: "0",
        },
        printBackground: true,
        path: path,
    };

    const allowedResources = [
        'sdsc-bw.de',
        'unpkg.com/survey',
        'ajax.googleapis.com'
    ];

    const browser = await puppeteer.launch({
        args: ['--disable-dev-shm-usage', '--no-sandbox'],
        headless: true,
    });
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', (request) => {
        // ONLY ALLOW CERTAIN DOMAINS
        if (allowedResources.some(resource => request.url().includes(resource)))
            request.continue();
        // BLOCK OTHER REQUESTS
        else
            request.abort();
    });
    await page.setContent(html);
    await page.pdf(options);
    await browser.close();
    console.log("Finished " + path);
}

exports.generateBasicReportPDF = generateBasicReportPDF;
exports.generateFullReportPDF = generateFullReportPDF;
exports.generateGenericReportPDF = generateGenericReportPDF;