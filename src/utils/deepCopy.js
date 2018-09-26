export default function deepCopy(x) {
  return JSON.parse(JSON.stringify(x));
}


// function cloneArray(arr) {
//   const clone = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (typeof arr[i] === 'object') {
//       clone.push(deepCopy(arr[i]));
//     } else {
//       clone.push(arr[i]);
//     }
//   }
//   return clone;
// }

// function cloneObject(obj) {
//   if (!obj) return obj;
//   const clone = {};
//   const cloneKeys = Object.keys(obj);
//   let key;
//   for (let i = 0; i < cloneKeys.length; i += 1) {
//     key = cloneKeys[i];
//     if (obj[key] != null && typeof obj[key] === 'object') {
//       clone[key] = deepCopy(obj[key]);
//     } else {
//       clone[key] = obj[key];
//     }
//   }
//   return clone;
// }

// export default function deepCopy(x) {
//   if (Array.isArray(x)) {
//     return cloneArray(x);
//   } else if (typeof x === 'object') {
//     return cloneObject(x);
//   }
//   return x;
// }
