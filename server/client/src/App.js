import React from "react";
import "./App.css";
import "./fonts.css";

import { SurveyPage } from "./Survey";


import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export default function SurveyJSReactApplication() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={`/${process.env.REACT_APP_URL || "survey"}`} element={<SurveyPage />}/>
        </Routes>
    </BrowserRouter>
  );
}
