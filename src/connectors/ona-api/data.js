const protocol = 'https';
const host = 'api.ona.io';
const endpoint = 'api/v1/data';

export function formatParams(params) {
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
export default function getData(formID, properties, state, callback) {
  const { apiAccessToken, apiHost } = state;
  const fields =
    properties && Array.isArray(properties)
      ? properties.map(property => `"${property}"`).join()
      : (properties && properties[formID].map(property => `"${property}"`).join()) || null;
  const queryParams = fields && { fields: `[${fields}]` };
  const mimeType = 'application/json';
  const activeHost = apiHost || host;
  const path = `${protocol}://${activeHost}/${endpoint}/${formID}.json${formatParams(queryParams)}`;

  try {
    fetch(path, {
      method: 'GET',
      headers: {
        'content-type': mimeType,
        Authorization: `Token ${apiAccessToken}`,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        throw new Error(res.text);
      })
      .then((data) => {
        callback(null, data);
      });
  } catch (e) {
    callback(e);
  }
}
