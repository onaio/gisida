export const filtersInputObj = {
  "label": "Nutrition Sites - Live",
  "source": {
    "type": "geojson",
    "featureType": "Point",
    "data": [
      {
        "NU_indicators/region_label": "Western",
        "NU_indicators/district_label": "Kiambu",
        "Type of site": "Hospital",
        "site_activity": "OTP SC BSFP",
        "no_of_reports": 3,
        "acronym": "UNICEF,WVI"
      },
      {
        "NU_indicators/region_label": "Eastern",
        "NU_indicators/district_label": "Machakos",
        "Type of site": "Clinic",
        "site_activity": "OTP TSFP",
        "no_of_reports": 6,
        "acronym": "UNICEF,WVI"
      },
      {
        "NU_indicators/region_label": "Coast",
        "NU_indicators/district_label": "Voi",
        "Type of site": "Health Center",
        "site_activity": "SC BSFP",
        "no_of_reports": 13,
        "acronym": "UNICEF,WVI"
      },
      {
        "NU_indicators/region_label": "Rift Valley",
        "NU_indicators/district_label": "Kericho",
        "Type of site": "Hospital",
        "site_activity": "SC BSFP",
        "no_of_reports": 4,
        "acronym": "UNICEF,WVI"
      },
      {
        "NU_indicators/region_label": "Nyanza",
        "NU_indicators/district_label": "Kisumu",
        "Type of site": "Clinic",
        "site_activity": "TSFP BSFP",
        "no_of_reports": 7,
        "acronym": "UNICEF,WVI"
      },

    ],
    "join": [
      "site_id",
      "site_id",
      "facility_site_id",
      "facility_site_id",
      "Fixed Site Unique ID"
    ],
    "minzoom": 2,
    "relation": {
      "type": "many-to-one",
      "key": ["one", "one", "many", "many", "one"],
      "many-prop": "reports"
    }
  },
  "aggregate": {
    "filter": [
      "NU_indicators/region_label",
      "NU_indicators/district_label",
      "Type of site",
      "site_activity",
      "no_of_reports",
      "acronym"
    ],
    "accepted-filter-values": [
      "all",
      "all",
      "Clinic",
      "multi",
      "quant",
      "multi"
    ],
    "filter-label": [
      "Region",
      "District",
      "Type of Site",
      "Site Activity",
      "No of Reports",
      "Acronym"
    ],
    "sub-filter": [
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    "accepted-sub-filter-values": [
      "",
      "",
      "",
      "",
      "",
      ""
    ]
  },
  "type": "symbol",
  "paint": {
    "text-color": "#0000ff",
    "text-halo-color": "#fff",
    "text-halo-width": 1.3,
    "text-halo-blur": 1
  },
  "layout": {
    "text-size": {
      "stops": [
        [
          5,
          0
        ],
        [
          7,
          5
        ],
        [
          8,
          10
        ]
      ]
    },
    "text-field": "{Site name}",
    "text-offset": [
      0,
      2
    ],
    "icon-image": "foodwarehouse-brown",
    "icon-allow-overlap": true
  },
  "categories": {
    "breaks": "no",
    "label": [
      "Nutrition sites"
    ],
    "type": [
      "Nutrition sites"
    ],
    "color": [
      "#8B4513"
    ]
  },
  "visible": false,
  "credit": "Nutrition Cluster (UNICEF), Samson Desie (sdesie@unicef.org)",
  "highlight-filter-property": "Fixed Site Unique ID",
  "highlight-layout": {
    "icon-image": "foodwarehouse-brown",
    "icon-size": 1.25
  },
  "popup": {
    "body": "{{facility_combined_label}}"
  },
  "geo-column": "_geolocation",
  "data-parse": {
    "acronym": {
      "type": "multiple",
      "split": ","
    },
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
        "HRDO_Hidig": "HRDO (Hidig)",
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
  },
  "detail-view": {
    "UID": "site_id",
    "title": {
      "prop": "facility_combined_label",
      "mustache": "{{{facility_combined_label}}}"
    },
    "sub-title": {
      "prop": "NU_indicators/facility_type",
      "mustache": "{{{NU_indicators/facility_type}}}"
    },
    "basic-info": [
      {
        "value": {
          "prop": ["Longitude", "Latitude"],
          "join": ", "
        },
        "icon": "map-marker",
        "alt": "GPS coordinates"
      },
      {
        "value": {
          "prop": ["settlement_label", "NU_indicators/district_label", "NU_indicators/region_label"],
          "join": ", "

        },
        "icon": "globe",
        "alt": "Site Location"
      },
      {
        "value": {
          "prop": "partner_details/organisation",
          "mustache": "{{{partner_details/organisation}}}"
        },
        "icon": "user",
        "alt": "Organization"
      },
      {
        "value": "NU_indicators/donor",
        "icon": "user",
        "alt": "Donor(s)"
      }
    ]
  },
  "category": "Nutrition"
};

export const filterDataByPeriodInput = [
  {
    "period": 'January/February',
    "children_reached": 300
  },
  {
    "period": 'March',
    "children_reached": 600
  },
  {
    "period": 'December',
    "children_reached": 550
  },
  {
    "period": 'August',
    "children_reached": 400
  }
]