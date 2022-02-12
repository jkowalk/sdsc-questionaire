const {
    css_style_basic,
    radar_chart_script,
    css_style_all_questions,
    css_style_generic_report
} = require("./html_report/html_parts");
const {genericReportHTMLBeforeSurveyAnswers} = require("./variables");
const variables = require("./variables").text_basic_report;

/**
 * Maps Scores from range [in_min, in_max] to [out_min, out_max]
 * @param num
 * @param in_min
 * @param in_max
 * @param out_min
 * @param out_max
 * @returns {number}
 */
const scaleScores = (num, in_min = 1, in_max = 5, out_min = 0, out_max = 100, round = true) => {
    if (Number.isNaN(num)) return 0;
    let score = (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    if (Number.isNaN(score)) return 0;
    if (round)
        score = Math.round(score);
    return score > out_min ? score : out_min;
}

const escapeHTML = (html) => {
    try {
        let s = html.toString();
        let h, i, n, c;
        n = s.length;
        h = '';
        for (i = 0; i < n; i++) {
            c = s.charCodeAt(i);
            if ((c >= 48 && c <= 57)
                || (c >= 65 && c <= 90)
                || (c >= 97 && c <= 122)
                || (c === 32)) {
                h += String.fromCharCode(c);
            } else {
                h += '&#' + c + ';';
            }
        }
        return h;
    } catch {
        return null;
    }
}

/**
 * Generates HTML with a Score Chart and descriptions for each dimension (for Client)
 **/
function generateBasicReportHTML(dataJson) {
    return `
        <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>SDSC Potentialanalyse Report</title>

    ${css_style_basic}
</head>
<body onload="load()">
<header>
    <h1 class="title">${variables.title}</h1>

    <a href="https://sdsc-bw.de"><img class="sdsc-logo" src="https://www.sdsc-bw.de/wp-content/uploads/2019/07/logo.png" alt="SDSC-BW Logo" onerror="this.src='';"/></a>
</header>
<div class="text">
    <h2 class="subtitle">${variables.subtitle}</h2>
    <p>
        ${variables.intro_text}
    </p>
</div>
<div class="text">
    <h2 class="subtitle">Überblick</h2>
    <div id="overview_wrapper">
        <div id="overall_score">${scaleScores(dataJson.overall_score)} %</div>
        <div id="score_perc1">${scaleScores(dataJson.score_dateneffizienz)} %</div>
        <div id="score_perc2">${scaleScores(dataJson.score_datenorganisation)} %</div>
        <div id="score_perc3">${scaleScores(dataJson.score_problemstellung)} %</div>
        <div id="score_perc4">${scaleScores(dataJson.score_aktualität)} %</div>
        <div id="score_perc5">${scaleScores(dataJson.score_fehlerfreiheit)} %</div>
        <div id="score_perc6">${scaleScores(dataJson.unternehmen_ml_kompetenz)} %</div>
        <div id="microservices"></div>
    </div>
</div>
</div>

<div style="page-break-before: always; height: 1px"></div>

<div class="text">
    <div class="score">Ihr Score: ${scaleScores(dataJson.score_dateneffizienz)} %</div>
    <h2 class="subtitle">Dateneffizienz</h2>
    <p>
    ${variables.dateneffizienz_erklärung}
        </p>
</div>

<div class="text">
    <div class="score">Ihr Score: ${scaleScores(dataJson.unternehmen_ml_kompetenz)} %</div>
    <h2 class="subtitle">Maschinelles Lernen Kompetenz</h2>
    <p>
        ${variables.ml_kompetenz_erklärung}
    </p>
</div>

<div class="text">
    <div class="score">Ihr Score: ${scaleScores(dataJson.score_datenorganisation)} %</div>
    <h2 class="subtitle">Datenorganisation</h2>
    <p>
    ${variables.datenorganisation_erklärung}
        </p>
</div>

<div class="text">
    <div class="score">Ihr Score: ${scaleScores(dataJson.score_fehlerfreiheit)} %</div>
    <h2 class="subtitle">Fehlerfreiheit</h2>
    <p>
    ${variables.fehlerfreiheit_erklärung}
         </p>
</div>

<div class="text">
    <div class="score">Ihr Score: ${scaleScores(dataJson.score_problemstellung)} %</div>
    <h2 class="subtitle">Problemstellung</h2>
    <p>
    ${variables.problemstellung_erklärung}
        </p>
</div>

<div class="text">
    <div class="score">Ihr Score: ${scaleScores(dataJson.score_aktualität)} %</div>
    <h2 class="subtitle">Aktualität</h2>
    <p>
        ${variables.aktualität_erklärung}
    </p>
</div>
<footer><div>Generiert am: ${new Date().toLocaleDateString("de-DE")}</div><div>Für: ${escapeHTML(dataJson.unternehmensname)}</div><div>Weitere Informationen unter <a href="https://sdsc-bw.de">sdsc-bw.de</a> oder fragen Sie uns direkt.</div></footer>
${radar_chart_script}
        <script>
    function load() {
        var myrange = ["0 %", "25 %", "50 %", "75 %", "100 %"];


        radar.show('#microservices', {
            size: 550,
            curve: false,
       metrics: [
                {
                    name: "Dateneffizienz",
                    range: myrange,
                    target: 4,
                    actual: ${scaleScores(dataJson.score_dateneffizienz, 1, 5, 0, 4, false)},
                },
                {
                    name: "Datenorganisation",
                    range: myrange,
                    target: 4,
                    actual: ${scaleScores(dataJson.score_datenorganisation, 1, 5, 0, 4, false)},
                },
                {
                    name: "Problemstellung",
                    range: myrange,
                    target: 4,
                    actual: ${scaleScores(dataJson.score_problemstellung, 1, 5, 0, 4, false)}
                },
                {
                    name: "Aktualität",
                    range: myrange,
                    target: 4,
                    actual: ${scaleScores(dataJson.score_aktualität, 1, 5, 0, 4, false)}
                },
                {
                    name: "Fehlerfreiheit",
                    range: myrange,
                    target: 4,
                    actual: ${scaleScores(dataJson.score_fehlerfreiheit, 1, 5, 0, 4, false)}
                },
                {
                    name: "Maschinelles Lernen Kompetenz",
                    range: myrange,
                    target: 4,
                    actual: ${scaleScores(dataJson.unternehmen_ml_kompetenz, 1, 5, 0, 4, false)}
                }
            ]
        });

        var tags = document.getElementsByTagName("text");
        tags[0].textContent = "100 %";
        tags[1].textContent = "75 %";
        tags[2].textContent = "50 %";
        tags[3].textContent = "25 %";
    }
</script>
</body>
</html>
</body>
</html>

    `;
}

/**
 * Generates HTML with a Score Chart and all survey answers (for SDSC)
 **/
function generateFullReportHTML(dataJson, surveyJson) {
    return `
        <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>SDSC Potentialanalyse Report</title>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link href="https://unpkg.com/survey-jquery@1.9.8/modern.css" type="text/css" rel="stylesheet" />
    <script src="https://unpkg.com/survey-jquery@1.9.8/survey.jquery.min.js"></script>

    ${css_style_all_questions}
  </head>
  <body onload="load()">
  <header>
    <h1 class="title">Datenanalyse-Potential Report</h1>
    <div style="height: 1rem"></div>
    <h2 class="subtitle">${escapeHTML(dataJson.unternehmensname)}</h2>

    <a href="https://sdsc-bw.de"><img class="sdsc-logo" src="https://www.sdsc-bw.de/wp-content/uploads/2019/07/logo.png" alt="SDSC-BW Logo" onerror="this.src='';" /></a>
  </header>
  <div class="text">
    <h2 class="subtitle">Überblick</h2>
    <div id="overview_wrapper">
        <div id="overall_score">${scaleScores(dataJson.overall_score)} %</div>
        <div id="score_perc1">${scaleScores(dataJson.score_dateneffizienz)} %</div>
        <div id="score_perc2">${scaleScores(dataJson.score_datenorganisation)} %</div>
        <div id="score_perc3">${scaleScores(dataJson.score_problemstellung)} %</div>
        <div id="score_perc4">${scaleScores(dataJson.score_aktualität)} %</div>
        <div id="score_perc5">${scaleScores(dataJson.score_fehlerfreiheit)} %</div>
        <div id="score_perc6">${scaleScores(dataJson.unternehmen_ml_kompetenz)} %</div>
        <div id="microservices"></div>
    </div>
      <div class="tiles">
        <div>
          <h4>Eingesendet</h4>
          ${new Date().toLocaleDateString("de-DE")} ${new Date().toLocaleTimeString("de-DE")}
        </div>
        <div>
          <h4>Bearbeiter</h4>
          ${escapeHTML(dataJson.kontakt_vorname)} ${escapeHTML(dataJson.kontakt_nachname)}
        </div>
        <div>
          <h4>Email</h4>
          ${escapeHTML(dataJson.kontakt_email_adresse)}
        </div>
        <div>
          <h4>Telefonnummer</h4>
          ${escapeHTML(dataJson.kontakt_telefonnummer)}
        </div>
        <div>
          <h4>Anschrift</h4>
          ${escapeHTML(dataJson.unternehmensanschrift)}
        </div>
        <div>
          <h4>Ausreichend Daten gesammelt</h4>
          ${(dataJson.ausreichend_daten_gesammelt > 2).toString()}
        </div>
        <div>
          <h4>Für Förderung geeignet</h4>
          ${escapeHTML(dataJson.förderung_geeignet)}
        </div>
        <div>
          <h4>DSGVO und Rechte ok</h4>
          ${escapeHTML(dataJson.rechtlich_ok)}
        </div>
        </div>
        </div>
        <div style="page-break-before: always; height: 1rem"></div>
       <div class="text"> 
       <div class="tiles">
        <div style="grid-row: span 2;">
          <h4>Ziel/Problem</h4>
          ${escapeHTML(dataJson.ziel_potentialanalyse_beschreibung)}
        </div>
        <div style="grid-row: span 2;">
          <h4>Abteilungsbeschreibung</h4>
          ${escapeHTML(dataJson.Abteilungsbeschreibung)}
         </div>
        <div style="grid-row: span 2;">
          <h4>Datenerhebung Beschreibung</h4>
          ${escapeHTML(dataJson.daten_erhebung_text)}
         </div>
      </div>
    </div>

 <div style="page-break-before: always"></div>
  <div id="surveyContainer"></div>

  <footer><div>Generiert am: ${new Date().toLocaleDateString("de-DE")} ${new Date().toLocaleTimeString("de-DE")}</div><div>Für Unternehmen: ${escapeHTML(dataJson.unternehmensname)}</div><div>Weitere Informationen: <a href="https://sdsc-bw.de">sdsc-bw.de</a></div></footer>

  <script>
    function load() {
      loadChart();
      loadSurvey();
    }
  
    function loadSurvey() {

      // SurveyJS Script
      var defaultThemeColors = Survey
              .StylesManager
              .ThemeColors["modern"];

      /**
       * Applies the theme
       */
      defaultThemeColors["$main-color"] = "#007ea9"; //purple- the theme's underlines and button'
      defaultThemeColors["$main-hover-color"] = "#4a4a4abf";
      defaultThemeColors["$text-color"] = "#4a4a4a"; //questions text
      defaultThemeColors["$header-color"] = "var(--lilac)";
      defaultThemeColors["$header-background-color"] = "var(--light_green)";
      defaultThemeColors["$body-container-background-color"] = "#fff0";
      defaultThemeColors["$progress-buttons-color"] = "#007ea9";
      defaultThemeColors["$answer-background-color"] = "#ffffff";
      defaultThemeColors["$inputs-background-color"] = "rgb(255, 255, 255)";

      /**
       * Custom css classes
       */
      const customCss = {
        "title": "custom-title custom-survey-title", // Survey Title
        "description": "custom-description", // Survey Description
        "rating": {
          "item": "custom-rating-item"
        }
      };
      Survey.StylesManager.applyTheme("modern");

      var surveyJSON = JSON.parse(JSON.stringify(${JSON.stringify(surveyJson)}));
      function sendDataToServer(survey) {
        //send Ajax request to your web server.
        alert("The results are:" + JSON.stringify(survey.data));
      }

      var data = JSON.parse(JSON.stringify(${JSON.stringify(dataJson)}));
      var survey = new Survey.Model(surveyJSON);
      $("#surveyContainer").Survey({
        model: survey,
        onComplete: sendDataToServer,
        mode: 'display',
        css: customCss,
        data: data,
      });
      
      survey.showPreview();
    }

  </script>
  <script>
    function loadChart() {

      var myrange = ["0 %", "25 %", "50 %", "75 %", "100 %"];


              radar.show('#microservices', {
            size: 550,
            curve: false,
            metrics: [
                {
                    name: "Dateneffizienz",
                    range: myrange,
                    target: 4,
                    actual: ${scaleScores(dataJson.score_dateneffizienz, 1, 5, 0, 4, false)},
                },
                {
                    name: "Datenorganisation",
                    range: myrange,
                    target: 4,
                    actual: ${scaleScores(dataJson.score_datenorganisation, 1, 5, 0, 4, false)},
                },
                {
                    name: "Problemstellung",
                    range: myrange,
                    target: 4,
                    actual: ${scaleScores(dataJson.score_problemstellung, 1, 5, 0, 4, false)}
                },
                {
                    name: "Aktualität",
                    range: myrange,
                    target: 4,
                    actual: ${scaleScores(dataJson.score_aktualität, 1, 5, 0, 4, false)}
                },
                {
                    name: "Fehlerfreiheit",
                    range: myrange,
                    target: 4,
                    actual: ${scaleScores(dataJson.score_fehlerfreiheit, 1, 5, 0, 4, false)}
                },
                {
                    name: "Maschinelles Lernen Kompetenz",
                    range: myrange,
                    target: 4,
                    actual: ${scaleScores(dataJson.unternehmen_ml_kompetenz, 1, 5, 0, 4, false)}
                }
            ]
        });

      var tags = document.getElementsByTagName("text");
      tags[0].textContent = "100 %";
      tags[1].textContent = "75 %";
      tags[2].textContent = "50 %";
      tags[3].textContent = "25 %";
    }
  </script>
 ${radar_chart_script}
  </body>
</html>
  </body>
</html>

    `;
}

/**
 * Generates HTML with only Survey Answers
 **/
function generateGenericReportHTML(dataJson, surveyJson) {
    return `
        <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Report</title>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link href="https://unpkg.com/survey-jquery@1.9.8/modern.css" type="text/css" rel="stylesheet" />
    <script src="https://unpkg.com/survey-jquery@1.9.8/survey.jquery.min.js"></script>

    ${css_style_generic_report}
  </head>
  <body onload="load()">
   <div>${genericReportHTMLBeforeSurveyAnswers}</div>
    <div id="surveyContainer"></div>
  <footer><div>Generiert am: ${new Date().toLocaleDateString("de-DE")} ${new Date().toLocaleTimeString("de-DE")}</div></footer>

  <script>
    function load() {
      loadSurvey();
    }
  
    function loadSurvey() {

      // SurveyJS Script
      var defaultThemeColors = Survey
              .StylesManager
              .ThemeColors["modern"];

      /**
       * Applies the theme
       */
      defaultThemeColors["$main-color"] = "#007ea9"; //purple- the theme's underlines and button'
      defaultThemeColors["$main-hover-color"] = "#4a4a4abf";
      defaultThemeColors["$text-color"] = "#4a4a4a"; //questions text
      defaultThemeColors["$header-color"] = "var(--lilac)";
      defaultThemeColors["$header-background-color"] = "var(--light_green)";
      defaultThemeColors["$body-container-background-color"] = "#fff0";
      defaultThemeColors["$progress-buttons-color"] = "#007ea9";
      defaultThemeColors["$answer-background-color"] = "#ffffff";
      defaultThemeColors["$inputs-background-color"] = "rgb(255, 255, 255)";

      /**
       * Custom css classes
       */
      const customCss = {
        "title": "custom-title custom-survey-title", // Survey Title
        "description": "custom-description", // Survey Description
        "rating": {
          "item": "custom-rating-item"
        }
      };
      Survey.StylesManager.applyTheme("modern");

      var surveyJSON = JSON.parse(JSON.stringify(${JSON.stringify(surveyJson)}));
      function sendDataToServer(survey) {
        //send Ajax request to your web server.
        alert("The results are:" + JSON.stringify(survey.data));
      }

      var data = JSON.parse(JSON.stringify(${JSON.stringify(dataJson)}));
      var survey = new Survey.Model(surveyJSON);
      $("#surveyContainer").Survey({
        model: survey,
        onComplete: sendDataToServer,
        mode: 'display',
        css: customCss,
        data: data,
      });
      
      survey.showPreview();
    }

  </script>
  </body>
</html>
    `;
}


exports.generateBasicReportHTML = generateBasicReportHTML;
exports.generateFullReportHTML = generateFullReportHTML;
exports.generateGenericReportHTML = generateGenericReportHTML;