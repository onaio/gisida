export default function commaFormatting(layerObj, data, popup) {
  const str = popup
    ? layerObj.popup && layerObj.popup.body
    : layerObj.labels && layerObj.labels.label;
  const dataItem = data;
  const found = [];
  const rxp = /{{([^}]+)}/g;

  for (let c = rxp.exec(str); c !== null; c = rxp.exec(str)) {
    found.push(c[1]);
  }

  found.forEach((f) => {
    if (!Number.isNaN(dataItem[`${f}`])) {
      const val = Number(dataItem[`${f}`]);
      if (Number.isInteger(val)) {
        dataItem[`${f}`] = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
    }
  });
  return dataItem;
}
