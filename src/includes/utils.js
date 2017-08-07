import Cookie from 'js-cookie';
import * as d3 from 'd3';

export function formatNum(num, decimal) {
  let x = (`${num}`).length;
  if (Number.isInteger(num) && x > 3) {
    const pow = 10 ** decimal;
    x -= x % 3;
    return Math.round(num * pow / (10 ** x)) / pow + ' kMGTPE'[x / 3];
  }
  return num;
}

export function getLastIndex(arr, item) {
  const indices = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === item) { indices.push(i); }
  }
  return indices[indices.length - 1];
}

export const isLoggedIn = function isLoggedIn() {
  return Cookie.get('dsauth') === 'true';
};

// export function readData(layerProp, source) {
//   let layer = layerProp;
//   const fileType = source.split('.').pop();
//   if (fileType === 'csv') {
//     d3.csv(layer.source.data, (data) => {
//       layer.source.data = data;
//     });
//   }
//   if (fileType === 'geojson') {
//     d3.json(layer.source.data, (data) => {
//       layer.source.data = data;
//     });
//   }

//   return layer;
// }
