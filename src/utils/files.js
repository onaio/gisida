export function loadJSON(filename, callback) {
  const path = `${filename}.json`;
  const xobj = new XMLHttpRequest();
  
  xobj.overrideMimeType('application/json');
  xobj.open('GET', path, true); 
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    } 
  };
  xobj.send(null);
}

export function loadCSV(filename, callback) {
  const path = `${filename}.csv`;
  const xobj = new XMLHttpRequest();

  xobj.overrideMimeType('application/json');
  xobj.open('GET', path, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}
