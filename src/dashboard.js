import React from 'react';
window.React = React;
import { render } from 'react-dom';
import jQuery from 'jquery';
window.$ = jQuery;
window.jQuery = jQuery;
import App from './components/App/App';
import Login from './components/Login/Login';
import { isLoggedIn } from './components/Login/Login';
import config from './config';

require('bootstrap-loader');


const layerData = config.LAYERS;
const sectorJson = config.SECTORS;
const styles = config.STYLES;

class Dashboard {
  constructor(options) {
    const sectorData = [];
    for (const key in sectorJson) {
      if (sectorJson.hasOwnProperty(key)) {
        sectorData.push({ sector: key, layers: sectorJson[key].layers });
      }
    }

    if (isLoggedIn()) {
      render(<App sectorData={sectorData} layerData={layerData} styles={styles} />, document.getElementById('app'));
    } else {
      render(<Login />, document.getElementById('app'));
    }
  }
}

export default Dashboard;
