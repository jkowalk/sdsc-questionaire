/**
 * Text für den Kundenreport
 * <br> für Umbruch
 */
const text_basic_report = {
    title: "Ihr Datenanalyse-Potential Report",
    subtitle: "Der Erste Schritt zur Datenanalyse",
    intro_text: "Vielen Dank für Ihre Angaben und Ihr Interesse an einer Datenanalyse. <br>  Anhand Ihrer Angaben haben wir eine erste Analyse Ihres Potentials durchgeführt. <br>\n        Dieser Report ist eine erste Einschätzung, wie bereit Ihr Unternehmen für eine Datenanalyse ist. <br><br>\n        Unsere Experten werden sich so bald wie möglich bei Ihnen melden, um weiter Schritte zu besprächen. Ihre Angaben\n        helfen uns\n        Ihnen ein individuelles Angebot an Handlungsempfehlungen anbieten zu können. <br>\n        Die folgenden Seiten können Ihnen helfen, Stärken und Schwächen Ihres Unternehmens zu identifizieren.",
    dateneffizienz_erklärung: "Um möglichst gute Ergebnisse beim Maschinellen Lernen zu erhalten, müssen die Algorithmen mit möglichst vielen, qualitativ hochwertigen Daten trainiert werden.\n        Daten schlechter Qualität nutzen dem Algorithmus entweder nichts, oder führen sogar zu falschen Ergebnissen. Die Dateneffizienz beschreibt, wie gut die Daten vom Algorithmus\n        verwendet werden können. Also ob diese für die Aufgabe relevant sind, wichtige Informationen oder Zustände enthalten und nur sehr wenige unwichtige, redundante Werte enthalten sind.\n    ",
    ml_kompetenz_erklärung: "Ihr Personal ist eine wichtige Grundlage in Ihrem Unternehmen und bestimmt auch, wie gut Sie Maschinelles Lernen integrieren können. Gut geschultes Personal, mit viel Wissen\n        in Maschinellem Lernen und Datenmanagement können sehr hilfreich sein.",
    datenorganisation_erklärung: "Eine gute Organisation Ihrer Daten ermöglicht einen reibungslosen Ablauf von Datenzugriffen, Analysen, Wartung und der Datenerhebung.\n        Eine gute Strukturierung der Daten, Dokumentation, eine durchdachte Datenerhebung und geregelte Prozesse sind wichtig.\n    ",
    fehlerfreiheit_erklärung: "Selbstverständlich sollten die Daten möglichst fehlerfrei sein. Was hier erst einmal trivial klingt, ist in der Praxis selten zu 100 % gegeben.\n        Manchmal fehlen Werte in den Daten, es gibt Inkonsistenzen, es werden unterschiedliche Formate für die Uhrzeit, Temperatur, o.Ä verwendet.\n   ",
    problemstellung_erklärung: "Falls Sie Interesse an einer Potentialanalyse haben, ist es für uns hilfreich zu wissen, was genau Sie benötigen, welche Ziele Sie verfolgen und was Sie sich\n        von der Potentialanalyse erhoffen.\n    ",
    aktualität_erklärung: "Der Algorithmus sollte nur mit Daten trainiert werden, die für den Einsatzzweck noch aktuell sind. Veraltete Einstellungen oder Kennwerte einer Maschine würden sonst\n        zu einem falschen Ergebnis führen.",
};

/**
 * Text für die Email an den Kunden
 * Nach der Anrede "Sehr geehrte/r Frau/Herr Vorname Nachname,"
 * \n für Umbruch
 */
const email_text = `
    vielen Dank für Ihr Interesse an einer Potentialanalyse. Im Anhang finden Sie den automatisch generierten Report.\n
    Unsere Experten werden sich so bald wie möglich bei Ihnen mit weiteren Schritten melden.\n\n
    Mit freundlichen Grüßen\n
    Ihr Team vom Smart Data Solution Center BW`;


/**
 * HTML, das beim Generic Report vor den Umfrageantworten angezeigt wird.
 * @type {string}
 */
const genericReportHTMLBeforeSurveyAnswers = "";

exports.text_basic_report = text_basic_report;
exports.email_text = email_text;
exports.genericReportHTMLBeforeSurveyAnswers = genericReportHTMLBeforeSurveyAnswers;