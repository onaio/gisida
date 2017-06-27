import React from 'react';

require('./StyleSelector.scss');

function StyleSelector(props) {
  return (
    <div className="leaflet-left leaflet-top leaflet-right layer-selector">
      <div aria-haspopup="true" className="leaflet-control leaflet-control-layers">
        <a title="styles" className="leaflet-control-layers-toggle" />
        <form className="leaflet-control-layers-list">
          <div className="leaflet-control-layers-base">
            {props.styles.map(b =>
              (<label key={`label_${b.label}`} htmlFor="styles">
                <input
                  readOnly
                  key={`input_${b.label}`}
                  type="radio"
                  name="leaflet-base-layers"
                  className="leaflet-control-layers-selector"
                  value={b.style}
                  onClick={e => props.changeStyle(e.target.value)}
                  checked={props.style === b.style}
                />
                <span>{b.label}</span>
              </label>))
            }
          </div>
          <div className="leaflet-control-layers-overlays" />
        </form>
      </div>
    </div>
  );
}

StyleSelector.propTypes = {
  styles: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
  style: React.PropTypes.string.isRequired,
};

export default StyleSelector;
