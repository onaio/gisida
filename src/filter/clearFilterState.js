import { saveFilterState } from '../store/actions/actions';

export default function clearFilterState(filterOptions, layerId, dispatch) {
  dispatch(saveFilterState(layerId, { filterOptions, isFiltered: false }));
}
