/**
 * 
 * @param {string} translateString - string to be translated
 * @param {object} languageTranslations - language translation lookup object
 * @param {object} currentLanguage - current selected language
 */
const translationHook = (translateString, languageTranslations, currentLanguage) => {
    console.log("layer string", translateString)
    let translatedLiteral = translateString;
    if (languageTranslations && languageTranslations[currentLanguage.param]) {
      translatedLiteral = languageTranslations[currentLanguage.param][translateString]
        ? languageTranslations[currentLanguage.param][translateString]
        : translatedLiteral;
    }
    return translatedLiteral
  };
  
export default translationHook;