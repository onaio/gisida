import { saveFilterState } from '../store/actions/actions';

export default function clearFilterState(filterOptions, aggregate, layerId, dispatch) {
  const filterState = {
    filterOptions,
    aggregate,
    isFiltered: false,
  };
  dispatch(saveFilterState(layerId, filterState));
}
