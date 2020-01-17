export default function commaFormatting(layerObj, data, popup) {
  const str = popup
    ? layerObj.popup && layerObj.popup.body
    : layerObj.labels && layerObj.labels.label;
  const dataItem = data;
  const found = [];
  const rxp = /{{([^}]+)}/g;
  let foundZero = false;
  const showZeros = layerObj.labels.showZeros || true;

  for (let c = rxp.exec(str); c !== null; c = rxp.exec(str)) {
    found.push(c[1]);
  }

  let i = 0;
  while (!foundZero && i < found.length) {
    if (!Number.isNaN(dataItem[`${found[i]}`])) {
      const val = Number(dataItem[`${found[i]}`]);
      if (Number.isInteger(val)) {
        if (!val && !showZeros) {
          foundZero = true;
        } else {
          dataItem[`${found[i]}`] = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
      }
    }

    i += 1;
  }
  // If value is a zero and the layer does not permit showing
  // zero values, return null
  if (foundZero) {
    return null;
  }

  return dataItem;
}
