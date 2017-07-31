import React from 'react';
import PropTypes from 'prop-types';

require('./Layer.scss');

class Layer extends React.Component {
  render() {
    return (
      <li className={`layer ${this.props.mapTargetId}`}>
        {this.props.headers.includes(this.props.layer) ? <b>{this.props.layer}</b> :
          < label htmlFor={this.props.layer} >
            <input
              type={this.props.defaultView === 'framework' ? 'radio' : 'checkbox'}
              data-layer={this.props.layer}
              name={group}
              onChange={e => this.props.onLayerChange(this.props.layer, e.target.checked, this.props.layer)}
            />
            {this.props.layerData[this.props.layer] ? this.props.layerData[this.props.layer].label : this.props.layer}</label>
        }
      </li >
    )
  }
}

Layer.propTypes = {
  mapTargetId: PropTypes.string.isRequired,
  layer: PropTypes.string.isRequired,
  layerData: PropTypes.objectOf(PropTypes.any).isRequired,
  onLayerChange: PropTypes.func.isRequired,
  headers: PropTypes.arrayOf(PropTypes.any),
  defaultView: PropTypes.string.isRequired,
};

Layer.defaultProps = {
  headers: [],
};

export default Layer;
