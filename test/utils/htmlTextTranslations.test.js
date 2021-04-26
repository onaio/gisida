import  htmlTextTranslations  from '../../src/utils/htmlTextTranslations';
const languageTranslationsLookUp = {
  sp: {
    "Hello World": 'Hola Mundo',
    "Code": "código",
    "master": "maestra",
  },
};
const currentSelectedLanguage = {
  param: 'sp',
  mapId: 'map-1',
};
describe('htmlTextTranslations util', () => {
  test('html text translations util for text blocks', () => {
    expect(htmlTextTranslations(`<b>Hello World</b>`, false, languageTranslationsLookUp, currentSelectedLanguage)).toBe(`<b>Hola Mundo</b>`);
  });
  test('html text translations for individual strings', () => {
    expect(htmlTextTranslations('<b>Code </b><b> master</b>', true, languageTranslationsLookUp, currentSelectedLanguage)).toBe(`<b>código </b><b> maestra</b>`);
  });
});