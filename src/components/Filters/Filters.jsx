import React from 'react';
import PropTypes from 'prop-types';
import Filter from '../Filter/Filter';

require('./Filters.scss');

const Filters = ({ filters, headers }) =>
  (<ul className="filters">
    {filters.map(filter =>
      (<Filter
        key={filter}
        filter={filter}
        headers={headers}
      />))
    }
  </ul>);

Filters.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.any).isRequired,
  headers: PropTypes.arrayOf(PropTypes.any),
};

Filters.defaultProps = {
  headers: [],
};

export default Filters;
