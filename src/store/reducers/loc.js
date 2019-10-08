import defaultState from '../defaultState';
import * as types from '../constants/actionTypes';

export default function LOC(state = defaultState.LOC, action) {
  switch (action.type) {
    case types.INIT_LOC:
      return {
        ...state,
        locations: { ...action.config },
        location: {
          ...Object.keys(action.config)
            .map(d => action.config[d])
            .find(d => d.default === true),
          doUpdateLOC: false,
        },
        doUpdateMap: state.doUpdateMap,
        default: Object.keys(action.config).find(d => action.config[d].default === true),
        active: Object.keys(action.config).find(d => action.config[d].default === true),
      };
    case types.SET_LOCATION: {
      const { loc, mapId } = action;
      const { active, locations } = state;
      return {
        ...state,
        doUpdateMap: mapId,
        active: typeof locations[loc] !== 'undefined' ? loc : active,
        location:
          typeof locations[loc] !== 'undefined'
            ? { ...locations[loc], doUpdateLOC: !state.location.doUpdateLOC }
            : { ...state.location, doUpdateLOC: false },
      };
    }
    case types.TOGGLE_MAP_LOCATION: {
      const { loc } = action;
      const { locations } = state;
      return {
        ...state,
        location:
          typeof locations[loc] !== 'undefined'
            ? { ...locations[loc], doUpdateLOC: !state.location.doUpdateLOC }
            : { ...state.location, doUpdateLOC: false },
      };
    }
    default:
      return state;
  }
}
