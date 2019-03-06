// export const publicMethod = () => true;
// const privateMethod = () => true;

const apiMap = {
  slice: 'superset/slice_json'
}

// Generate Headers for API Fetch
const apiHeaders = (config) => {
  const headers = new Headers();
  // headers.append('Access-Control-Allow-Origin', '*');
  if (!config) return headers;
  if (config.mimeType) headers.append('Content-Type', config.mimeType);

  if (config.token) {
    headers.append('Authorization', `Bearer ${config.token}`);
  }

  return headers;
};

// Generate Request for API Fetch
const apiRequest = (config, headers) => {
  const base = config.base || 'http://localhost:8088/';
  const reqConfig = { method: config.method || 'GET' };
  if (headers) reqConfig.headers = headers;
  if (config.supersetToken) reqConfig.credentials = 'include';
  let apiPath = `${base}${apiMap[config.endpoint]}`;
  if (config.extraPath) apiPath = `${apiPath}/${config.extraPath}`;
  if (config.params) apiPath = `${apiPath}?${config.params}`;

  return new Request(apiPath, reqConfig);
};

// Generate API Fetch Promise
const fetchAPI = config => fetch(apiRequest(config, apiHeaders(config)));

export class API {
  constructor() {
    const self = this;
    // this.publicMethod = publicMethod;
    // privateMethod.bind(this);
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
    // }).catch((err) => {
      // todo - replace stub data request with real error handler
      // return fetch('/data/_slice.json')
      //   .then(res => res.json())
      //   .then((slice) => slice.data.records);
    });
    this.deferedFetch = (config, apiCallback, qCallback) => {
      return self.fetch(config, apiCallback)
        .then(data => qCallback(null, data))
        .catch(err => {
          // todo - replace stub data request with real error handler
          return fetch('/data/_slice.json')
            .then((res) => res.json()) 
            .then((slice) => qCallback(null, slice.data.records));
        });
    };
  }
};
