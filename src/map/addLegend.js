import Mustache from 'mustache';
import formatNum from '../utils/formatNum';
import hexToRgbA from '../utils/hexToRgbA';
import setPrimaryLayer from './setPrimaryLayer';


export default function addLegend(layer, stops, data, breaks, colors) {
  // todo: change for split map

  const mapId = '01';
  const creditContent = Mustache.render(layer.credit);
  $(`#legend-${layer.id}-${mapId}`).remove();
  if (!layer.visible) {
    // $(`#legend-${layerId}-${mapId} .set-primary-layer`).off('click', this.setPrimaryLayer);
    $(`#legend-${layer.id}-${mapId}`).remove();
  } else {
    let background = '';
    // legends for circle layers
    if (layer.credit && layer.type === 'circle' && !layer.categories.shape) {
      $(`.legend.${mapId}`).prepend(`<div id="legend-${layer.id}-${mapId}"
          class="legend-shapes legend-row" data-layer="${layer.id}">
          <b>${layer.label}</b>
          <div class="legend-symbols">
            <span class="circle-sm" style="background:${layer.categories.color};"></span>
            <span class="circle-md" style="background:${layer.categories.color};"></span>
            <span class="circle-lg" style="background:${layer.categories.color};"></span>
          </div>
          <span>${creditContent}</span>
        </div>`,
      );

      // legends for symbol layers
    } else if (layer.credit && layer.categories.shape && layer.type !== 'circle') {
      layer.categories.color.forEach((color, index) => {
        const style = layer.categories.shape[index] === 'triangle-stroked-11' ||
          layer.categories.shape[index] === 'triangle-15' ?
          'border-bottom-color:' : 'background:';

        background += `<li class="layer-symbols"> <span class="${
          layer.categories.shape[index]}" style="${style}${color};"></span>${
          layer.categories.label[index]}</li>`;
      });

      $(`.legend.${mapId}`).prepend(`<div id="legend-${layer.id}-${mapId}" class="legend-row" data-layer="${layer.id}">
          <b>${layer.label}</b>
          <div class="legend-shapes">
            <ul style="left: 0;">${background}</ul>
          </div>
          <span>${creditContent}</span>
        </div>`,
      );

      // legends for fill layers with no breaks
    } else if (layer.credit && layer.categories.breaks === 'no') {
      layer.categories.color.forEach((color, index) => {
        background += `<li style="background:${color}; width:${
          100 / layer.categories.color.length
        }%;">${layer.categories.label[index]}</li>`;
      });

      $(`.legend.${mapId}`).prepend(`<div id="legend-${layer.id}-${mapId}" class="legend-row" data-layer="${layer.id}">
          <b>${layer.label}</b>
          <div class="legend-fill ${layer.categories ? 'legend-label' : ''}">
            <ul>${background}</ul>
          </div>
          <span>${creditContent}</span>
        </div>`,
      );

      // legends for fill layrs with breaks
    } else if (layer.credit && layer.type !== 'circle' && layer.type !== 'chart') {
      const dataValues = data.map(values => values[layer.property]);
      const colorLegend = [...new Set(stops.map(stop => stop[1]))];
      const legendSuffix = layer.categories.suffix ? layer.categories.suffix : '';

      if (colorLegend.includes('transparent') && !(colors).includes('transparent')) {
        colors.splice(0, 0, 'transparent');
        breaks.splice(1, 0, breaks[0]);
      }

      colorLegend.forEach((color, index) => {
        const firstVal = breaks[index - 1] !== undefined ? breaks[index - 1] : 0;
        const lastVal = color === colorLegend[colorLegend.length - 1] ||
          breaks[index] === undefined ? Math.max(...dataValues) : breaks[index];
        background += `<li class="background-block-${layer.id}-${mapId}"` +
          `data-tooltip="${formatNum(firstVal, 1)}-${formatNum(lastVal, 1)}${legendSuffix}"` +
          `style="background:${hexToRgbA(color, 0.9)}; width:${100 / colorLegend.length
          }%;"></li > `;
      });

      $(`.legend.${mapId}`).prepend(`<div id="legend-${layer.id}-${mapId}" class="legend-row" data-layer="${layer.id}">
          <b>${layer.label}</b>
          <ul class="legend-limit" style="padding: 0% 0% 3% 0%;"> 
            <li id="first-limit-${layer.id}" class="${mapId}"
              style="position: absolute; list-style: none; display: inline; left: 3%;">
              ${0}${legendSuffix}
            </li>
            <li id="last-limit-${layer.id}" class="${mapId} 
              "style="position: absolute; list-style: none; display: inline; right: 3%;">
              ${formatNum(Math.max(...dataValues), 1)}${legendSuffix}
            </li>
          </ul>
          <div class="legend-fill">
            <ul id="legend-background">${background}</ul>
          </div>
          <span>${creditContent}</span>
        </div>`,
      );

      $(`.background-block-${layer.id}-${mapId}`).hover(() => {
        $(`#first-limit-${layer.id}.${mapId}`).text($('first-limit').text());
        $(`#last-limit-${layer.id}.${mapId}`).text($('last-limit').text());
      }, () => {
        $(`#first-limit-${layer.id}.${mapId}`).text(0 + legendSuffix);
        $(`#last-limit-${layer.id}.${mapId}`).text(formatNum(Math.max(...dataValues), 1) + legendSuffix);
      });

      // no legend
    } else {
      $('.set-primary-layer.primary').removeClass('primary');
    }

    $('.set-primary-layer.primary').removeClass('primary');
    $(`#legend-${layer.id}-${mapId} .set-primary-layer`)
      .on('click', setPrimaryLayer)
      .addClass('primary');

    $('.legend-row.primary').removeClass('primary');
    $(`#legend-${layer.id}-${mapId}`)
      .addClass('primary')
      .on('click', setPrimaryLayer);
  }
}
