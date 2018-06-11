//file with output for testing parseData util function

export const parseOutputData = 
[{
  "Type of site":"Hospital",
  "Services":"Outpatient Therapeutic Program",
  "unparsedDatum":
  {
    "Type of site":"Hospital",
    "Services":"OTP"
  }
},
{
  "Type of site":"Hospital",
  "Services":"Maternal and Child Health, TSP",
  "unparsedDatum":
  {
    "Type of site":"hospital",
    "Services":"MCH TSP"
  }
},
{
  "Type of site":"Health Post",
  "Services":"Maternal and Child Health, Other",
  "Other Services":"Nutrition Counseling",
  "unparsedDatum":
  {
    "Type of site":"Health post",
    "Services":"MCH Other",
    "Other Services":"Nutrition Counseling"
  }
}];

export const parseOutputDataCmplx = 
[{
  "site_activity":"OTP, TSFP, IYCF, Micronutrient",
  "NU_indicators/site_type":"Fixed",
  "NU_indicators/facility_type":"Mother and Child Health Clinic - MCH",
  "partner_details/organisation":"SRCS Puntland",
  "unparsedDatum":
  {
    "site_activity":"OTP TSFP IYCF Micronutrient",
    "NU_indicators/site_type":"1",
    "NU_indicators/facility_type":"mch",
    "partner_details/organisation":"SRCS_Puntland"
  }
},
{
  "site_activity":"OTP, SC",
  "NU_indicators/site_type":"Fixed",
  "NU_indicators/facility_type":"Stabilization Center",
  "partner_details/organisation":"Other",
  "Other partner_details/organisation":"Somali Humanitarian Aid and Development Agency (SHADA)",
  "unparsedDatum":
  {
    "site_activity":"OTP SC ",
    "NU_indicators/site_type":"1",
    "NU_indicators/facility_type":"sc",
    "partner_details/organisation":"Other",
    "Other partner_details/organisation":"Somali Humanitarian Aid and Development Agency (SHADA)"
  }
}];