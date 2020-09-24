import STYLES from '../styles';
import defaultState from '../../defaultState';
import { INIT_STYLES, CHANGE_STYLE } from '../../constants/actionTypes';
import { mapId } from './common';

describe('STYLES', () => {
  const style1 = {
    label: 'Satelitte',
    url: 'mapbox://styles/mapbox/satellite-v9',
  };
  const style2 = {
    label: 'Satelitte Streets',
    url: 'mapbox://styles/mapbox/satellite-streets-v9',
  };
  const style3 = {
    label: 'Satelitte Mountains',
    url: 'mapbox://styles/mapbox/satellite-mountains-v9',
  };

  it('should return the initial state', () => {
    expect(STYLES(undefined, {})).toEqual(defaultState.STYLES);
  });

  it('should handle INIT_STYLES', () => {
    const action = {
      type: INIT_STYLES,
      styles: [style1, style2],
      mapConfig: {
        container: 'map',
        style: '',
        center: [0, 0],
        zoom: 5,
      },
    };

    // Case 1: The state obj is empty
    const stateEmpty = [];

    // Case 1.1 Mapconfig style does not match style in array of styles
    const expectedStyles = action.styles.map(s => {
      const style = s;
      if (style.url === action.mapConfig.style) style.current = true;
      return style;
    });

    expect(expectedStyles[0].current === undefined);
    expect(expectedStyles[1].current === undefined);
    expect(STYLES(stateEmpty, action)).toEqual(expectedStyles);

    // Case 1.2 action.mapConfig.style matches style in the array of styles
    const actionMatchExists = {
      ...action,
      mapConfig: {
        ...action.mapConfig,
        style: style1.url,
      },
    };
    const expectedStylesMatchExists = actionMatchExists.styles.map(s => {
      const style = s;
      if (style.url === actionMatchExists.mapConfig.style) style.current = true;
      return style;
    });

    expect(expectedStylesMatchExists[0].current === true);
    expect(expectedStylesMatchExists[1].current === undefined);
    expect(STYLES(stateEmpty, actionMatchExists)).toEqual(expectedStylesMatchExists);

    // Case 2: The state obj is not empty
    const stateOld = [style1, style2];

    // Case 2.1 Mapconfig style does not match style in array of styles
    expect(STYLES(stateOld, action)).toEqual(expectedStyles);

    // Case 2.2 Mapconfig style matches style in array of styles
    expect(STYLES(stateOld, actionMatchExists)).toEqual(expectedStylesMatchExists);
  });

  it('should handle CHANGE_STYLE', () => {
    const action = {
      type: CHANGE_STYLE,
      style: style1.url,
      mapId,
    };
    const actionMapIdUndefined = {
      ...action,
      mapId: undefined,
    };

    // Case 1: The state obj is empty
    const stateEmpty = [];
    expect(STYLES(stateEmpty, action)).toEqual([]);

    // Case 2: The state obj is not empty
    // Case 2.1: action.style matches style in state
    const stateOldMatchExists = [style1, style2, style3];

    // Case 2.1.1: mapId is defined in action
    expect(STYLES(stateOldMatchExists, action)).toEqual([
      {
        ...style1,
        [mapId]: {
          current: true,
        },
      },
      style2,
      style3,
    ]);

    // Case 2.1.2: mapId is not defined in action
    expect(STYLES(stateOldMatchExists, actionMapIdUndefined)).toEqual([
      {
        ...style1,
        current: true,
      },
      style2,
      style3,
    ]);

    // Case 2.2: action.style does not match style in state
    const stateOldNoMatch = [style2, style3];

    // Case 2.2.1: mapId is defined in action
    expect(STYLES(stateOldNoMatch, action)).toEqual([
      {
        ...style2,
        [mapId]: {
          current: false,
        },
      },
      {
        ...style3,
        [mapId]: {
          current: false,
        },
      },
    ]);

    // Case 2.2.2: mapId is not defined in action
    expect(STYLES(stateOldNoMatch, actionMapIdUndefined)).toEqual([
      {
        ...style2,
        current: false,
      },
      {
        ...style3,
        current: false,
      },
    ]);
  });
});
