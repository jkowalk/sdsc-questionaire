import React, {useState} from "react";
import * as Survey from "survey-react";
import * as widgets from "surveyjs-widgets";
import "survey-react/survey.css";

import "survey-react/modern.css";
import "./Survey.css";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import "jquery-bar-rating/dist/themes/css-stars.css";

import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";

import "pretty-checkbox/dist/pretty-checkbox.css";

import { surveyJson } from "./assets/survey_json.js";


//import "icheck/skins/square/blue.css";
window["$"] = window["jQuery"] = $;
//require("icheck");

const logo = require('./images/logo.png');


var defaultThemeColors = Survey
    .StylesManager
    .ThemeColors["modern"];

/**
 * Applies the theme
 */
defaultThemeColors["$main-color"] = "var(--corp_blue)"; //purple- the theme's underlines and button'
defaultThemeColors["$main-hover-color"] = "var(--corp_anthracite_transparent)";
defaultThemeColors["$text-color"] = "var(--corp_anthracite)"; //questions text
defaultThemeColors["$header-color"] = "var(--lilac)";
defaultThemeColors["$header-background-color"] = "var(--light_green)";
defaultThemeColors["$body-container-background-color"] = "#fff0";
defaultThemeColors["$progress-buttons-color"] = "var(--corp_blue)";
defaultThemeColors["$answer-background-color"] = "--light_green_transparent";
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


Survey
    .StylesManager
    .applyTheme("modern");



//widgets.icheck(Survey, $);
widgets.prettycheckbox(Survey);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
//widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

function onComplete(result) {
    console.log(result.data);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({surveyResult: result.data, surveyJson: surveyJson})
    };
    fetch('/post', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
}


export function SurveyPage() {

    const model = new Survey.Model(surveyJson);
    return (
        <div>
            <img className={"sdsc-logo"} src={String(logo)} alt={"SDSC-BW Logo"}/>
            <Survey.Survey
            model={model}
            onComplete={onComplete}
            css={customCss}
            />
        </div>

    );
  }
  