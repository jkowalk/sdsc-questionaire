var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./html_report/all_answers.html', 'utf8');
var options = {
    viewportSize:  {
        width: 480,
        height: 800
    }
};

createPDF = function () {
    let html = fs.readFileSync('./html_report/index.html', 'utf8');
    let html2 = fs.readFileSync('./html_report/all_answers.html', 'utf8');
    let options1 = {border: {
            top: "10mm",            // default is 0, units: mm, cm, in, px
            bottom: "10mm"
        },
        timeout: 30000,
        format: "A4"
    };
    let options2 = {
        timeout: 30000,
        format: "A4"
    };
    pdf.create(html, options).toFile('./sadf.pdf', function (err, res) {
        if (err) return console.log(err);
        console.log(res); // { filename: '/app/businessscard.pdf' }
    });
    pdf.create(html2, options).toFile('./bhfda.pdf', function (err, res) {
        if (err) return console.log(err);
        console.log(res); // { filename: '/app/businesscard.pdf' }
    });
}

module.exports = createPDF;