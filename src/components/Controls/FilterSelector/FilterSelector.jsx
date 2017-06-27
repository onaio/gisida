import React from 'react';

require('./FilterSelector.scss');

class FilterSelector extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.layerObj && nextProps.layerObj.filterOptions) {
      let filterOptions = nextProps.layerObj.filterOptions.map((opt) => {
        const optVal = {};
        optVal[opt] = true;
        return optVal;
      });
      if (this.state && this.state.options) {
        filterOptions = filterOptions.concat([this.state.options]);
      }
      this.setState({ options: Object.assign.apply(this, filterOptions) });
    } else this.setState({ options: {} });
  }

  updateOptions(val) {
    const options = this.state.options;
    options[val] = !options[val];
    this.setState({ options });
    this.props.filterData(options);
  }

  render() {
    if (this.state && this.state.options) {
      return (
        <nav id="filter-group" className="filter-group">
          {Object.keys(this.state.options).map(val =>
            (<span key={`label_${val}`}>
              <input
                type="checkbox"
                id={val}
                key={`input_${val}`}
                value={val}
                onChange={(e) => {
                  this.updateOptions(e.target.value);
                }}
                checked={this.state.options[val]}
              />
              <label htmlFor={val} key={`label_${val}`}>
                {val}
              </label>
            </span>))
          }
        </nav>
      );
    }
    return (<nav />);
  }
}

FilterSelector.propTypes = {
  filterData: React.PropTypes.func.isRequired,
  layerObj: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
};

export default FilterSelector;
