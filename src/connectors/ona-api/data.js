const protocol = 'https';
const host = 'api.ona.io';
const endpoint = 'api/v1/data';


function formatParams(params) {
  if (!params) {
    return '';
  }
  /** Build endpoint params */
  const paramsList = Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`);
  return `?${paramsList.join('&')}`;
}
/** Method getData make's call to api takes in:
 * formID - the form id to pull data from.
 *
 */
export default async function getData(formID, properties, state, callback) {
  const { apiAccessToken, apiHost } = state;
  const fields = properties && Array.isArray(properties)
    ? properties.map(p => `"${p}"`).join()
    : (properties && properties[formID].map(p => `"${p}"`).join()) || null;
  const queryParams = fields && { fields: `[${fields}]` };
  const mimeType = 'application/json';
  const activeHost = apiHost || host;
  const path = `${protocol}://${activeHost}/${endpoint}/${formID}.json${formatParams(queryParams)}`;

  const response = await fetch(path, {
    method: 'GET',
    headers: {
      Accept: mimeType,
      Authorization: `Token ${apiAccessToken}`,
    },
  });
  if (!response.ok) {
    throw new Error(`form api failed, HTTP status ${response.status}`);
  }
  const data = await response.json();
  if (data) {
    callback(null, data);
  } else {
    throw new Error('form api failed, data not returned');
  }
}
