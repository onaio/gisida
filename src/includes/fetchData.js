const protocol = 'https';
const host = 'api.ona.io';
const token = '';

export default function (_self, datasetID, fieldName, callback) {
  const queryParams =
    { fields:
    `${'["today",' +
     '"Partner",' +
     '"District",' +
     '"survey_intro/consent",' +
     '"survey_intro/District_miss",' +
     '"survey_intro/Region_miss",' +
     '"'}${fieldName}"]` };

  wrappers.milia.set_host(protocol, host);
  wrappers.milia.get_form_data(datasetID, queryParams, callback);
}
