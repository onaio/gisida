import translationHook from '../../src/utils/translationHook';
const languageTranslationsLookUp = {
  sp: {
    hello: 'holla',
  },
};
const currentSelectedLanguage = {
  param: 'sp',
  mapId: 'map-1',
};
describe('Translation utils with all params', () => {
  test('TranslationHook util', () => {
    expect(translationHook('hello', languageTranslationsLookUp, currentSelectedLanguage)).toBe("holla");
  });
  test('TranslationHook without translations', () => {
    expect(translationHook('hello', undefined, undefined)).toBe('hello');
  });
});