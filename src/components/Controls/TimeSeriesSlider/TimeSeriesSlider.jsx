import React from 'react';

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
  mapId: React.PropTypes.string.isRequired,
  periods: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
};

export default TimeSeriesSlider;
