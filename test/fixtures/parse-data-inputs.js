//file with inputs for testing the parse-data util function

export const parseInputSpecObj = 
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

export const parseInputSpecData = [{
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

export const parseInputSpecObjCmplx = 
{
"site_activity": {
  "type": "multiple",
  "key": {
    "1": "OTP",
    "2": "SC",
    "3": "TSFP",
    "4": "BSFP",
    "5": "MCHN",
    "6": "IYCF",
    "7": "Micronutrient"
  },
  "split": " ",
  "join": ", "
},
"mobile_site_activity": {
  "type": "multiple",
  "key": {
    "1": "OTP",
    "2": "SC",
    "3": "TSFP",
    "4": "BSFP",
    "5": "MCHN",
    "6": "IYCF",
    "7": "Micronutrient"
  },
  "split": " ",
  "join": ", "
},
"NU_indicators/site_type": {
      "type": "single",
      "key": {
        "1": "Fixed",
        "2": "Mobile"
      }
  },
  "NU_indicators/facility_type": {
      "type": "single",
      "key": {
        "phcc": "Primary Health Care Center - PHCC",
        "mch": "Mother and Child Health Clinic - MCH",
        "hospital": "Hospital",
        "health_post": "Health Post",
        "sc": "Stabilization Center",
        "fdp": "Food Distribution Point - FDP",
        "phcu": "Primary Health Care Unit - PHCU",
        "otp_tsfp": "OTP and TSFP",
        "sc_otp_tsfp": "SC, OTP and TSFP",
        "partner_office": "Partner Organization Office"
      }
  },
  "NU_indicators/donor": {
      "type": "multiple",
      "other-val": "NU_indicators/donor_unlisted",
      "other-prop": "1",
      "key": {
        "1": "Other",
        "2": "CWW",
        "3": "DFID SNS",
        "4": "DFID SNS/ECHO",
        "5": "ECHO",
        "6": "ECHO/DFID SNS+",
        "7": "IRF",
        "8": "SHF",
        "9": "UNICEF",
        "10": "WFP",
        "11": "BRICS"
      }
  },
  "partner_details/organisation": {
      "type": "single",
      "other-key": "Other",
      "other-val": "partner_details/organisation_unlisted",
      "key": {
        "ADESO_Horn_Relief": "ADESO (Horn Relief)",
        "Aid_Vision_formerly_SSRDA": "Aid Vision (formerly SSRDA)",
        "FILSAN_SATG": "FILSAN-SATG",
        "GELDA_Consortium": "GELDA Consortium",
        "HORN_AID": "HORN AID",
        "HORN_VISION": "HORN VISION",
        "HRDO_Hidig":  "HRDO (Hidig)",
        "HRDO_Horsed": "HRDO (Horsed)",
        "HWS_CDO": "HWS/CDO",
        "JUBA_FOUNDATION": "JUBA FOUNDATION",
        "KF_Kow_Foundation": "KF (Kow Foundation)",
        "Mercy_Corps": "Mercy Corps",
        "Mercy_USA": "Mercy USA",
        "MERLIN_Save_the_Children": "MERLIN (Save the Children)",
        "Mulrany_International": "Mulrany International",
        "Muslim_Aid": "Muslim Aid",
        "New_Ways": "New Ways",
        "OXFAM_GB": "OXFAM GB",
        "OXFAM_NOVIB": "OXFAM NOVIB",
        "SAF_UK": "SAF-UK",
        "Save_the_Children": "Save the Children",
        "Southern_Aid": "Southern Aid",
        "SRCS_Puntland": "SRCS Puntland",
        "SRCS_Somaliland": "SRCS Somaliland",
        "Swisso_Kalmo": "Swisso Kalmo",
        "Wajid_MCH": "Wajid MCH",
        "World_Vision": "World Vision"
      }
  }
};

export const parseInputSpecDataCmplx = [
{
  'site_activity': 'OTP TSFP IYCF Micronutrient',
  //'mobile_site_activity': ''
  'NU_indicators/site_type': '1',
  'NU_indicators/facility_type': 'mch',
  //'NU_indicators/donor': '',
  'partner_details/organisation': 'SRCS_Puntland'
},
{
  'site_activity': 'OTP SC ',
  //'mobile_site_activity': ''
  'NU_indicators/site_type': '1',
  'NU_indicators/facility_type': 'sc',
  //'NU_indicators/donor': '',
  'partner_details/organisation': 'Other',
  'Other partner_details/organisation': 'Somali Humanitarian Aid and Development Agency (SHADA)'
}];