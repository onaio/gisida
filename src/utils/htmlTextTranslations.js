import translationHook from './translationHook';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const htmlTextTranslations = (content, languageTranslations, CURRENTLANGUAGE) => {
  const { body } = new JSDOM(content).window.document;

  function translateChildNodes(childNodes) {
    const numOfChildren = childNodes.length;
    for(let i = 0; i < numOfChildren; i += 1) {
      const elem = childNodes[i];
      if (elem.nodeName === '#text') {
        elem.nodeValue = translationHook(elem.nodeValue, languageTranslations, CURRENTLANGUAGE);
      }
      if (elem.hasChildNodes()) {
        translateChildNodes(elem.childNodes)
      }
    }
  }

  translateChildNodes(body.childNodes)

  return body.innerHTML;
}

export default htmlTextTranslations;
