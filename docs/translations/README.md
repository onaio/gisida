# Translation Docs

This directory contains documentation on translation configs and dependencies.

## Translation Switcher

All language configs reside inside APP object and will be responsible for driving the translation switcher.

```json
"languageSwitcherConfigs": {
            "English": {
                "param": "en"
            },
            "ជនជាតិខ្មែរ": {
                "param": "khmer"
            }
        },
```

You can have the translation switcher on the map or have it on the superset iframe views. To choose this set this flag accordingly.

```json
"mapLanguageTranslation": false,
```

## Components Translations

A look up object will be responsible for handling the various translations. The strings for the various components will reside in the languageTranslation object keyed by the language with the translations for the various strings as values.

NB - The language key in languageTranslation object must match param value provided on languageSwitcherConfigs params.

All components i.e legend, titlebar, layers, menu sections or subsections will require the entire string to be translated added to the lookup object, except for the popup which will require every individual string to be added on the lookup object.

### Iframe translations

The Iframe translation currently works by switching the iframe link and can be added to the languageTranslations lookup object as shown below

```json
"languageTranslations": {
            "khmer": {
                // Provide the full string for layers, titlebar, menu section and subsections.
                "Domain 2: Capacity of the child protection system": "ជនជាតិខ្មែរ ជនជាតិខ្មែរ ជនជាតិខ្មែរ",
                "Indicator 2.2 RCFs ": "ជនជាតិខ្មែរ ជនជាតិខ្មែរ",
                "RCI": "ជនជា",
                "Number of RCIs in the country (all residential care facilities)": "ជនជាតិខ្មែរ ជនជាតិខ្មែរ ជនជាតិខ្មែរ ជនជាតិខ្មែរ ជនជាតិខ្មែរ ជនជាតិខ្មែរ",
                " Source: Inspection Database, 2018": "ជនជាតិខ្មែរ ជនជាតិខ្មែរ តិខ្មែរ ជនជា តិខ្មែរ",
                // replace current iframe with the translated kind
                "splashPage": {
                    "link": "https://discover.ona.io/superset/dashboard/517/?standalone=true"
                },
                "Cambodia Child Protection Profile 2018": "ជនជាតិខ្មែរ",
                // titlebar strings
                "Powered by": "ជនជាតិខ្មែរ",
                "Data Map": "ជនជា",
                // popup strings (must be supplied individually)
                "Mondul": "ជនជា"
            }
        },
```
