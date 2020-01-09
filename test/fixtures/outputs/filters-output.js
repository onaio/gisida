export const filtersOutputData = [{
  "NU_indicators/region_label": {
    "label": "Region",
    "type": "vector",
    "filterValues": {
      "Western": 1,
      "Eastern": 1,
      "Coast": 1,
      "Rift Valley": 1,
      "Nyanza": 1
    }
  },
  "NU_indicators/district_label": {
    "label": "District",
    "type": "vector",
    "filterValues": {
      "Kiambu": 1,
      "Machakos": 1,
      "Voi": 1,
      "Kericho": 1,
      "Kisumu": 1
    }
  },
  "Type of site": {
    "label": "Type of Site",
    "type": "vector",
    "filterValues": {
      "Hospital": 2,
      "Clinic": 2,
      "Health Center": 1
    }
  },
  "site_activity": {
    "label": 'Site Activity',
    "type": "vector",
    "filterType": 'multi',
    "filterValues": {
      "OTP": 2,
      "SC": 3,
      "TSFP": 2,
      "BSFP": 4,
      "MCHN": 0,
      "IYCF": 0,
      "Micronutrient": 0
    },
  },
  "no_of_reports": {
    "label": 'No of Reports',
    "type": 'vector',
    "filterValues": { '3': 1, '4': 1, '6': 1, '7': 1, '13': 1 },
    "quantitativeValues": [ 3, 6, 13, 4, 7 ]
  },
  "acronym": {
    "label": 'Acronym',                                                                                                                                                                                  
    "type": 'vector',                                                                                                                                                                                    
    "filterValues": { UNICEF: 5, WVI: 5 },                                                                                                                                                               
    "filterType": 'multi'
  }
}
];

export const processedFiltersData = [
  {
    "NU_indicators/region_label": "Eastern",
    "NU_indicators/district_label": "Machakos",
    "Type of site": "Clinic",
    "no_of_reports": 6,
    "site_activity": "OTP TSFP",
    "acronym": "UNICEF,WVI"
  },
  {
    "NU_indicators/region_label": "Nyanza",
    "NU_indicators/district_label": "Kisumu",
    "Type of site": "Clinic",
    "no_of_reports": 7,
    "site_activity": "TSFP BSFP",
    "acronym": "UNICEF,WVI"
  }
]