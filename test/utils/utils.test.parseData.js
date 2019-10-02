import parseData from '../../src/utils/parseData.js/'; // function

import { parseInputSpecObj, parseInputSpecObjCmplx, parseInputSpecData, parseInputSpecDataCmplx } from '../fixtures/parse-data-inputs'; // obj, array
import { parseOutputSpecData, parseOutputSpecDataCmplx } from '../fixtures/outputs/parse-data-output.js'; // array

describe('parseData', () => {
  test('should return correct parsed Data object (single)', () => {
    expect(parseData(parseInputSpecObj, parseInputSpecData[0])).toEqual(parseOutputSpecData[0]);
  });

  test('should return correct parsed Data object (multiple)', () => {
    expect(parseData(parseInputSpecObj, parseInputSpecData[1])).toEqual(parseOutputSpecData[1]);
  });

  test('should return correct parsed Data object (multiple with other)', () => {
    expect(parseData(parseInputSpecObj, parseInputSpecData[2])).toEqual(parseOutputSpecData[2]);
  });

  // now testing the complex data

  test('should return correct parsed Data object', () => {
    expect(parseData(parseInputSpecObjCmplx, parseInputSpecDataCmplx[0])).toEqual(parseOutputSpecDataCmplx[0]);
  });

  test('should return correct parsed Data object', () => {
    expect(parseData(parseInputSpecObjCmplx, parseInputSpecDataCmplx[1])).toEqual(parseOutputSpecDataCmplx[1]);
  });
});
