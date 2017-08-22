import React from 'react';
import PropTypes from 'prop-types';

require('./Filter.scss');

const Filter = ({ filter,
  view,
  headers,
  sector,
  onToggleView,
  checked,
  currentView,
  onFilterSelect = f => f }) =>
  (<li className={'filter'}>
    {
      (headers !== undefined && headers.includes(filter)) ?
        (<b>{filter}</b>) :
        view ?
          (<label htmlFor={view}>
            <input
              type="radio"
              id={view}
              name="switch-view"
              value={view}
              checked={view.toLowerCase() === currentView}
              onClick={e => onToggleView(e.target.value.toLowerCase())}
            /> {view}
          </label>) :
          (<label htmlFor={filter}>
            <input
              type="radio"
              id={sector}
              value={filter}
              name={sector}
              checked={checked.includes(filter)}
              onClick={e => onFilterSelect(sector, filter, e.target.checked, headers)}
            />
            {filter}</label>
          )
    }
  </li>);

Filter.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.any),
  filter: PropTypes.string,
  view: PropTypes.string,
  onToggleView: PropTypes.func,
  sector: PropTypes.string,
  checked: PropTypes.string,
  currentView: PropTypes.string,
  onFilterSelect: PropTypes.func,
};

Filter.defaultProps = {
  headers: [],
  filter: null,
  view: null,
  onToggleView: null,
  sector: null,
  checked: null,
  currentView: null,
  onFilterSelect: null,
};

export default Filter;
