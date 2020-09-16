/* eslint-disable no-param-reassign, prefer-destructuring */

import memoize from 'memoize-one';

/**
 * Modify a group by giving its group and nested groups a count (or ID)
 * This will make sure when we toggle a group, another group with the
 * exact same name is not toggled. The array of open groups is stored as an
 * array of group names in the store. Another implementaion would to give each group a random number but
 * this means different menu instances will have groups that have different Ids which we do not
 * want (We would like menu instances under the same map ID to behave the same. If say I open a group in one
 * menu, it should appear open in another other). A contigous int counter is
 * therefore used to ensure the counter for a group in different menu instances is the same,
 * and also, groups in the same menu instances do not share a count.
 * @param {Object} layer Category layer
 * @param {number} groupCounter Group counter (or ID) that will give each group a number
 * @returns {Object} Modified layer and current group counter increment
 */
export const insertGroupCount = (layer, groupCounter) => {
  Object.keys(layer).forEach(key => {
    layer[key].count = groupCounter;
    groupCounter += 1;

    layer[key].layers.forEach(keyLayer => {
      if (!keyLayer.id) {
        // Layer has no id so this is a group
        keyLayer = insertGroupCount(keyLayer, groupCounter);
      }
    });
  });

  return {
    layer,
    groupCounter,
  };
};

/**
 * Generic function to modify categories. If you need to modify/extend categories,
 * do it here
 * @param {array} categories Menu categories and their subgroups and layers
 * @returns {array} Extended/Modified categories
 */
export const parseCategories = memoize(categories => {
  let groupCounter = 0;
  categories.forEach(category => {
    category.layers.forEach(layer => {
      if (!layer.id) {
        // Layer has no id, so it's a group, give it a count (or an ID)
        const obj = insertGroupCount(layer, groupCounter);
        layer = obj.layer;
        groupCounter = obj.groupCounter;
      }
    });
  });

  return categories;
});

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
