import * as d3 from 'd3';

function convertData(data) {
  const googleSheetsData = data.feed.entry;
  const convertedData = [];
  for (let i = 0; i < googleSheetsData.length; i += 1) {
    const rowArr = googleSheetsData[i].content.$t.split(', ');
    const row = rowArr.reduce(function (obj, item) {
      const parts = item.split(': ');
      obj[parts[0]] = parts[1];
      return obj;
    }, {});
    convertedData.push(row);
  }
  return convertedData;
}
export default function (callback) {
  const url = 'https://spreadsheets.google.com/feeds/list/1fVdPJMpe5tAiGp6yg2bg1J34L4kGdyT-nW_-oGmP1EQ/1/public/basic?alt=json';
  let q = d3.queue();
  q = q.defer(d3.request, url);
  q.awaitAll((error, response) => {
    if (error) {
      console.log(error);
    } else {
      const convertedData = convertData(JSON.parse(response[0].response));
      callback(convertedData);
    }
  });
}
