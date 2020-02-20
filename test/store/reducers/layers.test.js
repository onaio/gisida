import { LAYERS } from '../../../src/store/reducers';
import defaultState from '../../../src/store/defaultState';
import { ADD_LAYERS_LIST, ADD_LAYER_GROUP } from '../../../src/store/constants/actionTypes';
import { mapId } from './common';

describe('LAYERS', () => {
  const stateEmpty = {};
  const stateOld = {
    layers: [
      {
        id: 'contours',
        type: 'line',
        source: 'contours',
        'source-layer': 'contour',
        layout: {
          visibility: 'visible',
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#877b59',
          'line-width': 1,
        },
      },
    ],
    groups: {
      group2: ['E3', 'E4', 'E5'],
    },
  };

  it('should return the initial state', () => {
    expect(LAYERS(undefined, {})).toEqual(defaultState.LAYERS);
  });

  it('should handle ADD_LAYERS_LIST', () => {
    const action = {
      type: ADD_LAYERS_LIST,
      layers: [
        {
          id: 'rivers',
          source: 'my-source',
          'source-layer': 'waterway',
          type: 'line',
          paint: {
            'line-color': '#FFC0CB',
          },
        },
        {
          id: 'museums',
          type: 'circle',
          source: 'museums',
          layout: {
            visibility: 'visible',
          },
          paint: {
            'circle-radius': 8,
            'circle-color': 'rgba(55,148,179,1)',
          },
          'source-layer': 'museum-cusco',
        },
      ],
      groups: {
        group1: ['E1', 'E2'],
        group2: ['E3', 'E4', 'E5'],
      },
    };

    // Case 1: The state obj is empty
    expect(() => {
      LAYERS(stateEmpty, action);
    }).toThrow(TypeError);

    // Case 2: The state obj is not empty
    expect(LAYERS(stateOld, action)).toEqual({
      ...stateOld,
      layers: [...stateOld.layers, ...action.layers],
    });
  });

  it('should handle ADD_LAYER_GROUP', () => {
    const groupId = 'group-id';
    const group = ['E1', 'E2'];
    const action = {
      type: ADD_LAYER_GROUP,
      mapId,
      groupId,
      group,
    };
    const actionHttpSubstring = {
      ...action,
      group: [...group, 'http://example.com/E3'],
    };
    const actionLayerObj = {
      ...action,
      group: [
        ...group,
        'http://example.com/E3',
        {
          layer1: ['E4', 'E5'],
        },
      ],
    };

    // Case 1: The state obj is empty
    // Case 1.1: action.group has layer of type string
    // Case 1.1.1: action.group has a layer without a 'http' substring
    expect(LAYERS(stateEmpty, action)).toEqual({
      groups: {
        [action.groupId]: action.group,
      },
    });

    // Case 1.1.2: action.group has a layer with a http substring
    expect(LAYERS(stateEmpty, actionHttpSubstring)).toEqual({
      groups: {
        [action.groupId]: [actionHttpSubstring.group[0], actionHttpSubstring.group[1], 'E3'],
      },
    });

    // Case 1.2 action.group has a layer of type object
    expect(LAYERS(stateEmpty, actionLayerObj)).toEqual({
      groups: {
        [action.groupId]: [
          actionLayerObj.group[0],
          actionLayerObj.group[1],
          'E3',
          {
            layer1: ['E4', 'E5'],
          },
        ],
      },
    });

    // Case 2: The state obj is not empty
    // Case 2.1: action.group has layer of type string
    // Case 2.1.1 action.group has a layer without a 'http' substring
    expect(LAYERS(stateOld, action)).toEqual({
      ...stateOld,
      groups: {
        ...stateOld.groups,
        [action.groupId]: action.group,
      },
    });

    // Case 2.1.2: action.group has a layer with a http substring
    expect(LAYERS(stateOld, actionHttpSubstring)).toEqual({
      ...stateOld,
      groups: {
        ...stateOld.groups,
        [action.groupId]: [actionHttpSubstring.group[0], actionHttpSubstring.group[1], 'E3'],
      },
    });

    // Case 2.2: action.group has a layer of type object
    expect(LAYERS(stateOld, actionLayerObj)).toEqual({
      ...stateOld,
      groups: {
        ...stateOld.groups,
        [action.groupId]: [
          actionLayerObj.group[0],
          actionLayerObj.group[1],
          'E3',
          {
            layer1: ['E4', 'E5'],
          },
        ],
      },
    });
  });
});
