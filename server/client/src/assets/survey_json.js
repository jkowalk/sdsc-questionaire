export const surveyJson =
    {
     "locale": "de",
     "title": "Potentialanalyse",
     "description": {
      "de": "Ihr Einstieg in die Datenanalyse"
     },
     "logoPosition": "none",
     "completedHtml": {
      "default": "Thanks",
      "de": "<p> <br> Vielen Dank für Ihre Angaben und Ihr Interesse. <br><br> In Kürze erhalten Sie Ihren automatisch generierten Report, mit Ihrem Datenanalyse-Potential Ergebnis.<br> Unsere Experten melden sich bei so bald wie möglich bei Ihnen. </p>"
     },
     "pages": [
      {
       "name": "info-page",
       "elements": [
        {
         "type": "html",
         "name": "info",
         "html": {
          "de": "<h3>In wenigen Schritten vom Erstgespräch bis zur vollständigen Potentialanalyse für Ihr Unternehmen</h3>  <p><br> Füllen Sie diesen Fragebogen aus, um mehr aus Ihren Daten herauszuholen.  <br><br> Im Laufe des Fragebogens werden wir Ihnen Fragen zum Ziel der Potentialanalyse, sowie der Beschaffenheit Ihrer Daten stellen. Diese Informationen sind wichtig, damit wir Ihnen zielgerichtet und schnell helfen können. Falls Sie die Antwort auf eine Frage nicht wissen, lassen Sie das entsprechende Feld leer. <br><br> Vielen Dank.</p>"
         }
        }
       ]
      },
      {
       "name": "ueber_sie_1",
       "elements": [
        {
         "type": "radiogroup",
         "name": "rolle_im_unternehmen",
         "title": "Was ist Ihre Rolle im Unternehmen?",
         "isRequired": true,
         "choices": [
          {
           "value": "geschäftsleitung",
           "text": "Geschäftsleitung"
          },
          {
           "value": "abteilungsleitung",
           "text": "Abteilungsleitung"
          },
          {
           "value": "mitarbeiter",
           "text": "Mitarbeiter"
          }
         ],
         "hasOther": true,
         "otherText": "Sonstiges:"
        },
        {
         "type": "checkbox",
         "name": "arbeit_mit_daten",
         "title": {
          "default": "Wie sind Sie in die Arbeit mit Daten eingebunden?",
          "de": "Wie sind Sie in die Arbeit mit Daten eingebunden (im betroffenen Projekt)?"
         },
         "description": {
          "de": "(Mehrfachauswahl möglich)"
         },
         "isRequired": true,
         "choices": [
          {
           "value": "datenerhebung",
           "text": "Datenerhebung"
          },
          {
           "value": "datenwartung",
           "text": "Datenwartung"
          },
          {
           "value": "datenaufbereitung",
           "text": "Datenaufbereitung"
          },
          {
           "value": "datenanalyse",
           "text": "Datenanalyse"
          },
          {
           "value": "beratung",
           "text": "Beratung"
          },
          {
           "value": "personalverantwortung",
           "text": "Personalverantwortung"
          }
         ],
         "hasOther": true,
         "otherText": "Sonstiges:"
        }
       ],
       "title": "Über Sie"
      },
      {
       "name": "ueber_sie_2",
       "elements": [
        {
         "type": "rating",
         "name": "datenkenntnis",
         "title": {
          "de": "Ich kenne mich gut mit den Daten aus."
         },
         "description": {
          "de": "Sie verstehen, welche Daten in dem Datensatz sind, wie sie erhoben werden und welche Besonderheiten der Datensatz hat."
         },
         "rateValues": [
          "1",
          "2",
          "3",
          "4",
          "5"
         ],
         "rateMin": 0,
         "minRateDescription": {
          "de": "Stimme überhaupt nicht zu"
         },
         "maxRateDescription": {
          "de": "Stimme voll und ganz zu"
         }
        },
        {
         "type": "rating",
         "name": "sicher_datenumgang",
         "title": {
          "de": "Ich fühle mich sicher im Umgang mit den Daten."
         },
         "rateValues": [
          "1",
          "2",
          "3",
          "4",
          "5"
         ],
         "rateMin": 0,
         "minRateDescription": {
          "de": "Stimme überhaupt nicht zu"
         },
         "maxRateDescription": {
          "de": "Stimme voll und ganz zu"
         }
        },
        {
         "type": "rating",
         "name": "daten_erklären",
         "title": {
          "de": "Ich kann die Daten gut einer externen Person erklären."
         },
         "description": {
          "de": "Sie können erklären, wo und wie die Daten erhoben werden, was verschiedene Werte bedeuten, sowie welche Besonderheiten zu beachten sind."
         },
         "rateValues": [
          "1",
          "2",
          "3",
          "4",
          "5"
         ],
         "rateMin": 0,
         "minRateDescription": {
          "de": "Stimme überhaupt nicht zu"
         },
         "maxRateDescription": {
          "de": "Stimme voll und ganz zu"
         }
        }
       ],
       "title": {
        "default": "Test1",
        "de": "Über Sie"
       }
      },
      {
       "name": "ueber_sie_3",
       "elements": [
        {
         "type": "rating",
         "name": "ml_kenntnis",
         "title": {
          "de": "Ich kenne mich gut mit Maschinellem Lernen aus."
         },
         "description": {
          "de": "Sie verstehen Fachbegriffe, wie man Maschinelles Lernen in der Praxis anwenden kann und welche Eigenschaften die Daten für eine erfolgreiche Analyse haben müssen."
         },
         "rateValues": [
          "1",
          "2",
          "3",
          "4",
          "5"
         ],
         "rateMin": 0,
         "minRateDescription": {
          "de": "Stimme überhaupt nicht zu"
         },
         "maxRateDescription": {
          "de": "Stimme voll und ganz zu"
         }
        },
        {
         "type": "rating",
         "name": "anwendungsfall_kenntnis",
         "title": {
          "de": "Ich kenne mich gut mit dem Projekt aus, in dem die Datenanalyse stattfinden soll."
         },
         "description": {
          "de": "Sie verstehen alle Abläufe, Probleme und Besonderheiten im Projekt, könne diese gut kommunizieren und wissen in welche Richtung sich das Projekt entwickeln soll."
         },
         "rateValues": [
          "1",
          "2",
          "3",
          "4",
          "5"
         ],
         "rateMin": 0,
         "minRateDescription": {
          "de": "Stimme überhaupt nicht zu"
         },
         "maxRateDescription": {
          "de": "Stimme voll und ganz zu"
         }
        },
        {
         "type": "rating",
         "name": "zusammenhang_daten_ziel",
         "title": {
          "de": "Ich kenne den Zusammenhang zwischen den Daten und dem Ziel des Projekts."
         },
         "description": {
          "de": "Sie verstehen, wie die Daten verwendet werden können, um das Ziel des Projekts umzusetzen."
         },
         "rateValues": [
          "1",
          "2",
          "3",
          "4",
          "5"
         ],
         "rateMin": 0,
         "minRateDescription": {
          "de": "Stimme überhaupt nicht zu"
         },
         "maxRateDescription": {
          "de": "Stimme voll und ganz zu"
         }
        }
       ],
       "title": {
        "default": "Test2",
        "de": "Über Sie"
       }
      },
      {
       "name": "unternehmen_1",
       "elements": [
        {
         "type": "text",
         "name": "unternehmensname",
         "title": {
          "de": "Wie heißt Ihr Unternehmen?"
         },
         "isRequired": true
        },
        {
         "type": "dropdown",
         "name": "domain",
         "title": {
          "de": "In welcher Domäne ist Ihr Unternehmen tätig?"
         },
         "isRequired": true,
         "renderAs": "select2",
         "choices": [
          {
           "value": "A",
           "text": {
            "de": "Land- und Forstwirtschaft, Fischerei"
           }
          },
          {
           "value": "B",
           "text": {
            "de": "Bergbau und Gewinnung von Steinen und Erden"
           }
          },
          {
           "value": "C",
           "text": {
            "de": "Verarbeitendes Gewerbe/Herstellung von Waren"
           }
          },
          {
           "value": "D",
           "text": {
            "de": "Energieversorgung"
           }
          },
          {
           "value": "E",
           "text": {
            "de": "Wasserversorgung;  Abwasser- und Abfallentsorgung und Beseitigung von Umweltverschmutzungen"
           }
          },
          {
           "value": "F",
           "text": {
            "de": "Baugewerbe/Bau"
           }
          },
          {
           "value": "G",
           "text": {
            "de": "Handel;  Instandhaltung und Reparatur von Kraftfahrzeugen"
           }
          },
          {
           "value": "H",
           "text": {
            "de": "Verkehr und Lagerei (Logistik)"
           }
          },
          {
           "value": "I",
           "text": {
            "de": "Gastgewerbe/Beherbergung und Gastronomie"
           }
          },
          {
           "value": "J",
           "text": {
            "de": "Information und Kommunikation"
           }
          },
          {
           "value": "K",
           "text": {
            "de": "Erbringung von Finanz- und Versicherungsdienstleistungen"
           }
          },
          {
           "value": "L",
           "text": {
            "de": "Grundstücks- und Wohnungswesen (Immobilien)"
           }
          },
          {
           "value": "M",
           "text": {
            "de": "Erbringung von freiberuflichen, wissenschaftlichen und technischen Dienstleistungen"
           }
          },
          {
           "value": "N",
           "text": {
            "de": "Erbringung von sonstigen wirtschaftlichen Dienstleistungen"
           }
          },
          {
           "value": "O",
           "text": {
            "de": "Öffentliche Verwaltung, Verteidigung;  Sozialversicherung"
           }
          },
          {
           "value": "P",
           "text": {
            "de": "Erziehung und Unterricht"
           }
          },
          {
           "value": "Q",
           "text": {
            "de": "Gesundheits- und Sozialwesen"
           }
          },
          {
           "value": "R",
           "text": {
            "de": "Kunst, Unterhaltung und Erholung"
           }
          },
          {
           "value": "S",
           "text": {
            "de": "Erbringung von sonstigen Dienstleistungen"
           }
          },
          {
           "value": "T",
           "text": {
            "de": "Private Haushalte mit Hauspersonal;  Herstellung von Erbringung von Dienstleistungen durch private Haushalte für den Eigenbedarf ohne ausgeprägten Schwerpunkt"
           }
          },
          {
           "value": "U",
           "text": {
            "de": "Exterritoriale Organisationen und Körperschaften"
           }
          }
         ],
         "optionsCaption": {
          "de": "Auswählen..."
         }
        },
        {
         "type": "radiogroup",
         "name": "sitz_in_bw",
         "title": {
          "de": "Befindet sich der Hauptsitz des Unternehmens in Baden-Württemberg?"
         },
         "isRequired": true,
         "choices": [
          {
           "value": "true",
           "text": {
            "de": "Ja"
           }
          },
          {
           "value": "false",
           "text": {
            "de": "Nein"
           }
          },
          {
           "value": "no_answer",
           "text": {
            "de": "Ich weiß es nicht"
           }
          }
         ]
        }
       ],
       "title": {
        "de": "Ihr Unternehmen"
       }
      },
      {
       "name": "Förderung",
       "elements": [
        {
         "type": "radiogroup",
         "name": "bilanzsumme",
         "title": {
          "de": "Wie hoch ist die Bilanzsumme pro Jahr Ihres Unternehmens?"
         },
         "choices": [
          {
           "value": "bis_10",
           "text": {
            "de": "bis 10 Mio. €"
           }
          },
          {
           "value": "bis_43",
           "text": {
            "de": " bis   43 Mio. €"
           }
          },
          {
           "value": "über_43",
           "text": {
            "de": "über 43 Mio. €"
           }
          }
         ]
        },
        {
         "type": "radiogroup",
         "name": "anzahl_beschäftigte",
         "title": {
          "de": "Wie viele Beschäftigte hat Ihr Unternehmen?"
         },
         "choices": [
          {
           "value": "bis_9",
           "text": {
            "de": "bis 9"
           }
          },
          {
           "value": "bis_49",
           "text": {
            "de": "bis 49"
           }
          },
          {
           "value": "über_249",
           "text": {
            "de": "über 249"
           }
          }
         ]
        },
        {
         "type": "radiogroup",
         "name": "umsatz",
         "title": {
          "de": "Welchen Umsatz macht Ihr Unternehmen pro Jahr?"
         },
         "choices": [
          {
           "value": "bis_2",
           "text": {
            "de": "bis 2 Mio. €"
           }
          },
          {
           "value": "bis_10",
           "text": {
            "de": "bis 10 Mio. €"
           }
          },
          {
           "value": "bis_50",
           "text": {
            "de": "bis 50 Mio. €"
           }
          },
          {
           "value": "über_44",
           "text": {
            "de": "über 50 Mio. €"
           }
          }
         ]
        }
       ],
       "title": {
        "de": "Förderung"
       },
       "description": {
        "de": "Es gibt verschiedene Möglichkeiten Förderungen zu erhalten. Um zu prüfen, ob Ihr Unternehmen für Förderungen geeignet ist, benötigen wir die folgenden Angaben."
       }
      },
      {
       "name": "unternehmen_2",
       "elements": [
        {
         "type": "rating",
         "name": "unternehmen_wissen_ml",
         "title": {
          "de": "Ihr Unternehmen besitzt sehr viel Wissen im Bereich Maschinelles Lernen."
         },
         "description": {
          "de": "Ihr Unternehmen besitzt Mitarbeiter, die tiefes Wissen im Bereich Maschinelles Lernen besitzen und auch in der Lage sind selbst Datenanalysen durchzuführen."
         },
         "rateValues": [
          "1",
          "2",
          "3",
          "4",
          "5"
         ],
         "minRateDescription": {
          "de": "Stimme überhaupt nicht zu"
         },
         "maxRateDescription": {
          "de": "Stimme voll und ganz zu"
         }
        },
        {
         "type": "rating",
         "name": "ansprechpartner",
         "title": {
          "de": "Es gibt einen Ansprechpartner für das SDSC, der sich sehr gut mit den Daten auskennt."
         },
         "rateValues": [
          "1",
          "2",
          "3",
          "4",
          "5"
         ],
         "rateMin": 0,
         "minRateDescription": {
          "de": "Stimme überhaupt nicht zu"
         },
         "maxRateDescription": {
          "de": "Stimme voll und ganz zu"
         }
        },
        {
         "type": "radiogroup",
         "name": "unternehmen_erfahrung_ml_projekte",
         "title": {
          "de": "Haben Sie als Unternehmen bereits Erfahrungen mit Projekten im Bereich Maschinelles Lernen?"
         },
         "description": {
          "de": "Haben Sie evtl. schon Projekte mithilfe von Maschinellem Lernen umgesetzt?"
         },
         "isRequired": true,
         "choices": [
          {
           "value": "5",
           "text": {
            "de": "Ja"
           }
          },
          {
           "value": "1",
           "text": {
            "de": "Nein"
           }
          },
          {
           "value": "0",
           "text": {
            "de": "Ich weiß es nicht"
           }
          }
         ]
        },
        {
         "type": "rating",
         "name": "unternehmen_unterstützung_potentialanalyse",
         "title": {
          "de": "Die Mehrheit Ihrer Mitarbeiter würde den Einsatz von Maschinellem Lernen in Ihrem Unternehmen befürworten."
         },
         "rateValues": [
          "1",
          "2",
          "3",
          "4",
          "5"
         ],
         "rateMin": 0,
         "minRateDescription": {
          "de": "Stimme überhaupt nicht zu"
         },
         "maxRateDescription": {
          "de": "Stimme voll und ganz zu"
         }
        }
       ],
       "title": {
        "de": "Unternehmen"
       }
      },
      {
       "name": "projekt",
       "elements": [
        {
         "type": "comment",
         "name": "Abteilungsbeschreibung",
         "title": {
          "de": "Beschreiben Sie kurz, womit sich Ihre Abteilung beschäftigt."
         },
         "isRequired": true,
         "autoGrow": true
        },
        {
         "type": "comment",
         "name": "daten_erhebung_text",
         "title": {
          "de": "Beschreiben Sie kurz, wo und wie Daten erhoben werden."
         },
         "isRequired": true,
         "autoGrow": true
        }
       ],
       "title": {
        "de": "Projekt"
       }
      },
      {
       "name": "ziel_1",
       "elements": [
        {
         "type": "checkbox",
         "name": "richtung_potentialanalyse",
         "title": {
          "de": "In welche Richtung soll die Potentialanalyse gehen?"
         },
         "description": {
          "de": "(Mehrfachauswahl möglich)"
         },
         "isRequired": true,
         "commentText": {
          "de": "Anmerkung"
         },
         "choices": [
          {
           "value": "kein_ziel",
           "text": {
            "de": "keine Richtung bekannt"
           }
          },
          {
           "value": "optimierung",
           "text": {
            "de": "Optimierung"
           }
          },
          {
           "value": "klassifikation",
           "text": {
            "de": "Klassifikation"
           }
          },
          {
           "value": "sprach_text_erkennung",
           "text": {
            "de": "Sprach-/Texterkennung"
           }
          },
          {
           "value": "bild_erkennung",
           "text": {
            "de": "Bilderkennung"
           }
          },
          {
           "value": "predictive_maintenance",
           "text": {
            "de": "Predictive Maintenance (Vorhersagen über die Lebensdauer von Bauteilen)"
           }
          },
          {
           "value": "prognosen",
           "text": {
            "de": "Prognosen (z.B. Umsatzprognosen)"
           }
          },
          {
           "value": "marketing",
           "text": {
            "de": "Marketing"
           }
          },
          {
           "value": "produktentwicklung",
           "text": {
            "de": "Produktentwicklung"
           }
          },
          {
           "value": "anomaly_detection",
           "text": {
            "de": "Anomaly Detection"
           }
          },
          {
           "value": "kausale_analyse",
           "text": {
            "de": "Kausale Analyse"
           }
          }
         ],
         "hasOther": true,
         "otherText": {
          "de": "Anderes/Anmerkung:"
         }
        }
       ],
       "title": {
        "de": "Ziel der Potentialanalyse"
       }
      },
      {
       "name": "ziel_2",
       "elements": [
        {
         "type": "comment",
         "name": "ziel_potentialanalyse_beschreibung",
         "visibleIf": "{richtung_potentialanalyse} notcontains 'kein_ziel'",
         "title": {
          "de": "Beschreiben Sie kurz das zu betrachtende Problem und was Sie sich von der Potentialanalyse erhoffen."
         },
         "isRequired": true,
         "autoGrow": true
        },
        {
         "type": "radiogroup",
         "name": "problem_lösung_aktuell",
         "visibleIf": "{richtung_potentialanalyse} notcontains 'kein_ziel'",
         "title": {
          "de": "Wie wird das Problem im Moment gelöst?"
         },
         "choices": [
          {
           "value": "keine_lösung",
           "text": {
            "de": "Es gibt noch keine Lösung"
           }
          },
          {
           "value": "manuell",
           "text": {
            "de": "Manuell, durch Personal"
           }
          },
          {
           "value": "konventionell",
           "text": {
            "de": "konventioneller Algorithmus"
           }
          },
          {
           "value": "ml",
           "text": {
            "de": "Maschinelles Lernen"
           }
          }
         ],
         "hasOther": true,
         "otherText": {
          "de": "Anderes:"
         }
        }
       ],
       "title": {
        "de": "Ziel der Potentialanalyse"
       }
      },
      {
       "name": "ausgangssituation_1",
       "elements": [
        {
         "type": "rating",
         "name": "ausreichend_daten_gesammelt",
         "title": {
          "de": "Es wurden bereits ausreichend Daten gesammelt."
         },
         "description": {
          "de": "Die Datenmenge ist ausreichend, um das zu betrachtende Problem zu lösen."
         },
         "isRequired": true,
         "rateValues": [
          "1",
          "2",
          "3",
          "4",
          "5"
         ],
         "rateMin": 0,
         "minRateDescription": {
          "de": "Stimme überhaupt nicht zu"
         },
         "maxRateDescription": {
          "de": "Stimme voll und ganz zu"
         }
        },
        {
         "type": "rating",
         "name": "daten_vorverarbeitet",
         "visibleIf": "{ausreichend_daten_gesammelt} >= 3 and {ausreichend_daten_gesammelt} <> 0",
         "title": {
          "de": "Die Daten liegen schon vorverarbeitet für die Datenanalyse bereit."
         },
         "description": {
          "de": "Dies kann der Fall sein, falls bereits eine Datenanalyse durchgeführt wurde, die Daten vorverarbeitet, bereinigt/gefiltert/standardisiert und evtl. reduziert wurden."
         },
         "rateValues": [
          "1",
          "2",
          "3",
          "4",
          "5"
         ],
         "rateMin": 0,
         "minRateDescription": {
          "de": "Stimme überhaupt nicht zu"
         },
         "maxRateDescription": {
          "de": "Stimme voll und ganz zu"
         }
        },
        {
         "type": "radiogroup",
         "name": "kostenfunktion",
         "visibleIf": "{richtung_potentialanalyse} contains 'optimierung'",
         "title": {
          "de": "Haben Sie bereits eine Kostenfunktion?"
         },
         "description": {
          "de": "Eine Kostenfunktion bewertet, wie stark die Daten vom Ziel abweichen/wie teuer ein Zustand ist."
         },
         "choices": [
          {
           "value": "5",
           "text": {
            "de": "Ja"
           }
          },
          {
           "value": "1",
           "text": {
            "de": "Nein"
           }
          },
          {
           "value": "0",
           "text": {
            "de": "Ich weiß es nicht"
           }
          }
         ]
        },
        {
         "type": "radiogroup",
         "name": "eingangs_ziel_variablen",
         "visibleIf": "{richtung_potentialanalyse} contains 'optimierung'",
         "title": {
          "de": "Können Sie Eingangs- und Zielvariablen benennen?"
         },
         "description": {
          "de": "Eingangsvariablen fließen in die Kostenfunktion ein, wohingegen über die Zielvariablen die Funktion optimiert wird. "
         },
         "choices": [
          {
           "value": "5",
           "text": {
            "de": "Ja"
           }
          },
          {
           "value": "1",
           "text": {
            "de": "Nein"
           }
          },
          {
           "value": "0",
           "text": {
            "de": "Ich weiß es nicht"
           }
          }
         ]
        }
       ],
       "title": {
        "de": "Ausgangslage"
       }
      },
      {
       "name": "rechtliches",
       "elements": [
        {
         "type": "radiogroup",
         "name": "dsgvo",
         "title": {
          "de": "Sind Daten betroffen, die unter die DSGVO fallen?"
         },
         "isRequired": true,
         "choices": [
          {
           "value": "true",
           "text": {
            "de": "Ja"
           }
          },
          {
           "value": "false",
           "text": {
            "de": "Nein"
           }
          },
          {
           "value": "no_answer",
           "text": {
            "de": "Kann ich nicht einschätzen"
           }
          }
         ]
        },
        {
         "type": "radiogroup",
         "name": "anonymisierung",
         "visibleIf": "{dsgvo} = true",
         "title": {
          "de": "Unser Unternehmen kann die Daten ausreichend anonymisieren/pseudonymisieren."
         },
         "isRequired": true,
         "choices": [
          {
           "value": "true",
           "text": {
            "de": "Ja"
           }
          },
          {
           "value": "false",
           "text": {
            "de": "Nein"
           }
          },
          {
           "value": "no_answer",
           "text": {
            "de": "Kann ich nicht einschätzen"
           }
          }
         ]
        },
        {
         "type": "radiogroup",
         "name": "rechte_an_daten",
         "title": {
          "de": "Unser Unternehmen besitzt die nötigen Rechte an den Daten."
         },
         "isRequired": true,
         "choices": [
          {
           "value": "true",
           "text": {
            "de": "Ja"
           }
          },
          {
           "value": "false",
           "text": {
            "de": "Nein"
           }
          },
          {
           "value": "no_answer",
           "text": {
            "de": "Kann ich nicht einschätzen"
           }
          }
         ]
        }
       ],
       "visibleIf": "{ausreichend_daten_gesammelt} >= 3",
       "title": {
        "de": "Rechtliches"
       }
      },
      {
       "name": "dateneffizienz",
       "elements": [
        {
         "type": "multipletext",
         "name": "anzahl_spalten_zeilen",
         "visibleIf": "{bearbeiter_daten_ml_kenntnis} > 2 or {bearbeiter_daten_ml_kenntnis} = 0",
         "title": {
          "de": "Geben Sie die grobe Größenordnung der Anzahl an Spalten und Zeilen des Datensatzes an."
         },
         "items": [
          {
           "name": "spalten",
           "inputType": "number",
           "title": {
            "de": "Anzahl Spalten"
           },
           "size": 0,
           "validators": [
            {
             "type": "numeric",
             "text": {
              "de": "Bitte eine Zahl größer als 0 eingeben."
             },
             "minValue": 0
            }
           ]
          },
          {
           "name": "zeilen",
           "inputType": "number",
           "title": {
            "de": "Anzahl Zeilen"
           },
           "validators": [
            {
             "type": "numeric",
             "text": {
              "de": "Bitte eine Zahl größer als 0 eingeben."
             },
             "minValue": 0
            }
           ]
          }
         ]
        },
        {
         "type": "text",
         "name": "daten_erhebungsfrequenz",
         "visibleIf": "{bearbeiter_daten_ml_kenntnis} > 2 or {bearbeiter_daten_ml_kenntnis} = 0",
         "title": {
          "de": "In welcher Frequenz erheben Sie Daten ungefähr?"
         },
         "description": {
          "de": "Wie viel Zeit vergeht zwischen den Datenpunkten? (Stunden:Minuten:Sekunden)"
         }
        },
        {
         "type": "multipletext",
         "name": "zeitbereich",
         "title": {
          "de": "Welchen Zeitbereich umfassen die Daten ungefähr?"
         },
         "validators": [
          {
           "type": "expression",
           "text": {
            "de": "Das Enddatum muss nach dem Anfangsdatum liegen."
           },
           "expression": "{zeitbereich.anfangsdatum} < {zeitbereich.enddatum} or {zeitbereich.anfangsdatum} empty or {zeitbereich.enddatum} empty"
          }
         ],
         "items": [
          {
           "name": "anfangsdatum",
           "inputType": "date",
           "title": {
            "de": "Anfangsdatum"
           }
          },
          {
           "name": "enddatum",
           "inputType": "date",
           "title": {
            "de": "Enddatum"
           }
          }
         ]
        },
        {
         "type": "rating",
         "name": "merkmale_enthalten",
         "visibleIf": "{bearbeiter_daten_ml_kenntnis} > 2 or {bearbeiter_daten_ml_kenntnis} = 0",
         "title": {
          "de": "Die Daten zeigen die zu untersuchenden Merkmale sehr gut."
         },
         "description": {
          "de": "Es sollte nur anhand der Daten möglich sein, die Merkmale eines Datenpunktes herauslesen zu können. Außerdem sollten Merkmale, die untersucht werden sollen, in den Daten enthalten sein."
         },
         "rateValues": [
          "1",
          "2",
          "3",
          "4",
          "5"
         ],
         "rateMin": 0,
         "minRateDescription": {
          "de": "Stimme überhaupt nicht zu"
         },
         "maxRateDescription": {
          "de": "Stimme voll und ganz zu"
         }
        },
        {
         "type": "rating",
         "name": "question2",
         "visibleIf": "{bearbeiter_daten_ml_kenntnis} > 2 or {bearbeiter_daten_ml_kenntnis} = 0",
         "title": {
          "de": "Die Daten sind für das zu betrachtende Problem relevant."
         },
         "description": {
          "de": "Es besteht ein Zusammenhang zwischen den Daten und dem Problem. Die Daten können genutzt werden um das Problem zu lösen."
         },
         "rateValues": [
          "1",
          "2",
          "3",
          "4",
          "5"
         ],
         "rateMin": 0,
         "minRateDescription": {
          "de": "Stimme überhaupt nicht zu"
         },
         "maxRateDescription": {
          "de": "Stimme voll und ganz zu"
         }
        },
        {
         "type": "rating",
         "name": "zeitreihen_vollständig",
         "visibleIf": "{bearbeiter_daten_ml_kenntnis} > 2 or {bearbeiter_daten_ml_kenntnis} = 0",
         "title": {
          "de": "Alle Zeitreihen sind vollständig."
         },
         "description": {
          "de": "Es gibt keine fehlenden Werte in den Zeitreihen."
         },
         "rateValues": [
          "1",
          "2",
          "3",
          "4",
          "5"
         ],
         "rateMin": 0,
         "minRateDescription": {
          "de": "Stimme überhaupt nicht zu"
         },
         "maxRateDescription": {
          "de": "Stimme voll und ganz zu"
         }
        },
        {
         "type": "rating",
         "name": "zustände_vertreten",
         "visibleIf": "{bearbeiter_daten_ml_kenntnis} > 2 or {bearbeiter_daten_ml_kenntnis} = 0",
         "title": {
          "de": "Verschiedene Zustände sind mehrfach in den Daten vertreten."
         },
         "description": {
          "de": "Z. B. wenn die Lebensdauer von Bauteilen untersucht werden soll, sollte auch der defekte Zustand mehrmals in den Daten vorkommen."
         },
         "rateValues": [
          "1",
          "2",
          "3",
          "4",
          "5"
         ],
         "rateMin": 0,
         "minRateDescription": {
          "de": "Stimme überhaupt nicht zu"
         },
         "maxRateDescription": {
          "de": "Stimme voll und ganz zu"
         }
        },
        {
         "type": "rating",
         "name": "einflussfaktoren_enthalten",
         "visibleIf": "{bearbeiter_daten_ml_kenntnis} > 2 or {bearbeiter_daten_ml_kenntnis} = 0",
         "title": {
          "de": "In den Daten sind alle möglichen Einflussfaktoren, die das Ergebnis beeinflussen können, enthalten."
         },
         "description": {
          "de": "Oft beeinflussen externe Einflussfaktoren das Ergebnis, ohne dass diese auch gemessen werden und in den Daten sichtbar sind. Das kann die Temperatur, das Wetter o. Ä. sein. "
         },
         "rateValues": [
          "1",
          "2",
          "3",
          "4",
          "5"
         ],
         "rateMin": 0,
         "rateMax": 4,
         "minRateDescription": {
          "de": "Stimme überhaupt nicht zu"
         },
         "maxRateDescription": {
          "de": "Stimme voll und ganz zu"
         }
        },
        {
         "type": "rating",
         "name": "stellgrößen_enthalten",
         "visibleIf": "{bearbeiter_daten_ml_kenntnis} > 2 or {bearbeiter_daten_ml_kenntnis} = 0",
         "title": {
          "de": "Mögliche Stellgrößen/Variablen, die beeinflusst werden können, wurden in den Daten erfasst."
         },
         "description": {
          "de": "Die Einstellungen einer Maschine sind beispielsweise Stellgrößen, die einen Einfluss auf die Produktqualität haben und somit wichtig für eine Analyse sein können."
         },
         "rateValues": [
          "1",
          "2",
          "3",
          "4",
          "5"
         ],
         "rateMin": 0,
         "minRateDescription": {
          "de": "Stimme überhaupt nicht zu"
         },
         "maxRateDescription": {
          "de": "Stimme voll und ganz zu"
         }
        },
        {
         "type": "rating",
         "name": "wertebereich_stellgrößen_bekannt",
         "visibleIf": "{stellgrößen_enthalten} >= 3",
         "title": {
          "de": "Der Wertebereich, den die Stellgrößen/Variablen annehmen können, ist in einer Dokumentation festgehalten."
         },
         "description": {
          "de": "Falls für die Analyse Stellgrößen/Variablen benötigt werden, ist es für uns wichtig zu wissen, welche Werte möglich sind."
         },
         "rateValues": [
          "1",
          "2",
          "3",
          "4",
          "5"
         ],
         "rateMin": 0,
         "minRateDescription": {
          "de": "Stimme überhaupt nicht zu"
         },
         "maxRateDescription": {
          "de": "Stimme voll und ganz zu"
         }
        }
       ],
       "visibleIf": "{ausreichend_daten_gesammelt} >= 3 and ({rechte_an_daten} = true or {rechte_an_daten}='no_answer') and ({dsgvo} = false or {anonymisierung} = true or {dsgvo}='no_answer'  or {anonymisierung} = 'no_answer')",
       "title": {
        "de": "Datenlage"
       }
      },
      {
       "name": "datenorganisation",
       "elements": [
        {
         "type": "radiogroup",
         "name": "standardprozess",
         "title": {
          "de": "Verwenden Sie ein Standardprozess für die Datenverwaltung/Data-Mining (z.B. CRISP-DM, IBM ASUM-DM, TDSP)?"
         },
         "choices": [
          {
           "value": "5",
           "text": {
            "de": "Ja"
           }
          },
          {
           "value": "1",
           "text": {
            "de": "Nein"
           }
          }
         ],
         "otherText": {
          "de": "Ja, welches"
         }
        },
        {
         "type": "radiogroup",
         "name": "dokumentation_existiert",
         "title": {
          "de": "Gibt es eine Dokumentation zu den Daten?"
         },
         "description": {
          "de": "Gibt es eine Dokumentation, aus der ersichtlich wird, was, welche Daten bedeuten, sowie wo und wie sie erhoben wurden."
         },
         "choices": [
          {
           "value": "5",
           "text": {
            "de": "Ja"
           }
          },
          {
           "value": "1",
           "text": {
            "de": "Nein"
           }
          }
         ],
         "otherText": {
          "de": "Ja, welches"
         }
        },
        {
         "type": "radiogroup",
         "name": "datenformat_csv",
         "title": {
          "de": "Können sie die Daten als .csv liefern?"
         },
         "description": {
          "de": " (utf8 kodiert) "
         },
         "choices": [
          {
           "value": "5",
           "text": {
            "de": "Ja"
           }
          },
          {
           "value": "1",
           "text": {
            "de": "Nein"
           }
          }
         ],
         "otherText": {
          "de": "Ja, welches"
         }
        },
        {
         "type": "rating",
         "name": "datenerfassung_vollautomatisch",
         "title": {
          "de": "Die Daten werden vollautomatisch erfasst."
         },
         "description": {
          "de": "Es müssen keine Schritte bei der Datenerhebung manuell ausgeführt werden."
         },
         "rateValues": [
          "1",
          "2",
          "3",
          "4",
          "5"
         ],
         "rateMin": 0,
         "minRateDescription": {
          "de": "Stimme überhaupt nicht zu"
         },
         "maxRateDescription": {
          "de": "Stimme voll und ganz zu"
         }
        },
        {
         "type": "rating",
         "name": "mehrere_datenquellen",
         "title": {
          "de": "Es werden Daten aus mehreren Datenquellen benötigt."
         },
         "description": {
          "de": "Sind Ihre Daten auf mehrere Dateien/Datenbanken aufgeteilt, die vor der Analyse erst verknüpft werden müssen?"
         },
         "rateValues": [
          "1",
          "2",
          "3",
          "4",
          "5"
         ],
         "rateMin": -4,
         "minRateDescription": {
          "de": "Stimme überhaupt nicht zu"
         },
         "maxRateDescription": {
          "de": "Stimme voll und ganz zu"
         }
        },
        {
         "type": "text",
         "name": "vorlaufdauer_bereitstellung_daten",
         "title": {
          "de": "Wie schnell könnten Sie, dem SDSC Team Ihre Daten zur Verfügung zu stellen?"
         },
         "description": {
          "de": "Geben Sie an, wie viele Tage Vorlaufzeit Ihre Abteilung benötigt, bis sie uns Zugriff auf Ihre Daten geben können."
         },
         "inputType": "number",
         "min": "0",
         "max": "365",
         "step": 1
        }
       ],
       "visibleIf": "{ausreichend_daten_gesammelt} >= 3 and({rechte_an_daten} = true or {rechte_an_daten}='no_answer') and ({dsgvo} = false or {anonymisierung} = true or {dsgvo}='no_answer'  or {anonymisierung} = 'no_answer')",
       "title": {
        "de": "Organisatorisches"
       }
      },
      {
       "name": "fehlerfreiheit_aktualität",
       "elements": [
        {
         "type": "rating",
         "name": "messfehler_existieren",
         "title": {
          "de": "In den Daten existieren keine Messfehler."
         },
         "description": {
          "de": "Wie genau sind Ihre Daten?"
         },
         "rateValues": [
          "1",
          "2",
          "3",
          "4",
          "5"
         ],
         "minRateDescription": {
          "de": "Stimme überhaupt nicht zu"
         },
         "maxRateDescription": {
          "de": "Stimme voll und ganz zu"
         }
        },
        {
         "type": "rating",
         "name": "datenerhebung_objektiv",
         "title": {
          "de": "Die Daten werden nach einem objektiven Schema erhoben."
         },
         "description": {
          "de": "Allen Datenwerte liegt ein klares, konsistentes Schema zugrunde, nachdem sie erhoben wurden."
         },
         "rateValues": [
          "1",
          "2",
          "3",
          "4",
          "5"
         ],
         "rateMin": 0,
         "minRateDescription": {
          "de": "Stimme überhaupt nicht zu"
         },
         "maxRateDescription": {
          "de": "Stimme voll und ganz zu"
         }
        },
        {
         "type": "rating",
         "name": "inkonsistenzen_existieren",
         "title": {
          "de": "Die Daten enthalten keine Inkonsistenzen."
         },
         "description": {
          "de": "Haben die Daten ein einheitliches Format und widersprechen sich nicht?"
         },
         "rateValues": [
          "1",
          "2",
          "3",
          "4",
          "5"
         ],
         "rateMin": 0,
         "minRateDescription": {
          "de": "Stimme überhaupt nicht zu"
         },
         "maxRateDescription": {
          "de": "Stimme voll und ganz zu"
         }
        },
        {
         "type": "rating",
         "name": "aktualität",
         "title": {
          "de": "Die Daten enthalten keine veralteten Werte."
         },
         "description": {
          "de": "Z. B. Daten einer Maschine, die nicht mehr verwendet wird; oder nicht aktualisierte Änderungen sollten nicht in den Daten enthalten sein."
         },
         "rateValues": [
          "1",
          "2",
          "3",
          "4",
          "5"
         ],
         "rateMin": 0,
         "minRateDescription": {
          "de": "Stimme überhaupt nicht zu"
         },
         "maxRateDescription": {
          "de": "Stimme voll und ganz zu"
         }
        }
       ],
       "visibleIf": "{bearbeiter_daten_ml_kenntnis} >= 3 and {ausreichend_daten_gesammelt} >= 3 and ({rechte_an_daten} = true or {rechte_an_daten}='no_answer') and ({dsgvo} = false or {anonymisierung} = true or {dsgvo}='no_answer' or {anonymisierung} = 'no_answer' )",
       "title": {
        "de": "Datenqualität"
       }
      },
      {
       "name": "kontaktdaten",
       "elements": [
        {
         "type": "text",
         "name": "kontakt_vorname",
         "title": {
          "de": "Vorname"
         },
         "hideNumber": true,
         "isRequired": true,
         "autoComplete": "name"
        },
        {
         "type": "text",
         "name": "kontakt_nachname",
         "startWithNewLine": false,
         "title": {
          "de": "Nachname"
         },
         "hideNumber": true,
         "isRequired": true,
         "autoComplete": "family-name"
        },
        {
         "type": "text",
         "name": "kontakt_email_adresse",
         "title": {
          "de": "E-Mail-Adresse"
         },
         "hideNumber": true,
         "isRequired": true,
         "inputType": "email",
         "autoComplete": "email",
         "inputMask": "email"
        },
        {
         "type": "text",
         "name": "kontakt_telefonnummer",
         "startWithNewLine": false,
         "title": {
          "de": "Telefonnummer"
         },
         "hideNumber": true,
         "isRequired": true,
         "inputType": "tel",
         "autoComplete": "tel"
        },
        {
         "type": "comment",
         "name": "unternehmensanschrift",
         "title": {
          "de": "Unternehmensanschrift"
         },
         "hideNumber": true,
         "isRequired": true,
         "autoGrow": true
        },
        {
         "type": "checkbox",
         "name": "accept_agb",
         "title": {
          "de": " "
         },
         "hideNumber": true,
         "isRequired": true,
         "choices": [
          {
           "value": "true",
           "text": {
            "de": "Ich akzeptiere, dass meine Daten im Rahmen einer Potentialanalyse vom SDSC-BW verarbeitet werden dürfen. Ihre Daten werden vertraulich behandelt. Nach dem Absenden wird Ihr Report automatisch generiert und an Ihre E-Mail-Adresse, sowie an Ihren Ansprechpartner im SDSC-BW gesendet."
           }
          }
         ]
        }
       ],
       "title": {
        "de": "Ihre Kontaktdaten"
       },
       "description": {
        "de": "Bei wem dürfen wir uns melden?"
       }
      },
      {
       "name": "feedback",
       "elements": [
        {
         "type": "html",
         "name": "feedback_info",
         "html": {
          "de": "<h3>Ihr Feedback hilft uns weiter</h3>   <p> Wir würden uns freuen, wenn sie uns noch kurz Feedback zu diesem Fragebogen geben könnten. <br>  Vielen Dank. </p> <h4></h4> "
         }
        },
        {
         "type": "rating",
         "name": "feedback_design",
         "title": {
          "de": "Das Design war ansprechend und leicht zu benutzen."
         },
         "hideNumber": true,
         "commentText": {
          "de": "Anmerkung"
         },
         "minRateDescription": {
          "de": "Stimme überhaupt nicht zu"
         },
         "maxRateDescription": {
          "de": "Stimme voll und ganz zu"
         }
        },
        {
         "type": "rating",
         "name": "feedback_verständlich",
         "title": {
          "de": "Der Fragebogen war gut verständlich."
         },
         "hideNumber": true,
         "commentText": {
          "de": "Anmerkung"
         },
         "minRateDescription": {
          "de": "Stimme überhaupt nicht zu"
         },
         "maxRateDescription": {
          "de": "Stimme voll und ganz zu"
         }
        },
        {
         "type": "rating",
         "name": "feedback_probleme",
         "title": {
          "de": "Ich hatte keine Probleme beim Ausfüllen der Fragen."
         },
         "hideNumber": true,
         "commentText": {
          "de": "Anmerkung"
         },
         "minRateDescription": {
          "de": "Stimme überhaupt nicht zu"
         },
         "maxRateDescription": {
          "de": "Stimme voll und ganz zu"
         }
        },
        {
         "type": "rating",
         "name": "feedback_umfang",
         "title": {
          "de": "Der Umfang war angemessen."
         },
         "hideNumber": true,
         "commentText": {
          "de": "Anmerkung"
         },
         "minRateDescription": {
          "de": "Stimme überhaupt nicht zu"
         },
         "maxRateDescription": {
          "de": "Stimme voll und ganz zu"
         }
        },
        {
         "type": "comment",
         "name": "feedback_kommentar",
         "title": {
          "de": "Weiter Anmerkungen:"
         },
         "hideNumber": true,
         "autoGrow": true
        }
       ],
       "title": {
        "de": "Vielen Dank für Ihre Antworten. Um den Fragebogen abzuschicken, klicken Sie bitte auf die Schaltfläche unten."
       }
      }
     ],
     "calculatedValues": [
      {
       "name": "bearbeiter_daten_ml_kenntnis",
       "expression": "avg({datenkenntnis}, {sicher_datenumgang}, {daten_erklären}, {arbeit_an_ml}, {ml_kenntnis}, {anwendungsfall_kenntnis}, {zusammenhang_daten_ziel})  ",
       "includeIntoResult": true
      },
      {
       "name": "förderung_geeignet",
       "expression": "{sitz_in_bw} = 'true' and {ist_kmu}",
       "includeIntoResult": true
      },
      {
       "name": "ist_kmu",
       "expression": "({bilanzsumme} = 'bis_10' or {bilanzsumme} = 'bis_43') or (({anzahl_beschäftigte} = 'bis_9' or {anzahl_beschäftigte} = 'bis_49') and ({umsatz} = 'bis_2' or {umsatz} = 'bis_10' or {umsatz} = 'bis_50'))",
       "includeIntoResult": true
      },
      {
       "name": "unternehmen_ml_kompetenz",
       "expression": "avg({unternehmen_wissen_ml}, {ansprechpartner}, {unternehmen_erfahrung_ml_projekte}, {unternehmen_unterstützung_potentialanalyse})",
       "includeIntoResult": true
      },
      {
       "name": "zeitbereich_dauer",
       "expression": "{zeitbereich.enddatum} - {zeitbereich.anfangsdatum}",
       "includeIntoResult": true
      },
      {
       "name": "score_problemstellung",
       "expression": "avg( iif({richtung_potentialanalyse} notcontains 'kein_ziel', 5, 1),  iif({ziel_potentialanalyse_beschreibung} empty,1, 5),{kostenfunktion}, {eingangs_ziel_variablen}, {ausreichend_daten_gesammelt}, {daten_vorverarbeitet})",
       "includeIntoResult": true
      },
      {
       "name": "score_dateneffizienz",
       "expression": "avg({daten_relevanz}, {merkmale_enthalten}, {zeitreihen_vollständig}, {zustände_vertreten}, {stellgrößen_enthalten}, {einflussfaktoren_enthalten})",
       "includeIntoResult": true
      },
      {
       "name": "score_datenorganisation",
       "expression": "avg({standardprozess}, {dokumentation_existiert}, {wertebereich_stellgrößen_bekannt}, {datenformat_csv}, {datenerfassung_vollautomatisch}, {var_mehrere_datenquellen})",
       "includeIntoResult": true
      },
      {
       "name": "score_fehlerfreiheit",
       "expression": "avg({messfehler_existieren}, {datenerhebung_objektiv}, {inkonsistenzen_existieren})",
       "includeIntoResult": true
      },
      {
       "name": "score_aktualität",
       "expression": "{aktualität}",
       "includeIntoResult": true
      },
      {
       "name": "overall_score",
       "expression": "avg({score_problemstellung}, {score_dateneffizienz},{score_datenorganisation}, {score_fehlerfreiheit} , {score_aktualität})",
       "includeIntoResult": true
      },
      {
       "name": "rechtlich_ok",
       "expression": "({dsgvo} equals false or {anonymisierung} equals true) and {rechte_an_daten} equals true",
       "includeIntoResult": true
      },
      {
       "name": "var_mehrere_datenquellen",
       "expression": "iif({mehrere_datenquellen} notempty, 6 - {mehrere_datenquellen}, )",
       "includeIntoResult": true
      }
     ],
     "showProgressBar": "top",
     "goNextPageAutomatic": true,
     "checkErrorsMode": "onValueChanged",
     "autoGrowComment": true,
     "firstPageIsStarted": true,
     "widthMode": "responsive"
    };