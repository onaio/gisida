import * as d3 from 'd3';

function convertData(data) {
  const googleSheetsData = data.feed.entry;
  const convertedData = [];
  for (let i = 0; i < googleSheetsData.length; i += 1) {
    const rowArr = googleSheetsData[i].content.$t.split(/, (?=[^,]+:)/);
    const row = rowArr.reduce((obj, item) => {
      const parts = item.split(': ');
      obj[parts[0]] = parts[1];
      return obj;
    }, {});
    convertedData.push(row);
  }
  return convertedData;
}
export default function (url, callback) {
  let q = d3.queue();
  q = q.defer(d3.request, url);
  q.awaitAll((error, response) => {
    if (response) {
      const convertedData = convertData(JSON.parse(response[0].response));
      callback(convertedData);
    }
  });
}
