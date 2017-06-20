require('./Export.scss');
import React from 'react';
import { Component } from 'react';

class Export extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  getMapStatus() {
    const options = {};
    // get layers

    let layers = '';
    const layerState = $('.map-1 input[data-layer]');

    $.each(layerState, (index, layer) => {
      if ($(layer).prop('checked') === true) {
        layers += `&${$(layer).data('layer')}`;
      }
    });
    console.log(layers);

    // get lat/lng, zoom
    const center = window.maps[0].getCenter();
    const zoom = window.maps[0].getZoom();
    options.lat = center.lat,
      options.lng = center.lng,
      options.zoom = zoom,
      options.layers = layers;
    return options;
  }


  getImageUrl() {
    const options = this.getMapStatus();
    console.log(options);
    const url = `https://onacapture.com/export/&${options.lng}&${options.lat}&${options.zoom}${options.layers}`;
    console.log(url);
    $.get(url)
     .done((data) => {
       console.log(data);
       $('#screenshot-modal .field-image').prepend(`<a target="_blank" href="${data.url}"><img src="${data.url}" /></a>`);
     });
  }


  showScreenshotModal(e) {
    e.preventDefault();
    this.getImageUrl();
    $('#screenshot-modal').modal('show');
  }


  screenshot() {
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


  render() {
    return (
      <div>
        <a className="export-btn" href="#" onClick={e => this.showScreenshotModal(e)}><span className="glyphicon glyphicon-camera" /></a>
        { this.screenshot() }
      </div>
    );
  }

}

export default Export;
