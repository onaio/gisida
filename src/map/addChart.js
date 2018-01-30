import { ckmeans } from 'simple-statistics';
import Highcharts from 'highcharts';

function drawDoughnutChart(container, data, dimension) {
  Highcharts.chart(container, {
    chart: {
      type: 'pie',
      spacing: 0,
      backgroundColor: 'transparent',
      height: dimension,
      width: dimension,
    },
    title: {
      text: '',
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
      backgroundColor: 'rgba(255,255,255,0)',
      borderWidth: 0,
      shadow: false,
      useHTML: true,
      formatter() {
        if (this.point.options.label !== undefined) {
          return `<div class="chart-Tooltip"><b>${this.point.options.label}: 
            ${this.point.options.y.toFixed(0)}%</b></div>`;
        }
        return '';
      },
    },
    plotOptions: {
      series: {
        animation: true,
        states: {
          hover: {
            enabled: false,
          },
        },
      },
      pie: {
        allowPointSelect: false,
        // borderWidth: 0,
        borderColor: '#fff',
        dataLabels: {
          enabled: false,
          distance: 80,
          crop: false,
          overflow: 'none',
          formatter() {
            if (this.point.scoreLabel !== undefined) {
              return `<b>${this.point.label}</b>`;
            }
            return '';
          },
          style: {
            fontWeight: 'bold',
          },
        },
        center: ['50%', '50%'],
      },
    },
    series: data,
  });
}

export default function addChart(map, layer, data) {
  const mapId = 'map-1';
  const population = data.map(d => d[layer.categories.total]);
  const clusters = ckmeans(population, layer.categories.clusters);

  // create a DOM element for the marker
  data.forEach((district) => {
    const total = district[layer.categories.total];
    const chartArr = [];
    let chartProp = '';
    let propTotal = 0;
    let dimension;

    if (layer.categories.title) {
      chartProp += `<div><b>${district[layer.categories.title]}</b></div>`;
    }

    if (layer.categories['total-label']) {
      chartProp += `<div>${layer.categories['total-label']}: <b>${total}</b></div>`;
    }

    for (let i = 0; i < layer.categories.property.length; i += 1) {
      chartArr.push({
        color: layer.categories.color[i],
        y: parseInt(district[layer.categories.property[i]] / total * 100, 10),
        label: layer.categories.label[i],
      });
      propTotal += parseInt(district[layer.categories.property[i]] / total * 100, 10);
      chartProp += `<div><span class="swatch" style="background: ${layer.categories.color[i]};"></span>
          ${layer.categories.label[i]}:
          <b>${(district[layer.categories.property[i]] / total * 100).toFixed(1)}%</b></div>`;
    }

    if (layer.categories.difference) {
      chartProp +=
        `<div><span class="swatch" style="background: ${layer.categories.difference[1]};"></span>
            ${layer.categories.difference[0]}: <b>${(100 - propTotal).toFixed(1)}%</b></div>`;
      chartArr.splice(0, 0, {
        color: layer.categories.difference[1],
        y: (100 - propTotal),
        label: layer.categories.difference[0],
      });
    }

    for (let i = 0; i < clusters.length; i += 1) {
      if (clusters[i].includes(total)) {
        dimension = layer.categories.dimension[i];
      }
    }

    const chartData = [{
      data: chartArr,
      size: layer.chart.size,
      innerSize: layer.chart.innerSize,
    }];

    const content = `<div><b>${district[layer.source.join[1]]}</b></div>${chartProp}`;

    const el = document.createElement('div');
    el.id = `chart-${district[layer.source.join[1]]}-${layer.id}-${mapId}`;
    el.className = `marker-chart marker-chart-${layer.id}-${mapId}`;
    el.style.width = layer.chart.width;
    el.style.height = layer.chart.height;
    $(el).attr('data-map', mapId);
    $(el).attr('data-lng', district[layer.chart.coordinates[0]]);
    $(el).attr('data-lat', district[layer.chart.coordinates[1]]);
    $(el).attr('data-popup', content);

    // add marker to map
    new mapboxgl.Marker(el, {
      offset: layer.chart.offset,
    })
      .setLngLat([district[layer.chart.coordinates[0]], district[layer.chart.coordinates[1]]])
      .addTo(map);

    const container = $(`#chart-${district[layer.source.join[1]]}-${layer.id}-${mapId}`)[0];
    drawDoughnutChart(container, chartData, dimension);
  });
}
