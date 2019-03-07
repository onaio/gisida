import { API } from './api';

// utility function to return a copy of the data from a parsed slice_json response 
const processData = (res) => {
  return (res
    && res.data
    && res.data.records
    && Array.isArray(res.data.records)
    && [...res.data.records]
  );
}

// Authorization Request
// config.token - (Required) ONA oAuth2 Access Token as a string
// config.base  - (Optional) Overrides Auth URI Basepath, requires trailing '/'
// callback     - (Required) Callback function to receive Fetch API res / err object 
const authZ = (config, callback) => {
  const headers = new Headers();
  headers.append('Custom-Api-Token', config.token);

  return fetch(`${config.base || 'http://localhost:8088/'}oauth-authorized/onadata`, {
    headers,
    method: 'GET',
    credentials: 'include',
  })
  .then(res => callback(res))
  .catch(err => callback(err));
}

// De-Authorization Request
// config.base  - (Optional) Overrides DeAuth URI Basepath, requires trailing '/'
// callback     - (Required) Callback function to receive Fetch API res / err object
const deAuthZ = (config, callback) => 
  fetch(`${config && config.base || 'http://localhost:8088/'}logout/`, {
    method: 'GET',
    credentials: 'include',
  })
  .then(res => callback(res))
  .catch(err => callback(err));

// FE Superset Connector Module
const SUPERSET = {
  API: new API(),
  processData,
  authZ,
  deAuthZ,
};

export default SUPERSET;
