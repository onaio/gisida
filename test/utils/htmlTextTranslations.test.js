import  htmlTextTranslations  from '../../src/utils/htmlTextTranslations';
const languageTranslationsLookUp = {
  sp: {
    "Hello World": 'Hola Mundo',
    "Hello World\nCode": 'Hola Mundo\nCódigo',
    "Code": "Código",
    "Code ": "Código ",
    "master": "maestra",
    " master": " maestra",
      " Come here: {{actual_expenses}} ": " Njoo hapa: {{real_expenses}} ",
      "Total actual expense on social services : {{actual_exp_ss}}": "Jumla ya gharama halisi kwenye huduma za kijamii : {{actual_exp_ss}}",
  },
};
const currentSelectedLanguage = {
  param: 'sp',
  mapId: 'map-1',
};
describe('htmlTextTranslations util', () => {
  test('html text translations util for text blocks', () => {
    expect(htmlTextTranslations(`<b>Hello World</b>`, languageTranslationsLookUp, currentSelectedLanguage)).toBe(`<b>Hola Mundo</b>`);
    expect(htmlTextTranslations(`Hello World`, languageTranslationsLookUp, currentSelectedLanguage)).toBe(`Hola Mundo`);
  });
  test('html text translations for individual strings', () => {
    expect(htmlTextTranslations('<b>Code </b><b> master</b>', languageTranslationsLookUp, currentSelectedLanguage)).toBe(`<b>Código </b><b> maestra</b>`);
  });
  test('html text translations for with formatting', () => {
      expect(htmlTextTranslations('<p> Come here: {{actual_expenses}} <br>Total actual expense on social services : {{actual_exp_ss}}</p>', languageTranslationsLookUp, currentSelectedLanguage)).toBe(`<p> Njoo hapa: {{real_expenses}} <br>Jumla ya gharama halisi kwenye huduma za kijamii : {{actual_exp_ss}}</p>`);
  });
  test('html text translations for individual strings no spaces', () => {
    expect(htmlTextTranslations(`<b>Code</b><b>master</b>`, languageTranslationsLookUp, currentSelectedLanguage)).toBe(`<b>Código</b><b>maestra</b>`);
  });
  test('html text translations for individual strings whitespace text content', () => {
    expect(htmlTextTranslations(`Code <b>Code</b><b>master</b>`, languageTranslationsLookUp, currentSelectedLanguage)).toBe(`Código <b>Código</b><b>maestra</b>`);
    expect(htmlTextTranslations(`<b>Code</b> <b>master</b>`, languageTranslationsLookUp, currentSelectedLanguage)).toBe(`<b>Código</b> <b>maestra</b>`);
  });
  test('html text translations for nested blocks', () => {
    expect(htmlTextTranslations('<ul><li>Hello World</i></ul>', languageTranslationsLookUp, currentSelectedLanguage)).toBe(`<ul><li>Hola Mundo</li></ul>`);
    expect(htmlTextTranslations('<ul><li>Hello World\nCode</i></ul>', languageTranslationsLookUp, currentSelectedLanguage)).toBe(`<ul><li>Hola Mundo\nCódigo</li></ul>`);
  });
});
