import moment from 'moment';

export const aggregateLayerOutput1 = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "New_Camp_N": undefined,
          "New_Camp_S": undefined,
          "Settlement": undefined,
          "Upazila": undefined,
          "hc_rep/hcvita": 0,
          "latitude": undefined,
          "longitude": undefined,
          "submission/location_type": "hc",
          "reporter/reporter_org": "govt",
          "submission/reporting_period": "September 6 to September 19",
          "submission/hc_loc": "202224",
          "parsedUID": "202224",
          "period": "September 6 to September 19",
          "value-count": 0,
          "total": 1,
          "weekYear": "September 6 to September 19",
          "hc_rep/hcbvita": undefined,
         "hc_rep/hcgvita": undefined,
          "disaggregatedDates": [
            "September 6 to September 19"
          ],
          "disaggregatedData": [
            {
              "_id": 43322108,
              "end": "2018-09-20T16:42:46.840+06:00",
              "_tags": [],
              "_uuid": "0341c08c-4816-4e2f-9937-be693e203047",
              "start": "2018-09-20T16:23:22.327+06:00",
              "today": "9/20/2018",
              "_notes": [],
              "_edited": false,
              "_status": "submitted_via_web",
              "_version": "2019-03-11T11:33:50+03:00",
              "deviceid": "enketo.ona.io:tc5nzBGXyLhcx780",
              "_duration": 1164,
              "_xform_id": 315366,
              "simserial": "enketo.ona.io:tc5nzBGXyLhcx780",
              "total_SCs": "0",
              "hcrep/hcsc": "0",
              "total_CMAM": "0",
              "total_OTPs": "0",
              "hcrep/hcb59": 5,
              "hcrep/hcbod": "0",
              "hcrep/hcboy": 1888,
              "hcrep/hcg59": 4,
              "hcrep/hcgod": "0",
              "hcrep/hcmnp": "0",
              "hcrep/hcotp": "0",
              "hcrep/hcplw": 1040,
              "hcrep/hcsam": "0",
              "hcrep/hctot": "3701",
              "_attachments": [],
              "_geolocation": [
                null,
                null
              ],
              "_media_count": 0,
              "_total_media": 0,
              "formhub/uuid": "7440ab7d65d54c1aa549bdf173d2d4ae",
              "hcrep/hcbfsc": "0",
              "hcrep/hcbmam": 147,
              "hcrep/hcbmnp": "0",
              "hcrep/hcbsam": "0",
              "hcrep/hccmam": "0",
              "hcrep/hcgirl": 1813,
              "hcrep/hcgmam": 141,
              "hcrep/hcgmnp": "0",
              "hcrep/hcgsam": "0",
              "hcrep/hciron": "0",
              "hcrep/hcvita": "0",
              "subscriberid": "subscriberid not found",
              "_submitted_by": "takter",
              "hcrep/hcbvita": "0",
              "hcrep/hcgvita": "0",
              "hcrep/hcsamsc": "0",
              "hcrep/hctot59": "9",
              "hcrep/hctotod": "0",
              "hcrep/hcbadmit": "0",
              "hcrep/hcboy059": "5",
              "hcrep/hcbsamsc": "0",
              "hcrep/hcdeworm": "0",
              "hcrep/hcgadmit": "0",
              "hcrep/hcgsamsc": "0",
              "hcrep/hcmamtot": "288",
              "hcrep/hcsammed": "0",
              "hcrep/hctotsam": "12",
              "hcrep/hctto059": "9",
              "total_vitaminA": "0",
              "hcrep/hcbdeworm": "0",
              "hcrep/hcgdeworm": "0",
              "hcrep/hcgirl059": "4",
              "meta/instanceID": "uuid:0341c08c-4816-4e2f-9937-be693e203047",
              "_submission_time": "2018-09-20T10:42:54",
              "_xform_id_string": "nutrition_location_may2018",
              "hcrep/hc19deworm": "0",
              "hcrep/hcadolgirl": "0",
              "hcrep/hcbadmitsc": "0",
              "hcrep/hcgadmitsc": "0",
              "hcrep/hctotadmit": "0",
              "hcrep/hcbsamrefer": 6,
              "hcrep/hcgsamrefer": 6,
              "hcrep/hcsammedotp": "0",
              "hcrep/hctotsamall": "12",
              "meta/deprecatedID": "uuid:uuid:a29ae61e-a02b-4a3e-821d-a952df33f6b3",
              "submission/hc_loc": "202224",
              "parsedUID": "202224",
              "_bamboo_dataset_id": "",
              "hcrep/hctotadmitsc": "0",
              "hcrep/hctotcmamisc": "0",
              "_media_all_received": true,
              "total_vitaminA_boys": "0",
              "total_vitaminA_girls": "0",
              "reporter/reporter_org": "govt",
              "total_0_6_SAMadmitted": "0",
              "reporter/reporter_name": "Tahmina Akter",
              "total_0_59_SAMadmitted": "9",
              "total_6_59_SAMadmitted": "9",
              "total_boys_SAMadmitted": "13",
              "total_girls_SAMadmitted": "4",
              "submission/location_type": "hc",
              "total_plw_counselled_iycf": "1040",
              "total_screened_muac_oedema": "3701",
              "submission/reporting_period": "September 6 to September 19",
              "total_boysscreened_muac_oedema": "1888",
              "total_girlsscreened_muac_oedema": "1813",
              "period-date": new Date("2001-09-05T21:00:00.000Z")
            }
          ]
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            NaN,
            NaN
          ]
        }
      }
    ]
  }

// get dynamic time
const period = moment(new Date());
const year = period.year();
const week = period.week();
const month = period.month();
const m = moment().week(week);
const weekMonth = (m.week() - moment(m).startOf('month').week()) + 1;
const currMonthName  = moment().format('MMM');

export const aggregateLayerOutput2 = {
  "features": [
    {
      "geometry": {
        "coordinates": [
          NaN,
          NaN
        ],
        "type": "Point"
      },
      "properties": { 
          "New_Camp_N": undefined,
          "New_Camp_S": undefined,
          "Settlement": undefined,
          "Upazila": undefined,
        "disaggregatedData": [
          {
            "geometry": {
              "coordinates": [
                null,
                null
              ],
              "type": "Point"
            },
            "period": [
              year,
              month,
              weekMonth
            ],
            "properties": {
              "_attachments": [],
              "_bamboo_dataset_id": "",
              "_duration": 1164,
              "_edited": false,
              "_geolocation": [
                null,
                null
              ],
              "_id": 43322108,
              "_media_all_received": true,
              "_media_count": 0,
              "_notes": [],
              "_status": "submitted_via_web",
              "_submission_time": "2018-09-20T10:42:54",
              "_submitted_by": "takter",
              "_tags": [],
              "_total_media": 0,
              "_uuid": "0341c08c-4816-4e2f-9937-be693e203047",
              "_version": "2019-03-11T11:33:50+03:00",
              "_xform_id": 315366,
              "_xform_id_string": "nutrition_location_may2018",
              "deviceid": "enketo.ona.io:tc5nzBGXyLhcx780",
              "end": "2018-09-20T16:42:46.840+06:00",
              "formhub/uuid": "7440ab7d65d54c1aa549bdf173d2d4ae",
              "hcrep/hc19deworm": "0",
              "hcrep/hcadolgirl": "0",
              "hcrep/hcb59": 5,
              "hcrep/hcbadmit": "0",
              "hcrep/hcbadmitsc": "0",
              "hcrep/hcbdeworm": "0",
              "hcrep/hcbfsc": "0",
              "hcrep/hcbmam": 147,
              "hcrep/hcbmnp": "0",
              "hcrep/hcbod": "0",
              "hcrep/hcboy": 1888,
              "hcrep/hcboy059": "5",
              "hcrep/hcbsam": "0",
              "hcrep/hcbsamrefer": 6,
              "hcrep/hcbsamsc": "0",
              "hcrep/hcbvita": "0",
              "hcrep/hccmam": "0",
              "hcrep/hcdeworm": "0",
              "hcrep/hcg59": 4,
              "hcrep/hcgadmit": "0",
              "hcrep/hcgadmitsc": "0",
              "hcrep/hcgdeworm": "0",
              "hcrep/hcgirl": 1813,
              "hcrep/hcgirl059": "4",
              "hcrep/hcgmam": 141,
              "hcrep/hcgmnp": "0",
              "hcrep/hcgod": "0",
              "hcrep/hcgsam": "0",
              "hcrep/hcgsamrefer": 6,
              "hcrep/hcgsamsc": "0",
              "hcrep/hcgvita": "0",
              "hcrep/hciron": "0",
              "hcrep/hcmamtot": "288",
              "hcrep/hcmnp": "0",
              "hcrep/hcotp": "0",
              "hcrep/hcplw": 1040,
              "hcrep/hcsam": "0",
              "hcrep/hcsammed": "0",
              "hcrep/hcsammedotp": "0",
              "hcrep/hcsamsc": "0",
              "hcrep/hcsc": "0",
              "hcrep/hctot": "3701",
              "hcrep/hctot59": "9",
              "hcrep/hctotadmit": "0",
              "hcrep/hctotadmitsc": "0",
              "hcrep/hctotcmamisc": "0",
              "hcrep/hctotod": "0",
              "hcrep/hctotsam": "12",
              "hcrep/hctotsamall": "12",
              "hcrep/hctto059": "9",
              "hcrep/hcvita": "0",
              "meta/deprecatedID": "uuid:uuid:a29ae61e-a02b-4a3e-821d-a952df33f6b3",
              "meta/instanceID": "uuid:0341c08c-4816-4e2f-9937-be693e203047",
              "parsedUID": "202224",
              "reporter/reporter_name": "Tahmina Akter",
              "reporter/reporter_org": "govt",
              "simserial": "enketo.ona.io:tc5nzBGXyLhcx780",
              "start": "2018-09-20T16:23:22.327+06:00",
              "submission/hc_loc": "202224",
              "submission/location_type": "hc",
              "submission/reporting_period": "September 6 to September 19",
              "subscriberid": "subscriberid not found",
              "today": "9/20/2018",
              "total_0_59_SAMadmitted": "9",
              "total_0_6_SAMadmitted": "0",
              "total_6_59_SAMadmitted": "9",
              "total_CMAM": "0",
              "total_OTPs": "0",
              "total_SCs": "0",
              "total_boys_SAMadmitted": "13",
              "total_boysscreened_muac_oedema": "1888",
              "total_girls_SAMadmitted": "4",
              "total_girlsscreened_muac_oedema": "1813",
              "total_plw_counselled_iycf": "1040",
              "total_screened_muac_oedema": "3701",
              "total_vitaminA": "0",
              "total_vitaminA_boys": "0",
              "total_vitaminA_girls": "0"
            },
            "submission/hc_loc": undefined,
            "submission/reporting_period": undefined,
            "type": "Feature"
          }
        ],
        "disaggregatedDates": [
          undefined
        ],
        "hc_rep/hcbvita": undefined,
        "hc_rep/hcgvita": undefined,
        "hc_rep/hcvita": 0,
        "latitude": undefined,
        "longitude": undefined,
        "parsedUID": undefined,
        "period": `${currMonthName} w ${weekMonth} ${year}`,
        "reporter/reporter_org": undefined,
        "submission/hc_loc": "undefined",
        "submission/location_type": undefined,
       "submission/reporting_period": undefined,
        "total": 1,
        "value-count": 0,
        "weekYear": `${year},${month},${weekMonth}`
      },
      "type": "Feature"
    }
  ],
  "type": "FeatureCollection"
}

  export default {aggregateLayerOutput1, aggregateLayerOutput2};