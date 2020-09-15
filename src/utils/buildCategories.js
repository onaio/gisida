/**
 * Build gisida-react menu categories
 * @param {Object} LAYERS Holds layers and groups
 * @param {Object} MAP Map object
 */
export default function buildCategories(LAYERS, MAP) {
  if (Object.keys(LAYERS.groups).length) {
    const groupMapper = (layer, group) => {
      if (typeof layer === 'string') {
        const { id, category, label } = MAP.layers[layer];
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
    return Object.keys(LAYERS.groups).map(group => {
      return {
        category: group,
        layers: LAYERS.groups[group]
          .map(groupObjects => groupMapper(groupObjects, group))
          .filter(l => typeof l !== 'undefined'),
      };
    });
  } else if (Object.keys(MAP.layers).length) {
    let categories = {};
    let category;

    Object.keys(MAP.layers).forEach(l => {
      if (MAP.layers[l].category) {
        // eslint-disable-next-line prefer-destructuring
        category = MAP.layers[l].category;
        if (!categories[category]) {
          categories[category] = {
            category,
            layers: [],
          };
        }

        categories[category].layers.push({
          label: MAP.layers[l].label,
          category: MAP.layers[l].category,
          id: MAP.layers[l].id,
        });
      }
    });
    categories = Object.keys(categories).map(c => categories[c]);
    return categories;
  }
  return true;
}
