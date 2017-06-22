import React from 'react';
window.React = React;

import { render } from 'react-dom';
import jQuery from 'jquery';
window.$ = jQuery;
window.jQuery = jQuery;

import App from './components/App/App';
import Login from './components/Login/Login';
import { isLoggedIn } from './components/Login/Login';
import defaultConfig from './config';

require('bootstrap-loader');

class Dashboard {
  constructor(options) {
    const container = document.getElementById(options.APP.container);
    const config = Object.assign({}, defaultConfig, options);

    const sectorData = [];
    for (const key in config.SECTORS) {
      if (config.SECTORS.hasOwnProperty(key)) {
        sectorData.push({ sector: key, layers: config.SECTORS[key].layers });
      }
    }

    if (isLoggedIn()) {
      render(
        <App
          sectorData={sectorData}
          layerData={config.LAYERS}
          styles={config.STYLES}
          appConfig={config.APP}
        />,
        container);
    } else {
      render(<Login />, container);
    }
  }
}

export default Dashboard;
