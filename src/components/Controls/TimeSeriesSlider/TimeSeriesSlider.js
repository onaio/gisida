require('./TimeSeriesSlider.scss');

export default function TimeSeriesSlider(props) {
  return (
    <div className="series">
      <label id={props.mapId + '-label'} className="label" htmlFor="slider" />
      <input id={props.mapId + '-slider'} className="slider" type="range" list="datalist" />
      <datalist id="datalist">
        {props.periods.map((p, index) =>
          <option key={index}>{index}</option>)}
      </datalist>
    </div>
  );
}
