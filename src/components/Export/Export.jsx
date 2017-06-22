import { Component } from 'react';

require('./Export.scss');

class Export extends Component {

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

  render() {
    return (
      <div>
        <a className="export-btn" href="#" onClick={e => Export.showScreenshotModal(e)}><span className="glyphicon glyphicon-camera" /></a>
        { Export.screenshot() }
      </div>
    );
  }

}

export default Export;
