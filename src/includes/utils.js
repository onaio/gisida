import Cookie from 'js-cookie';
// import * as d3 from 'd3';

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

// export const flattenObj = function flattenObj(obj) {
//   const result = Object.keys(obj).reduce((r, k) =>
//     r.concat(k, obj[k])
//     , []);

//   return result;
// };

export const flattenObj = function flattenObject(obj) {
  // Returns array with all keys and values of an object
  const array = [];
  $.each(obj, (key, value) => {
    array.push(key);
    if ($.isArray(value)) {
      Array.prototype.push.apply(array, value);
    } else {
      array.push(value);
    }
  });

  return array;
};

export function getDuplicateIndices(arr, item) {
  const indices = [];

  arr.filter((row, index) => {
    if (row === item) {
      indices.push(index);
    }
    return null;
  });
  return indices;
}
