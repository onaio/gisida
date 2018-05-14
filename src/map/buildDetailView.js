import parseMustache from '../utils/parseMustache';
import { detailView, getCurrentState } from '../store/actions/actions';

const parseDetailValue = (spec, datum) => {
  // 1) protect against empty strings, nulls, and undefineds
  if (!spec) return false;

  // 2) if single property then just get it from the datum
  if (typeof spec === 'string' && datum[spec]) {
    return datum[spec];
  // 3) if single property but it's undefined as datum prop, return false
  } else if (typeof spec === 'string' && !datum[spec]) {
    return false;
  }

  // 4) if prop is an object with mustache, render it to a html string
  if (spec.prop && datum[spec.prop] && spec.mustache) {
    return parseMustache(spec.mustache, datum);
  }

  // 5) if prop is a list and join is secified, create a list string
  if (Array.isArray(spec.prop) && spec.join) {
    const value = [];
    spec.prop.forEach((s) => {
      const d = (typeof s === 'string' && datum[s])
        ? datum[s]
        : parseDetailValue(s, datum);
      if (d) value.push(d);
    });
    return value.length ? value.join(spec.join) : false;
  }

  // 6) if array of props has no join value, reduce and return the first passing prop
  if (Array.isArray(spec.prop)) {
    for (let p = 0; p < spec.prop.length; p += 1) {
      if (datum[spec.prop[p]] || datum[spec.prop[p].prop]) {
        return parseDetailValue(spec.prop[p], datum);
      }
    }
  }

  // 7) if all else fails, return false
  return false;
};

const parseDetailAlt = (spec, datum) => {
  // 1) if icon is a simple string, return it
  if (typeof spec === 'string') {
    return spec;
  }

  // 2) if prop is an object with mustache, render it to a html string
  if (spec.prop && datum[spec.prop] && spec.mustache) {
    return parseMustache(spec.mustache, datum);
  }

  // 3) if all else fails, return false
  return false;
};

const parseDetailIcon = (spec, datum) => {
  // 1) if icon is a simple string, return it
  if (typeof spec === 'string') {
    return spec;
  }

  // 2) if icon is an options object, parse and return
  if (spec.prop && datum[spec.prop] && spec[datum[spec.prop]]) {
    return {
      icon: spec[datum[spec.prop]].glyph,
      color: spec[datum[spec.prop]].color || false,
      alt: spec[datum[spec.prop]].alt
        ? parseDetailAlt(spec[datum[spec.prop]].alt, datum)
        : false,
    };
  }

  // 3) if all else fails, return false
  return false;
};

const buildParsedBasicDetailItem = (detail, properties) => {
  let icon;
  let iconColor;
  let alt;

  // 1) Parse list item innerHTML (text) from prop(s)
  const value = parseDetailValue(detail.value, properties);
  if (!value) return false;

  // 2) Parse glyphicon from icon (options); Note: this doesn't work with multiple props
  icon = parseDetailIcon(detail.icon, properties);
  if (icon instanceof Object) {
    // eslint-disable-next-line prefer-destructuring
    alt = icon.alt;
    iconColor = icon.color;
    // eslint-disable-next-line prefer-destructuring
    icon = icon.icon;
  }
  if (!icon) return false;

  // 3) Parse text for databallon
  if (!alt && detail.alt) {
    alt = parseDetailAlt(detail.alt, properties);
  }

  return {
    value, icon, iconColor, alt,
  };
};

export default (mapId, LayerObj, FeatureProperties, dispatch) => {
  if (!LayerObj && !FeatureProperties) {
    dispatch(detailView(mapId, null));
    return false;
  }

  const layerObj = { ...LayerObj };
  let featureProperties = { ...FeatureProperties };
  // todo pass data through Aggregated Data functionality to find in layerObj.Data

  const currentState = dispatch(getCurrentState());
  // check for timeseries data, otherwise use merged data
  const featureData = (currentState[mapId].timeseries[layerObj.id]
    && currentState[mapId].timeseries[layerObj.id].data)
    || layerObj.mergedData.features || layerObj.mergedData;
  // find data from timeseries data or mergedData
  const featureDatum = featureData.find(d =>
    d[layerObj.source.join[1]] === featureProperties[layerObj.source.join[0]]);

  if (featureDatum) {
    featureProperties = {
      ...featureProperties,
      ...featureDatum,
    };
  }
  const {
    UID, title, 'sub-title': subTitle, 'basic-info': basicInfo,
  } = layerObj['detail-view'];

  if (!UID) return false;

  const detailViewModel = {
    UID: featureProperties[UID],
    title: featureProperties[title.prop], // todo - add mustache support
    subTitle: featureProperties[subTitle.prop], // todo - add mustache support
    basicInfo,
    parsedBasicInfo: [],
  };

  if (layerObj.joinedData && layerObj.joinedData[featureProperties[UID]]) {
    detailViewModel.joinedDatum = { ...layerObj.joinedData[featureProperties[UID]] };
  }

  let parsedDetail;
  if (basicInfo) {
    for (let i = 0; i < basicInfo.length; i += 1) {
      parsedDetail = buildParsedBasicDetailItem(basicInfo[i], featureProperties);
      if (parsedDetail) detailViewModel.parsedBasicInfo.push(parsedDetail);
    }
  }
  const payload = {
    model: detailViewModel,
    layerId: layerObj.id,
    properties: featureProperties,
    detailSpec: layerObj['detail-view'],
  };

  dispatch(detailView(mapId, payload));
  return true;
};
