const protocol = 'https';
const host = 'api.ona.io';
const endpoint = 'api/v1/data';

function formatParams(params) {
  if (!params) {
    return '';
  }
  const paramsList = Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`);
  return `?${paramsList.join('&')}`;
}

export default function getData(formID, properties, state, callback, absPath) {
  const { apiAccessToken, apiHost } = state;
  let path, mimeType, xobj;
  /** If the formId value  in question is a number
   * Build the query params and the path else in the case of a url
   * Build the path from the url
   */
  if (typeof formID === 'number') {
  const fields =
    properties && Array.isArray(properties)
      ? properties.map(p => `"${p}"`).join()
      : (properties && properties[formID].map(p => `"${p}"`).join()) || null;

  const queryParams = fields && { fields: `[${fields}]` };
  xobj = new XMLHttpRequest();
  mimeType = 'application/json';
  const activeHost = apiHost || host;
  path = absPath || `${protocol}://${activeHost}/${endpoint}/${formID}.json${formatParams(queryParams)}`;
} else {
  xobj = new XMLHttpRequest();
  mimeType = 'application/json';
  path = formID;
}
    // console.log(path);
    // console.log(apiAccessToken)
  try {
    xobj.overrideMimeType(mimeType);
    xobj.open('GET', path, true);
    xobj.setRequestHeader('Authorization', `Token ${apiAccessToken}`);
    xobj.onreadystatechange = () => {
      if (xobj.readyState === 4 && xobj.status === 200) {
        callback(null, JSON.parse(xobj.responseText));
      }
    };
    xobj.send(null);
  } catch (e) {
    callback(e, xobj.responseText);
  }
}
