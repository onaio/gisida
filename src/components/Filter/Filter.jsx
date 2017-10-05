import React from 'react';
import PropTypes from 'prop-types';
import { getDuplicateIndices } from '../../includes/utils';

const Filter = ({ filter,
  view,
  headers,
  sector,
  filters,
  onToggleView,
  checked,
  currentView,
  onFilterSelect = f => f }) =>
  (headers !== undefined && headers.includes(filter)
  && getDuplicateIndices(filters, filter).length === 1 ?
    (<li className={'filter'}>
      <b>{filter}</b>
    </li>) :
    view ?
      (<li className={'filter'}>
        <input
          type="radio"
          id={view}
          name="switch-view"
          value={view}
          checked={view.toLowerCase() === currentView}
          onClick={e => onToggleView(e.target.value.toLowerCase())}
        />
        <label htmlFor={view}>{view}</label>
      </li>) :
      (<li className={'filter'}>
        <input
          type="radio"
          id={sector}
          value={filter}
          name={sector}
          checked={checked.includes(filter)}
          onClick={e => onFilterSelect(sector, filter, e.target.checked, headers)}
        />
        <label htmlFor={filter}>
          {getDuplicateIndices(filters, filter).length > 1 ? <b>{filter}</b> : filter}
        </label>
      </li>));

Filter.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.any),
  filters: PropTypes.arrayOf(PropTypes.any),
  filter: PropTypes.string,
  view: PropTypes.string,
  onToggleView: PropTypes.func,
  sector: PropTypes.string,
  checked: PropTypes.arrayOf(PropTypes.any),
  currentView: PropTypes.string,
  onFilterSelect: PropTypes.func,
};

Filter.defaultProps = {
  headers: [],
  filters: null,
  filter: null,
  view: null,
  onToggleView: null,
  sector: null,
  checked: null,
  currentView: null,
  onFilterSelect: null,
};

export default Filter;
