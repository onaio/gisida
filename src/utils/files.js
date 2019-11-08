import { parse } from 'papaparse';

function fetchURL(path, mimeType, callback) {
  const xobj = new XMLHttpRequest();
  xobj.overrideMimeType(mimeType);
  xobj.open('GET', path, true);
  xobj.onreadystatechange = () => {
    if (xobj.readyState === 4 && xobj.status === 200) {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

export function loadJSON(path, callback, id) {
  fetchURL(path, 'application/json', (response) => {
    callback(JSON.parse(response), id);
  });
}

export function loadCSV(path, callback) {
  fetchURL(path, 'text/csv', (response) => {
    callback(parse(response, {
      header: true,
      skipEmptyLines: true,
    }).data);
  });
}

export function loadSiteConfigJSON(path, callback, id) {
  fetchURL(path, 'application/json', (response) => {
    const siteConfig = JSON.parse(response);
    const mapConfig = siteConfig.APP.mapConfig;
    const { center, zoom, countryName, countriesUrl } = mapConfig
    if (center && zoom) {
      callback(siteConfig, id);
    }
    else {

      if (!countryName || !countriesUrl) {
        throw "countryName and countriesUrl or center and zoom must be provided in the site-config.json file";
      }
      fetch(countriesUrl).then(res => res.json()).then(data => {
        const countryConfig = data.find(item => item.Country===countryName);
        if (!countryConfig) {throw `${countryName} was not found in this list ${countriesUrl} of countries`};
        if (!zoom) {siteConfig.APP.mapConfig.zoom = parseFloat(countryConfig.zoom_level)};
        siteConfig.APP.mapConfig.center = {
          lat:countryConfig._geolocation[0],
          lng:countryConfig._geolocation[1]
        };
        callback(siteConfig, id);
      })
    }
  });
}

export function isNumber(value) {
  return !Number.isNaN(parseFloat(value));
}

export function comparator(a, b) {
  if (a.date) {
    return Date.parse(a.date) - Date.parse(b.date);
  }
  if (a[0] < b[0]) return -1;
  if (a[0] > b[0]) return 1;
  if (a[1] < b[1]) return -1;
  if (a[1] > b[1]) return 1;
  if (a[2] < b[2]) return -1;
  if (a[2] > b[2]) return 1;
  return 0;
}
