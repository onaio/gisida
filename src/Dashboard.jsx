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

    let url = "https://spreadsheets.google.com/feeds/list/1fVdPJMpe5tAiGp6yg2bg1J34L4kGdyT-nW_-oGmP1EQ/1/public/basic?alt=json";
    let dataArr = [];
    $.getJSON(url, function (data) {
      let Data = data.feed.entry;

      for (let i = 0; i < Data.length; i += 1) {
        let dataStr = Data[i].content.$t
        var params = dataStr.split(', ');
        var map = {};
        for (var i = 0; i < params.length; i++) {
          var parts = params[i].split(':');
          map[parts[0]] = parts[1].substr(1, parts[1].length);
        }
        dataArr.push(map);
      }
    });
    console.log(dataArr);
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
