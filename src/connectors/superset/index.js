import { API } from './api';

const processData = (res) => {
  return (res
    && res['form_data']
    && res['form_data'].data
    && res['form_data'].data.records
    && Array.isArray(res['form_data'].data.records)
    && [...res['form_data'].data.records])
  ;
}

const authZ = (config, callback) => {
  const headers = new Headers();
  headers.append('Custom-Api-Token', config.token);

  return fetch(`${config.base || 'http://localhost:8088/'}oauth-authorized/onadata`, {
    headers, // comment to remove Custom-Api-Token header
    method: 'GET',
    credentials: 'include',
  }).then(res => callback(res));
}

const SUPERSET = {
  API: new API(),
  processData,
  authZ,
};

export default SUPERSET;
