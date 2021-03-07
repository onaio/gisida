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


export const filterLayerDataOnMultiselectSelection = {
  "aggregate": {
      "filter": [
          "year",
          "month",
          "state",
          "region",
          "district",
          "partner_category",
          "partner_org",
          "cp_service",
          "subservices"
      ],
      "sub-filter": [],
      "accepted-filter-values": [
          "all",
          [
              "July,June,May"
          ],
          "all",
          "all",
          "all",
          "all",
          [
              "MOI"
          ],
          "all",
          "multi"
      ],
      "accepted-sub-filter-values": [],
      "filter-label": [
          "Year",
          "Month",
          "State",
          "Region",
          "District",
          "Partner Category",
          "Partner Organisation",
          "CP Service",
          "CP Sub-service"
      ]
  },
  "source": {
      "type": "geojson",
      "featureType": "Point",
      "data": {
          "type": "FeatureCollection",
          "features": [
              {
                  "type": "Feature",
                  "properties": {
                      "service_point_name": "Juvenile Court",
                      "district": "Bossaso",
                      "region": "Bari",
                      "state": "Puntland",
                      "cp_service": "Justice",
                      "sp_id": "59108143",
                      "total_caseload": 94,
                      "partner_category": "FMS: Puntland",
                      "subservices": [
                          "Children's court ",
                          " Juvenile justice ",
                          " Womens and Children Desk at Police station"
                      ],
                      "partner_org": [
                          "MoJ"
                      ],
                      "year": "2020",
                      "month": "May",
                      "gps_longitude": 49.165724,
                      "gps_latitude": 11.307708
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          49.165724,
                          11.307708
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "service_point_name": "Ibrahim Kodbuur Police Station",
                      "district": "Hargeysa",
                      "region": "Marodijeex",
                      "state": "Somaliland",
                      "cp_service": "Justice",
                      "sp_id": "63168648",
                      "total_caseload": 92,
                      "partner_category": "Somaliland Govt",
                      "subservices": [
                          "Womens and Children Desk at Police station"
                      ],
                      "partner_org": [
                          "MoJ"
                      ],
                      "year": "2020",
                      "month": "August,September",
                      "gps_longitude": 44.046669,
                      "gps_latitude": 9.573371
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          44.046669,
                          9.573371
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "service_point_name": "GBV case management centre",
                      "district": "Dhusamareeb",
                      "region": "Galgudud",
                      "state": "Galmudug",
                      "cp_service": "Gender Based Violence (GBV)",
                      "sp_id": "59769714",
                      "total_caseload": 88,
                      "partner_category": "Civil Society Partners",
                      "subservices": [
                          "Community Awareness raising on GBV (other than Communities Care) ",
                          " One Stop Centres/ Family Care Centres ",
                          " Safe houses ",
                          " Vocational Training Centre"
                      ],
                      "partner_org": [
                          "Elman"
                      ],
                      "year": "2020",
                      "month": "July,June",
                      "gps_longitude": 46.369383,
                      "gps_latitude": 5.542179
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          46.369383,
                          5.542179
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "service_point_name": "Safe House",
                      "district": "Borama",
                      "region": "Awdal",
                      "state": "Somaliland",
                      "cp_service": "Gender Based Violence (GBV)",
                      "sp_id": "59759260",
                      "total_caseload": 88,
                      "partner_category": "Civil Society Partners",
                      "subservices": [
                          "Safe houses"
                      ],
                      "partner_org": [
                          " WAAPO"
                      ],
                      "year": "2020",
                      "month": "August,July,June,May",
                      "gps_longitude": 44.059853,
                      "gps_latitude": 9.581363
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          44.059853,
                          9.581363
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "service_point_name": "Puntland State University",
                      "district": "Garowe",
                      "region": "Nugal",
                      "state": "Puntland",
                      "cp_service": "Capacity Development",
                      "sp_id": "59105950",
                      "total_caseload": 76,
                      "partner_category": "FMS: Puntland",
                      "subservices": [
                          "Universities providing social work courses"
                      ],
                      "partner_org": [
                          "MOWDAFA"
                      ],
                      "year": "2020",
                      "month": "May",
                      "gps_longitude": 48.455069,
                      "gps_latitude": 8.401734
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          48.455069,
                          8.401734
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "service_point_name": "Sh. Nour CP Desk",
                      "district": "Hargeysa",
                      "region": "Marodijeex",
                      "state": "Somaliland",
                      "cp_service": "Child Protection",
                      "sp_id": "61233337",
                      "total_caseload": 73,
                      "partner_category": "Civil Society Partners",
                      "subservices": [
                          "Child protection desk"
                      ],
                      "partner_org": [
                          " WAAPO"
                      ],
                      "year": "2020",
                      "month": "August,July,June,October",
                      "gps_longitude": 44.078283,
                      "gps_latitude": 9.578069
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          44.078283,
                          9.578069
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "service_point_name": "East Africa University",
                      "district": "Garowe",
                      "region": "Nugal",
                      "state": "Puntland",
                      "cp_service": "Capacity Development",
                      "sp_id": "59106333",
                      "total_caseload": 71,
                      "partner_category": "FMS: Puntland",
                      "subservices": [
                          "Universities providing social work courses"
                      ],
                      "partner_org": [
                          "MOWDAFA"
                      ],
                      "year": "2020",
                      "month": "May",
                      "gps_longitude": 48.458237,
                      "gps_latitude": 8.414414
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          48.458237,
                          8.414414
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "service_point_name": "Stadium CP Desk",
                      "district": "Hargeysa",
                      "region": "Marodijeex",
                      "state": "Somaliland",
                      "cp_service": "Child Protection",
                      "sp_id": "61233192",
                      "total_caseload": 68,
                      "partner_category": "Civil Society Partners",
                      "subservices": [
                          "Child protection desk"
                      ],
                      "partner_org": [
                          " WAAPO"
                      ],
                      "year": "2020",
                      "month": "August,July,June",
                      "gps_longitude": 44.062281,
                      "gps_latitude": 9.548615
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          44.062281,
                          9.548615
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "service_point_name": "CP Desk",
                      "district": "Berbera",
                      "region": "Sahil",
                      "state": "Somaliland",
                      "cp_service": "Child Protection",
                      "sp_id": "61233744",
                      "total_caseload": 65,
                      "partner_category": "Civil Society Partners",
                      "subservices": [
                          "Child protection desk"
                      ],
                      "partner_org": [
                          " WAAPO"
                      ],
                      "year": "2020",
                      "month": "August,July,June,October",
                      "gps_longitude": 44.692969,
                      "gps_latitude": 9.95245
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          44.692969,
                          9.95245
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "service_point_name": "Ahmed Dhagah",
                      "district": "Hargeysa",
                      "region": "Marodijeex",
                      "state": "Somaliland",
                      "cp_service": "Justice",
                      "sp_id": "63168624",
                      "total_caseload": 60,
                      "partner_category": "Somaliland Govt",
                      "subservices": [
                          "Womens and Children Desk at Police station"
                      ],
                      "partner_org": [
                          "MoJ"
                      ],
                      "year": "2020",
                      "month": "August,September",
                      "gps_longitude": 44.070673,
                      "gps_latitude": 9.552551
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          44.070673,
                          9.552551
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "service_point_name": "Vocational training centre - CAAC",
                      "district": "Wadajir",
                      "region": "Benadir",
                      "state": "Benadiir",
                      "cp_service": "Child Protection",
                      "sp_id": "61428075",
                      "total_caseload": 55,
                      "partner_category": "Civil Society Partners",
                      "subservices": [
                          "Child Protection Committee or Community Based Child Protection Mechanism ",
                          " Community Awareness raising on CP ",
                          " Interim Care Centre (CAAC) ",
                          " UNICEF partner office ",
                          " Vocational Training Centre"
                      ],
                      "partner_org": [
                          " IIDA"
                      ],
                      "year": "2020",
                      "month": "June",
                      "gps_longitude": 45.288666,
                      "gps_latitude": 2.019693
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          45.288666,
                          2.019693
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "service_point_name": "Gender Based Violence (GBV) case management centre",
                      "district": "Kahda",
                      "region": "Benadir",
                      "state": "Benadiir",
                      "cp_service": "Gender Based Violence (GBV)",
                      "sp_id": "61766419",
                      "total_caseload": 48,
                      "partner_category": "Civil Society Partners",
                      "subservices": [
                          "Communities Cares ",
                          " Community Awareness raising on GBV (other than Communities Care) ",
                          " Family care centre ",
                          " One Stop Centres/ Family Care Centres ",
                          " Safe houses ",
                          " Vocational Training Centre ",
                          " Women and girl friendly space"
                      ],
                      "partner_org": [
                          " SWDC"
                      ],
                      "year": "2020",
                      "month": "June",
                      "gps_longitude": 45.235361,
                      "gps_latitude": 2.030372
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          45.235361,
                          2.030372
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "service_point_name": "Gebiley CP Desk",
                      "district": "Gebiley",
                      "region": "Marodijeex",
                      "state": "Somaliland",
                      "cp_service": "Child Protection",
                      "sp_id": "61225227",
                      "total_caseload": 46,
                      "partner_category": "Civil Society Partners",
                      "subservices": [
                          "Child protection desk"
                      ],
                      "partner_org": [
                          " WAAPO"
                      ],
                      "year": "2020",
                      "month": "August,July,June,October",
                      "gps_longitude": 43.619353,
                      "gps_latitude": 9.699751
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          43.619353,
                          9.699751
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "service_point_name": "New Hargeisa Police Station",
                      "district": "Hargeysa",
                      "region": "Marodijeex",
                      "state": "Somaliland",
                      "cp_service": "Justice",
                      "sp_id": "63168616",
                      "total_caseload": 40,
                      "partner_category": "Somaliland Govt",
                      "subservices": [
                          "Womens and Children Desk at Police station"
                      ],
                      "partner_org": [
                          "MoJ"
                      ],
                      "year": "2020",
                      "month": "September",
                      "gps_longitude": 44.073439,
                      "gps_latitude": 9.560528
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          44.073439,
                          9.560528
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "service_point_name": "Juvenile Court",
                      "district": "Gardo",
                      "region": "Bari",
                      "state": "Puntland",
                      "cp_service": "Justice",
                      "sp_id": "59108059",
                      "total_caseload": 26,
                      "partner_category": "FMS: Puntland",
                      "subservices": [
                          "Children's court ",
                          " Juvenile justice ",
                          " Womens and Children Desk at Police station"
                      ],
                      "partner_org": [
                          "MoJ"
                      ],
                      "year": "2020",
                      "month": "May",
                      "gps_longitude": 49.089169,
                      "gps_latitude": 9.497826
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          49.089169,
                          9.497826
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "service_point_name": "East Africa University",
                      "district": "Bossaso",
                      "region": "Bari",
                      "state": "Puntland",
                      "cp_service": "Capacity Development",
                      "sp_id": "59108198",
                      "total_caseload": 20,
                      "partner_category": "FMS: Puntland",
                      "subservices": [
                          "Universities providing social work courses"
                      ],
                      "partner_org": [
                          "MOWDAFA"
                      ],
                      "year": "2020",
                      "month": "May",
                      "gps_longitude": 49.175816,
                      "gps_latitude": 11.322072
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          49.175816,
                          11.322072
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "service_point_name": "Puntland State University",
                      "district": "Galkayu",
                      "region": "Mudug",
                      "state": "Puntland",
                      "cp_service": "Capacity Development",
                      "sp_id": "59106669",
                      "total_caseload": 20,
                      "partner_category": "FMS: Puntland",
                      "subservices": [
                          "Universities providing social work courses"
                      ],
                      "partner_org": [
                          "MOWDAFA"
                      ],
                      "year": "2020",
                      "month": "May",
                      "gps_longitude": 47.431745,
                      "gps_latitude": 6.771898
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          47.431745,
                          6.771898
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "service_point_name": "Community based child protection center",
                      "district": "Kahda",
                      "region": "Benadir",
                      "state": "Benadiir",
                      "cp_service": "Child Protection",
                      "sp_id": "59769384",
                      "total_caseload": 18,
                      "partner_category": "Civil Society Partners",
                      "subservices": [
                          "Child Protection Committee or Community Based Child Protection Mechanism ",
                          " Community Awareness raising on CP"
                      ],
                      "partner_org": [
                          " SWDC"
                      ],
                      "year": "2020",
                      "month": "June",
                      "gps_longitude": 45.239465,
                      "gps_latitude": 2.03376
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          45.239465,
                          2.03376
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "service_point_name": "One Stop Centre",
                      "district": "Wadajir",
                      "region": "Benadir",
                      "state": "Benadiir",
                      "cp_service": "Child Protection",
                      "sp_id": "59769456",
                      "total_caseload": 0,
                      "partner_category": "Civil Society Partners",
                      "subservices": [
                          "Child Helpline ",
                          " Child protection desk ",
                          " Temporary shelter for UASC ",
                          " UNICEF partner office"
                      ],
                      "partner_org": [
                          " SWDC"
                      ],
                      "year": "2020",
                      "month": "July",
                      "gps_longitude": 45.284258,
                      "gps_latitude": 2.026083
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          45.284258,
                          2.026083
                      ]
                  }
              },
              {
                  "type": "Feature",
                  "properties": {
                      "service_point_name": "Interim Care",
                      "district": "Hargeysa",
                      "region": "Marodijeex",
                      "state": "Somaliland",
                      "cp_service": "Child Protection",
                      "sp_id": "59754185",
                      "total_caseload": 0,
                      "partner_category": "Somaliland Govt",
                      "subservices": [
                          "Temporary shelter for UASC"
                      ],
                      "partner_org": [
                          "MESAF"
                      ],
                      "year": "2020",
                      "month": "May",
                      "gps_longitude": 44.060763,
                      "gps_latitude": 9.58203
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                          44.060763,
                          9.58203
                      ]
                  }
              }
          ]
      },
      "join": [
          "sp_id",
          "sp_id"
      ]
  },
  "type": "filteredFilter",
  "data-parse": {
      "partner_org": {
          "type": "multiple",
          "split": ","
      },
      "subservices": {
          "type": "multiple",
          "split": ","
      }
  }
}


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