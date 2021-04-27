import translationHook from './translationHook';

const h2p = require('html2plaintext');

const htmlTextTranslations = (content, translateIndividualStrings, languageTranslations, CURRENTLANGUAGE) => {
  let translateString = content;
  if (translateIndividualStrings) {
    h2p(translateString).split(' ').forEach((literal) => {
      // removes new line in prep of translation
      literal.replace(/\n|\r/g, "");
      const translatedString = translationHook(literal, languageTranslations, CURRENTLANGUAGE);
      translateString = translateString.replace(literal, translatedString);
    });
    return translateString;
  }
  h2p(translateString).split(/\n/).forEach((textBlock) => {
    const translatedBlock = translationHook(textBlock, languageTranslations, CURRENTLANGUAGE);
    translateString = translateString.replace(textBlock, translatedBlock);
  });
  return translateString;
}

export default htmlTextTranslations;