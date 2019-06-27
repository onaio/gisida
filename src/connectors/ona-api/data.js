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

export default function getData(formID, properties, state, callback) {
  const { apiAccessToken, apiHost } = state;
  const fields = properties && Array.isArray(properties)
    ? properties.map(p => `"${p}"`).join()
    : (properties && properties[formID].map(p => `"${p}"`).join()) || null;

  const queryParams = fields && { fields: `[${fields}]` };
  const xobj = new XMLHttpRequest();
  const mimeType = 'application/json';
  const activeHost = apiHost || host;
  const path = `${protocol}://${activeHost}/${endpoint}/${formID}.json${formatParams(queryParams)}`;

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
