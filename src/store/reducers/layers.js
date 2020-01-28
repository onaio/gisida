import defaultState from '../defaultState';
import { ADD_LAYERS_LIST, ADD_LAYER_GROUP } from '../constants/actionTypes';

export default function LAYERS(state = defaultState.LAYERS, action) {
  switch (action.type) {
    case ADD_LAYERS_LIST: {
      return {
        ...state,
        layers: [...state.layers, ...action.layers],
      };
    }
    case ADD_LAYER_GROUP: {
      // parse action.group for urls
      const groupMapper = (layer) => {
        if (typeof layer === 'string') {
          if (layer.indexOf('http') === -1) {
            return layer;
          }
          const pathSplit = layer.split('/');
          return pathSplit[pathSplit.length - 1];
        }
        const subGroup = {};
        Object.keys(layer).forEach((key) => {
          subGroup[key] = layer[key].map(groupMapper);
        });
        return subGroup;
      };
      const group = action.group.map(groupMapper);
      return {
        ...state,
        groups: {
          ...state.groups,
          [action.groupId]: group,
        },
      };
    }
    default:
      return state;
  }
}
