require('./Export.scss')
import React from 'react'
import { Component } from 'react'

class Export extends Component {
  constructor(props) {
    super(props)

  }
  
  componentDidMount() {
  
  }
  
  getMapStatus() {
    var options = {}
    // get layers
    
    var layers = '';
    var layerState = $('.map-1 input[data-layer]')

    $.each(layerState, function(index, layer) {
      if ($(layer).prop('checked') === true) {
        layers += '&' + $(layer).data('layer')
      }
    })
    console.log(layers)
   
    // get lat/lng, zoom  
    var center = window.maps[0].getCenter()
    var zoom = window.maps[0].getZoom()
      options.lat = center.lat,
      options.lng = center.lng,
      options.zoom = zoom,
      options.layers = layers
    return options 
  }
  
  
  getImageUrl() {
    var options = this.getMapStatus()
    console.log(options) 
    var url = 'https://onacapture.com/export/&' + options.lng + '&' + options.lat + '&' + options.zoom + options.layers;
    console.log(url)
    $.get(url)
     .done(function(data) {
    
      console.log(data)
      $('#screenshot-modal .field-image').prepend('<a target="_blank" href="' + data.url + '"><img src="' +  data.url + '" /></a>');
    }) 
  }
  
  
 showScreenshotModal(e) {
  e.preventDefault()
   this.getImageUrl()
   $('#screenshot-modal').modal('show')
 }
  
  
 screenshot() {
   return(
     <div id="screenshot-modal" className="modal fade" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
       <div className="modal-content">
         <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <div className="field-image">
           
          </div>
         <div className="modal-body">
           
         </div>
       </div>
      </div>
    </div>
   )
 } 
  
 
  render() {
    return(
      <div>
        <a className="export-btn" href="#" onClick={(e) => this.showScreenshotModal(e)}><span className="glyphicon glyphicon-camera"></span></a>
        { this.screenshot() }
      </div>
    )
   }
    
}

export default Export