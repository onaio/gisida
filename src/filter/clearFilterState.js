import { saveFilterState } from '../store/actions/actions';

export default function clearFilterState(mapId, filterState, layerId, dispatch) {
  dispatch(saveFilterState(mapId, layerId, filterState));
}
