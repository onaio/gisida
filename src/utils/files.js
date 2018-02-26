import { parse } from 'papaparse';

function fetchURL(path, mimeType, callback) {
  const xobj = new XMLHttpRequest();
  xobj.overrideMimeType(mimeType);
  xobj.open('GET', path, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState === 4 && xobj.status === 200) {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

export function loadJSON(path, callback) {
  fetchURL(path, 'application/json', (response) => {
    try {
      callback(JSON.parse(response));
    } catch (e) {
      console.error(`Error loading ${path} (${e})`);
    }
  });
}

export function loadCSV(path, callback) {
  fetchURL(path, 'text/csv', (response) => {
    try {
      callback(parse(response, {
        header: true,
        skipEmptyLines: true,
      }).data);
    } catch (e) {
      console.error(`Error loading ${path} (${e})`);
    }
  });
}

export function isNumber(value) {
  return !Number.isNaN(parseFloat(value));
}
