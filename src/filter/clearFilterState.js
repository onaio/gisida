import { saveFilterState } from '../store/actions/actions';

export default function clearFilterState(mapId, filterState, layerId, dispatch, isClear) {
  dispatch(saveFilterState(mapId, layerId, filterState, isClear));
}
