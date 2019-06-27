import { parse } from 'papaparse';

export function parseCSV(text, config) {
  return (parse(text, (config || {
    header: true,
    skipEmptyLines: true,
  })).data);
}

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

export async function fetchJSON(path) {
  return fetch(path).then(res => res.json());
}

export async function fetchCSV(path, Init) {
  const init = (Init && { ...Init }) || {};
  if (!init.headers) {
    init.headers = new Headers();
  }
  if (!init.headers.has('Content-Type')) {
    init.headers.append('Content-Type', 'text/csv');
  }
  if (!init.headers.has('Access-Control-Allow-Origin')) {
    init.headers.append('Access-Control-Allow-Origin', '*');
  }
  return fetch(path, init)
    .then(res => res.text())
    .then(res => parse(res, {
      header: true,
      skipEmptyLines: true,
    }))
    .then(res => res.data);
}

export function loadCSV(path, callback) {
  fetchURL(path, 'text/csv', (response) => {
    callback(parse(response, {
      header: true,
      skipEmptyLines: true,
    }).data);
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
