import React from 'react';
import PropTypes from 'prop-types';

require('./Filter.scss');

const Filter = ({ filter, view, headers, sector, onToggleView, onFilterSelect = f => f, checked, currentView }) =>
  (<li className={'filter'}>
    {
      (headers !== undefined && headers.includes(filter)) ?
        (<b>{filter}</b>) :
        view ?
          (<label htmlFor={view}>
            <input
              type="radio"
              name="switch-view"
              value={view}
              checked={view.toLowerCase() === currentView}
              onClick={e => onToggleView(e.target.value.toLowerCase())}
            /> {view}
          </label>) :
          (<label htmlFor={filter}>
            <input type="radio"
              id={sector}
              value={filter}
              name={sector}
              checked={checked.includes(filter)}
              onClick={e => onFilterSelect(sector, filter, e.target.checked)}
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
};

Filter.defaultProps = {
  headers: [],
  filter: null,
  view: null,
  onToggleView: null,
};

export default Filter;
