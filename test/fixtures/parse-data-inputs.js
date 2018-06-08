//file with inputs for testing the parse-data util function

export const parseInputObj = 
{
  'Type of site': 
  {
    'key': 
    {
      'hospital': 'Hospital',
      'Health post': 'Health Post'
    }
  },
  'Services': 
  {
    'key': 
    {
      'MCH': 'Maternal and Child Health',
      'OTP': 'Outpatient Therapeutic Program',
    },
    'type': 'multiple',
    'split': ' ',
    'join': ', ',
    'other-prop': 'Other Services',
    'other-value': 'Other'
  }
}

export const parseInputData = [{
  'Type of site': 'Hospital',
  'Services': 'OTP'
}, {
  'Type of site': 'hospital',
  'Services': 'MCH TSP'
}, {
  'Type of site': 'Health post',
  'Services': 'MCH Other',
  'Other Services': 'Nutrition Counseling'
}];