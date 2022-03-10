# SDSC Data Analysis Potential Questionnaire
This questionnaire can be used to collect important information about a company, their ML goals, 
data quality and overall potential for a data analysis. After the server receives a survey result 
two reports are generated and are sent via emails to a receiver email and the client, after that the data is deleted from the server.

The App can be configured by using Environment Variables or changing json objects in the project (-> Configuration).

The tool is using the surveyjs framework in a React App with NodeJS as a backend. I have merged the official surveyjs examples for [React](https://github.com/surveyjs/surveyjs_react_quickstart) and a [NodeJS](https://github.com/surveyjs/surveyjs-nodejs).
For further information visit those github pages or [the official SurveyJS website](https://surveyjs.io/).


## How to run this sample application
````
- git clone https://gitlab.teco.edu/walk/sdsc-questionaire.git
- cd server
- docker compose up
- open http://localhost/ in your web browser
````

## Configuration
### Docker Environment Variables
#### build
- `REACT_APP_URL=url`
  - !!! Also needs to be changed in `server/client/package.json` ->homepage !!!
  - Specifies the /url on which the app is served from (static files are served from /url/static)
- `REACT_APP_PAGE_TITLE=SDSC-BW Potentialanalyse`
  - Specifies the Page Title displayed in the browser Tab
#### runtime
- `SERVER_PORT=3000`
- `EMAIL_HOST=mail.host.de`
- `EMAIL_PORT=587`
- `EMAIL_USERNAME=senderemail`
  - address that sends all mails
- `EMAIL_PASSWORD=password`
- `SENDER_EMAIL="SDSC-BW" <mail@sdsc-bw.de> `
  - "Fred Foo" <foo@example.de>' format for friendly name
- `SDSC_RECEIVER_EMAIL=receiveremail`
  - address that receives mails on sdsc side
- `SEND_EMAIL_CC=1`
  - If enabled only one Email is sent to client with SDSC in CC
- `SEND_CLIENT_EMAIL=1`
  - If enabled sends Email to client (dataJSON must contain kontakt_email_adresse)
  - If disabled only one Email is sent to the sdsc
- `GENERIC_REPORT=1`
  - Enable if you want to use this app for a generic survey (will not include scores in the survey, just a list of all the answers)
  - You can set a html text that is displayed before the answers.
- `NO_EMAIL_AUTH=1`  #Include if no email authentication needed
- `EMAIL_SECURE` you can change the secure option for nodemailer (default false)

### Survey JSON
The Survey can be changed by changing the survey file in `server/client/src/assets/survey_json.js`.
You can copy paste the json in [here](https://surveyjs.io/create-survey) to edit.

### Change content
If you want to change the title or descriptions in the report or the content of the email, 
you can do this in `server/app/variables.js`.


### Change Style
The Project consists of a ReactJS Frontend and a NodeJS Backend.
- The actual survey is in `server/client/src/Survey.js`
  - The theme is applied here
  - `Survey.css` contains additional css for the survey.
  - `font.css` contains the font
- css for the report is in `server/app/html_report/html_parts.js`