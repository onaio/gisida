import { parseCSV } from './../../utils/files';

// Map of ONA API Endpoints
const apiMap = {
  data: 'https://api.ona.io/api/v1/data',
  user: 'https://api.ona.io/api/v1/user',
  forms: 'https://api.ona.io/api/v1/forms',
  media: 'https://api.ona.io/api/v1/media',
  metadata: 'https://api.ona.io/api/v1/metadata',
};

// Generate Headers for API Fetch
const apiHeaders = (config) => {
  const headers = new Headers();
  if (config && config.mimeType) headers.append('Content-Type', config.mimeType);
  if (!config || !config.token) return headers;

  headers.append('Authorization', `Bearer ${config.token}`);
  return headers;
};

// Generate Request for API Fetch
const apiRequest = (config, headers) => {
  const reqConfig = { method: config.method || 'GET' };
  if (headers) reqConfig.headers = headers;

  let apiPath = apiMap[config.endpoint];
  if (config.extraPath) apiPath = `${apiPath}/${config.extraPath}`;
  if (config.params) apiPath = `${apiPath}?${config.params}`;

  return new Request(apiPath, reqConfig);
};

// Generate API Fetch Promise
const fetchAPI = config => fetch(apiRequest(config, apiHeaders(config)));

// Resolve API Fetch Promise, convert to JSON, handle with callback/resolve as JSON
// config          - (required) Object contaig options / credentials
// config.token    - (required) Access_Token provided by ONA Authorization
// config.endpoint - (required) API Key to determine API Path
// config.method   - (optional) Specify HTTP Method (defaults to GET)
// config.params   - (optional) Additional parameters to be appeneded to API Path
// config.mimeType - (optional) Specify mimeType for Request Headers
// callback        - (optional) Function to take JSON response, otherwise res is simply returned
export default (config, callback) => (callback
  ? fetchAPI(config).then(res => res.json().then(user => ({ user, res }))).then(callback)
  : fetchAPI(config).then(res => res.json().then(user => ({ user, res }))).then(({ user, res }) => ({
    user,
    res,
  })));

export class API {
  constructor() {
    this.apiHeaders = apiHeaders;
    this.apiRequest = apiRequest;
    this.fetchAPI = fetchAPI;
    this.fetch = async (config, callback) => fetchAPI(config).then((res) => {
      // Define response parse method
      let parse;
      switch (config.mimeType) {
        case 'text/csv':
          parse = 'text';
          break;
        case 'image/jpeg':
          parse = 'blob';
          break;
        default:
          parse = 'json';
      }

      // Return parsed Response
      // todo - Change "user" to "body"
      return res[parse]().then((parsed) => {
        // if parsed text is CSV then return Papaparse via parseCSV
        if (config.mimeType === 'text/csv') return { user: parseCSV(parsed) };
        return parsed;
      }, (callback || (user => ({ res, user }))));
    });
  }
}
