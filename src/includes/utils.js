export function formatNum(num, decimal) {
  let x = ('' + num).length;
  if (Number.isInteger(num) && x > 3) {
    let p = Math.pow;
    decimal = p(10, decimal);
    x -= x % 3
    return Math.round(num * decimal / p(10, x)) / decimal + " kMGTPE"[x / 3]
  } else {
    return num;
  }
}

export function getLastIndex (arr, item) {
  var indices = [], i;
  for (i = 0; i < arr.length; i++)
    if (arr[i] === item)
      indices.push(i);
  return indices[indices.length - 1];
}
