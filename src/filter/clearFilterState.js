import { saveFilterState } from '../store/actions/actions';

export default function clearFilterState(filterState, layerId, dispatch) {
  dispatch(saveFilterState(layerId, filterState));
}
