import React from 'react';
import PropTypes from 'prop-types';

require('./TimeSeriesSlider.scss');

function TimeSeriesSlider(props) {
  return (
    <div className="series">
      <label id={`${props.mapId}-label`} className="label" htmlFor="slider" />
      <input id={`${props.mapId}-slider`} className="slider" type="range" list="datalist" />
      <datalist id="datalist">
        {props.periods.map((p, i) =>
          <option key={i}>{i}</option>)}
      </datalist>
    </div>
  );
}

TimeSeriesSlider.propTypes = {
  mapId: PropTypes.string.isRequired,
  periods: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default TimeSeriesSlider;
