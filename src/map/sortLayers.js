export default function sortLayers(map, layers, nextLayerId) {
    /* Sort layers in the following order circle, symbol and detailview inclusive of primarylayer
     -primary layer should always move on top for all layers in the respective categories
     -the precedence can be viewed as shown below
          1. detail-view primarylayer
          2. detail-view (other detail-view layers that aren't primary layers)
          3. symbol primarylayer
          4. symbol (other symbol layers that aren't primary layers)
          5. circle primarylayer
          6. cirle (other circle layers that aren't primary layers)
          7  line  primary
          8. line  (other line layers that aren't primary layers)
          9. heat map layers
          10. fill layers
    */

    /**
     * Rearranges rendered layers and puts selected layer on top. 
     * @param {Object} filteredLayers - Mapbox layers
     */
    const moveLayers = filteredLayers => {
        Object.keys(filteredLayers).forEach((key) => {
            if (map.getLayer(filteredLayers[key].id)) {
                map.moveLayer(filteredLayers[key].id);
            }
        });
        if (
            filteredLayers.find(d => d.id === nextLayerId) &&
            map.getLayer(nextLayerId)
        ) {
            map.moveLayer(nextLayerId);
        }
    }

    if (Object.keys(layers).length) {
        const fill = Object.keys(layers)
            .map(d => layers[d])
            .filter(d => d.type === 'fill');
        if (fill.length) {
            moveLayers(fill);
        }

        const heatMap = Object.keys(layers)
            .map(d => layers[d])
            .filter(d => d.type === 'heatmap');
        if (heatMap.length) {
            moveLayers(heatMap)
        }

        const circles = Object.keys(layers)
            .map(d => layers[d])
            .filter(d => d.type === 'circle');
        if (circles.length) {
            moveLayers(circles);
        }

        const symbols = Object.keys(layers)
            .map(d => layers[d])
            .filter(d => d.type === 'symbol');
        if (symbols.length) {
            moveLayers(symbols);
        }

        const lines = Object.keys(layers)
            .map(d => layers[d])
            .filter(d => d.type === 'line');
        if (lines.length) {
            moveLayers(lines);
        }

        const detailViewActive = Object.keys(layers)
            .map(d => layers[d])
            .filter(d => d['detail-view'] && !d['level-view'] && !d.type && d.type === 'fill');
        if (detailViewActive.length) {
            moveLayers(detailViewActive);
        }

        const isLabelActive = Object.keys(layers)
            .map(d => layers[d])
            .filter(d => d.isLabel);
        if (isLabelActive.length) {
            moveLayers(isLabelActive);
        }
    }
}