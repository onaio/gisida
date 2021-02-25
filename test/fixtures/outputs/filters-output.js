export const filtersOutputData = [

	{
	"NU_indicators/district_label": {
		"filterValues": {
		"Kericho": 1,
		"Kiambu": 1,
		"Kisumu": 1,
		"Machakos": 1,
		"Voi": 1
		},
		"label": "District",
		"type": "vector"
	},
	"NU_indicators/region_label": {
		"filterValues": {
		"Coast": 1,
		"Eastern": 1,
		"Nyanza": 1,
		"Rift Valley": 1,
		"Western": 1
		},
		"label": "Region",
		"type": "vector"
	},
	"Type of site": {
		"filterValues": {
		"Clinic": 2,
		"Health Center": 1,
		"Hospital": 2
		},
		"label": "Type of Site",
		"type": "vector"
	},
	"acronym": {
		"filterType": "multi",
		"filterValues": {
		"UNICEF": 5,
		"WVI": 5
		},
		"label": "Acronym",
		"type": "vector"
	},
	"no_of_reports": {
		"filterValues": {
		"3": 1,
		"4": 1,
		"6": 1,
		"7": 1,
		"13": 1
		},
		"label": "No of Reports",
		"quantitativeValues": [
		3,
		6,
		13,
		4,
		7
		],
		"type": "vector"
	},
	"site_activity": {
		"filterType": "multi",
		"filterValues": {
		"BSFP": 4,
		"IYCF": 0,
		"MCHN": 0,
		"Micronutrient": 0,
		"OTP": 2,
		"SC": 3,
		"TSFP": 2
		},
		"label": "Site Activity",
		"type": "vector"
	}
	},

	{
		"Upazila": {
		"filterValues": {
			"undefined": 1
		},
		"label": "Upazila",
		"type": "stops"
		},
		"reporter/reporter_org": {
		"filterValues": {
			"govt": 1
		},
		"label": "Partner",
		"type": "stops"
		}
	},

];

export const processedFiltersData = [
	{
	  "NU_indicators/district_label": "Machakos",
	  "NU_indicators/region_label": "Eastern",
	  "Type of site": "Clinic",
	  "acronym": "UNICEF,WVI",
	  "no_of_reports": 6,
	  "site_activity": "OTP TSFP"
	},
	{
	  "NU_indicators/district_label": "Kisumu",
	  "NU_indicators/region_label": "Nyanza",
	  "Type of site": "Clinic",
	  "acronym": "UNICEF,WVI",
	  "no_of_reports": 7,
	  "site_activity": "TSFP BSFP"
	}
  ]

export default {filtersOutputData}
