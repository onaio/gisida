import React from 'react';
import PropTypes from 'prop-types';

require('./Filter.scss');

const Filter = ({ filter, headers }) =>
  (<li className={'filter'}>
    {
      (headers !== undefined && headers.includes(filter)) ?
        (<b>{filter}</b>) :
        (<label htmlFor={filter}><input
          type="radio"
          data-layer={filter}
          style={{ marginRight: `${1}em` }}
        />{filter}
        </label>)
    }
  </li>);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  headers: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Filter;
