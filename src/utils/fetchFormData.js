const protocol = 'https';
const host = 'api.ona.io';

export default function fetchFormData(datasetID, properties, callback) {
  const fields = properties.map(p => `"${p}"`).join();
  const queryParams = { fields: `[${fields}]` };
  milia.wrapper.set_host(protocol, host);
  milia.wrapper.get_form_data(
    datasetID,
    queryParams,
    //  self.props.mapConfig.apiAccessToken, // get API access token from state
    callback,
  );
}
