import React from 'react';
import PropTypes from 'prop-types';
import Filter from '../Filter/Filter';

require('./Filters.scss');

const Filters = ({
  filters,
  headers,
  sector,
  views,
  onToggleView,
  onFilterSelect = f => f,
  checked,
  currentView }) =>
  (<ul className="filters" style={{ display: `${currentView === 'framework' ? 'block' : 'none'}` }}>
    {views ?
      views.map(view =>
        (<Filter
          key={view}
          view={view}
          headers={headers}
          onToggleView={onToggleView}
          currentView={currentView}
        />)) :
      filters.map(filter =>
        (<Filter
          key={filter}
          filter={filter}
          headers={headers}
          filters={filters}
          sector={sector}
          onFilterSelect={onFilterSelect}
          checked={checked}
        />))
    }
  </ul>);

Filters.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.any),
  headers: PropTypes.arrayOf(PropTypes.any),
  views: PropTypes.arrayOf(PropTypes.any),
  onToggleView: PropTypes.func.isRequired,
  sector: PropTypes.string,
  checked: PropTypes.arrayOf(PropTypes.any),
  currentView: PropTypes.string,
  onFilterSelect: PropTypes.func,
};

Filters.defaultProps = {
  headers: [],
  filters: null,
  views: null,
  sector: null,
  checked: null,
  currentView: null,
  onFilterSelect: null,
};

export default Filters;
