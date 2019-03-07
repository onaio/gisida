import { API } from './api';

const processData = (res) => {
  return (res
    && res.data
    && res.data.records
    && Array.isArray(res.data.records)
    && [...res.data.records]
  );
}

const authZ = (config, callback) => {
  const headers = new Headers();
  headers.append('Custom-Api-Token', config.token);

  return fetch(`${config.base || 'http://localhost:8088/'}oauth-authorized/onadata`, {
    headers, // comment to remove Custom-Api-Token header
    method: 'GET',
    credentials: 'include',
  }).then(res => callback(res)).catch(err => callback(err));
}

const deAuthZ = (config, callback) => 
  fetch(`${config && config.base || 'http://localhost:8088/'}logout/`, {
    method: 'GET',
    credentials: 'include',
  })
  .then(res => callback(res))
  .catch(err => callback(err));


const SUPERSET = {
  API: new API(),
  processData,
  authZ,
  deAuthZ,
};

export default SUPERSET;
