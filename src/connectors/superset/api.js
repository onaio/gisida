// export const publicMethod = () => true;
// const privateMethod = () => true;

const apiMap = {
  slice: 'superset/slice_json'
}

// Generate Headers for Fetch API
const apiHeaders = (config) => {
  const headers = new Headers();

  if (!config) return headers;
  if (config.mimeType) headers.append('Content-Type', config.mimeType);

  return headers;
};

// Generate Request for Fetch API
const apiRequest = (config, headers) => {
  const base = config.base || 'http://localhost:8088/';
  let apiPath = `${base}${(apiMap[config.endpoint] || '')}`;

  const reqConfig = { 
    method: config.method || 'GET',
    credentials: config.credentials || 'include'
  };

  if (headers) reqConfig.headers = headers;
  if (config.extraPath) apiPath = `${apiPath}/${config.extraPath}`;
  if (config.params) apiPath = `${apiPath}?${config.params}`;

  return new Request(apiPath, reqConfig);
};

// Generate Fetch API Promise
const fetchAPI = config => fetch(apiRequest(config, apiHeaders(config)));

// API Module for FE Superset Connector
export class API {
  constructor() {
    const self = this;
    // this.publicMethod = publicMethod;
    // privateMethod.bind(this);


    // Resolve Fetch API Promise, convert to JSON, handle with callback/resolve as JSON
    // config          - (required) Object containing options / credentials
    // config.token    - (required) Access_Token provided by ONA Authorization
    // config.endpoint - (required) API Key to determine API Path
    // config.method   - (optional) Specify HTTP Method (defaults to GET)
    // config.params   - (optional) Additional parameters to be appeneded to API Path
    // config.mimeType - (optional) Specify mimeType for Request Headers
    // config.base     - (optional) Base URL for API Requests, must include trailing '/'
    // config.credentials(optional) Custom override for Fetch API 'credentials' setting
    // callback        - (optional) Function to take JSON response, otherwise res is simply returned
    this.fetch = async (config, callback = (res) => res) => fetchAPI(config)
      .catch(err => callback(err))
      .then((res) => {
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
        })
        .catch(err => (callback && callback(err)) || { res, err })
        .then(user => (callback && callback(user)) || ({ res, user }))
      });

    // version of this.fetch specifically for d3.queue fetching
    this.deferedFetch = (config, apiCallback, qCallback) => {
      return self.fetch(config, apiCallback)
        .then(data => qCallback(null, data))
        .catch(err => qCallback(err, null));
    };
  }
};
