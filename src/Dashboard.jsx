import React from 'react';
import { render } from 'react-dom';
import jQuery from 'jquery';
import App from './components/App/App';
import Login from './components/Login/Login';
import defaultConfig from './config';
import { isLoggedIn } from './includes/utils';

window.$ = jQuery;
window.jQuery = jQuery;
window.React = React;


require('bootstrap-loader');

class Dashboard {
  constructor(options) {
    const container = document.getElementById(options.APP.container);
    const config = Object.assign({}, defaultConfig, options);

    const sectorData = [];
    Object.keys(config.SECTORS).forEach((key) => {
      sectorData.push({
        sector: key,
        icon: config.SECTORS[key].icon,
        views: config.SECTORS[key].views,
        layers: config.SECTORS[key].layers,
        sectors: config.SECTORS[key].sectors,
        headers: config.SECTORS[key].headers,
        filters: config.SECTORS[key].filters,
      });
    });

    if (isLoggedIn()) {
      render(
        <App
          sectorData={sectorData}
          layerData={config.LAYERS}
          styles={config.STYLES}
          appConfig={config.APP}
          locations={config.LOCATIONS}
          details={config.INDICATORS}
        />,
        container);
    } else {
      render(<Login appConfig={config.APP} />, container);
    }
  }
}

export default Dashboard;
