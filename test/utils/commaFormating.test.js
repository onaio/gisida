import commaFormatting from '../../src/utils/commaFormatting';
import buildLabelsInput from '../fixtures/buildLabels-input.json';

const output = {
    "ADMN0_EN": "Bangladesh",
    "Camp_ID": "Uluchamri",
    "CiC_Camp": "",
    "District": "Coxs_Bazar",
    "New_Camp_N": "Uluchamri",
    "New_Camp_S": "CXB-035",
    "Settlement": "",
    "Shape_Area": "",
    "Shape_Leng": "",
    "Site_name": "",
    "Union_1": "Nhilla",
    "Upazila": "teknaf",
    "latitude": "21.000754",
    "longitude": "92.237769"
  }

describe('commaFormatting', () => {
    test('should return data formated with commas', () => {
        const data = buildLabelsInput.labels.labelData[0]
        expect(commaFormatting(buildLabelsInput,  data,false)).toEqual(output)
    })
})