require('./StyleSelector.scss');

function StyleSelector(props) {
  return (
    <div className="leaflet-left leaflet-top leaflet-right layer-selector">
      <div aria-haspopup="true" className="leaflet-control leaflet-control-layers">
        <a title="styles" className="leaflet-control-layers-toggle"></a>
        <form className="leaflet-control-layers-list">
          <div className="leaflet-control-layers-base">
            {props.styles.map((b, i) =>
              <label key={"label_" + i}>
                <input
                  readOnly
                  key={"input_" + i}
                  type="radio" name="leaflet-base-layers" className="leaflet-control-layers-selector"
                  value={b.style}
                  onClick={(e) => props.changeStyle(e.target.value)}
                  checked={props.style === b.style}></input>
                <span>{b.label}</span>
              </label>)
            }
          </div>
          <div className="leaflet-control-layers-overlays"></div>
        </form>
      </div>
    </div>
  );
}

export default StyleSelector
