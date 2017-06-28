import React from 'react';

require('./Export.scss');

class Export extends React.Component {
  static screenshot() {
    return (
      <div id="screenshot-modal" className="modal fade" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <div className="field-image" />
            <div className="modal-body" />
          </div>
        </div>
      </div>
    );
  }

  static getMapStatus() {
    const options = {};
    // get layers
    let layers = '';
    const layerState = $('.map-1 input[data-layer]');
    $.each(layerState, (index, layer) => {
      if ($(layer).prop('checked') === true) {
        layers += `&${$(layer).data('layer')}`;
      }
    });
    // get lat/lng, zoom
    const center = window.maps[0].getCenter();
    const zoom = window.maps[0].getZoom();
    options.lat = center.lat;
    options.lng = center.lng;
    options.zoom = zoom;
    options.layers = layers;

    return options;
  }

  static getImageUrl() {
    const options = Export.getMapStatus();
    const url = `https://onacapture.com/export/&${options.lng}&${options.lat}&${options.zoom}${options.layers}`;
    $.get(url)
      .done((data) => {
        $('#screenshot-modal .field-image').prepend(`<a target="_blank" href="${data.url}"><img src="${data.url}" /></a>`);
      });
  }

  static showScreenshotModal(e) {
    e.preventDefault();
    Export.getImageUrl();
    $('#screenshot-modal').modal('show');
  }

  componentDidMount() {
    // place the btns in their map divs
    // @todo: tidy this up
    const btn1 = $('.export-btn-map-1');
    $('#map-1').append(btn1);
    const btn2 = $('.export-btn-map-2');
    $('#map-2').append(btn2);
  }

  render() {
    return (
      <div>
        <a className={`export-btn export-btn-${this.props.map}`} href="#" onClick={e => Export.showScreenshotModal(e)}><span className="glyphicon glyphicon-camera" /></a>
        {Export.screenshot()}
      </div>
    );
  }

}

export default Export;

Export.propTypes = {
  map: React.PropTypes.string.isRequired,
};

Export.defaultProps = {
  map: '',
};

