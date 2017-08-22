import React from 'react';
import PropTypes from 'prop-types';

require('./Selections.scss');

const Selections = ({
    UIfilters
}) => (
        <div className="filter-selection">
            <div className="pre-text">YOUR SELECTIONS: </div>
            <div className="selections">{UIfilters.join(', ')}</div>
        </div>
)

export default Selections;