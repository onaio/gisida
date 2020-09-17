/**
 * Build gisida-react menu categories
 * @param {Object} LAYERS Holds layers and groups
 * @param {Object} MAP Map object
 */
export default function buildCategories(groups, mapLayers) {
  if (Object.keys(groups).length) {
    const groupMapper = (layer, group) => {
      if (typeof layer === 'string') {
        if (!mapLayers[layer]) return undefined;

        const { id, category, label } = mapLayers[layer];
        return {
          id,
          category,
          label,
        };
      }
      const subGroup = {};
      Object.keys(layer).forEach(l => {
        subGroup[l] = {
          category: l,
          layers: layer[l]
            .map(groupObjects => groupMapper(groupObjects, l))
            .filter(g => typeof g !== 'undefined'),
          parent: group,
        };
      });
      return subGroup;
    };
    // build list of LAYERS.categories populated with layers from MAP.layers
    return Object.keys(groups).map(group => {
      return {
        category: group,
        layers: groups[group]
          .map(groupObjects => groupMapper(groupObjects, group))
          .filter(l => typeof l !== 'undefined'),
      };
    });
  } else if (Object.keys(mapLayers).length) {
    let categories = {};
    let category;

    Object.keys(mapLayers).forEach(l => {
      if (mapLayers[l].category) {
        // eslint-disable-next-line prefer-destructuring
        category = mapLayers[l].category;
        if (!categories[category]) {
          categories[category] = {
            category,
            layers: [],
          };
        }

        categories[category].layers.push({
          label: mapLayers[l].label,
          category: mapLayers[l].category,
          id: mapLayers[l].id,
        });
      }
    });
    categories = Object.keys(categories).map(c => categories[c]);
    return categories;
  }
  return true;
}
