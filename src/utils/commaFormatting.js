const Joi = require('@hapi/joi');

/**
 *
 * @param {Object} layerObj layer specification/config object
 * @param {Object} data data to be formatted a label/popup
 * @param {boolean} popup flag to indicate if call is coming from popup or not
 */
export default function commaFormatting(layerObj, data, popup) {
  const joiSchema = Joi.object({
    dataMap: Joi.object()
      .required()
      .messages({
        'object.base': `"a" should be a type of 'object'`,
        'any.required': `"a" is a required field`,
      }),
    popupFlag: Joi.boolean()
      .required()
      .messages({
        'boolean.base': `"a" should be a type of 'boolean'`,
        'any.required': `"a" is a required field`,
      }),
  });

  const validationResult = joiSchema.validate(
    { dataMap: {}, popupFlag: false },
    { abortEarly: false }
  );
  if (validationResult.error) {
    alert(validationResult.error);
  }

  const str = popup
    ? layerObj.popup && layerObj.popup.body
    : layerObj.labels && layerObj.labels.label;
  const dataItem = data;
  const found = [];
  const rxp = /{{([^}]+)}/g;
  let foundZero = false;
  // Get flags to show/hide zero values on labels and popup
  const showZerosOnLabels =
    layerObj.labels && layerObj.labels.showZeros !== undefined ? layerObj.labels.showZeros : true;

  for (let c = rxp.exec(str); c !== null; c = rxp.exec(str)) {
    found.push(c[1]);
  }

  let i = 0;
  while (!foundZero && i < found.length) {
    if (!Number.isNaN(dataItem[`${found[i]}`])) {
      const val = Number(dataItem[`${found[i]}`]);
      /**  */
      if (Number.isInteger(val)) {
        /**
         * If val=0 and showzeroOnLabels if false and the call isn't made from addPopus then
         * return null else return dataitem
         */
        if (!val && !showZerosOnLabels && !popup) {
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
