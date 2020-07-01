import Mustache from 'mustache';
import { getCurrentState } from '../store/actions/actions';
import commaFormatting from './../utils/commaFormatting';

/**
 *  Adds popup to the map
 * @param {string} mapId - Identified what map to show popup on
 * @param {object} mapboxGLMap mapbox map object allows us to interact with map methods from mapbox
 * @param {function} dispatch redux function that accepts an action 
 */

export default function addMousemoveEvent(mapId, mapboxGLMap, dispatch) {
    const map = mapboxGLMap;
    const popup = new mapboxgl.Popup({
        closeOnClick: true,
        closeButton: false,
    });

    let content;

    // Add mousemove event to map
    map.on('mousemove', (e) => {
        content = null;
        popup.remove();
        // Get layers from current state
        const currentState = dispatch(getCurrentState());
        const {
            layers,
            timeseries,
        } = currentState[mapId];

        // Generate list of active layers
        const activeLayers = [];
        Object.keys(layers).forEach((key) => {
            const layer = layers[key];
            if (layer.visible && layer.type !== 'chart') {
                activeLayers.push(key);
            }
        });

        // Get rendered features from active layers under mouse pointer
        /**
         * @param ({}) e.point - lat,long cordinates of a specific point on a map
         * @param ({}) layers - active layers already present on the map
         */
        const features = map.queryRenderedFeatures(e.point, {
            // filter out layers not found on map
            layers: activeLayers.filter(activeLayer => map.getLayer(activeLayer) !== undefined),
        }).filter(layer =>
            // filter out grouped layers
            layer.layer && layers[layer.layer.id] && !layers[layer.layer.id].layers && layers[layer.layer.id].popup);
        // Change the cursor style to pointer if features exist.
        map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

        // If no features then there no need for a popup
        if (!features.length) return false;

        // Get layer data for feature under mouse pointer
        let feature;
        let layerId;
        let layer;
        let data;
        for (let f = 0; f < features.length; f += 1) {
            feature = features[f];
            layerId = feature && feature.layer && feature.layer.id;
            layer = layerId && layers[layerId];

            if (layer && layer.type !== 'chart') {
                // check for timeseries layer data or non-timeseries layer data
                // define data to loop through looking for join matches

                data = (layer.aggregate && layer.aggregate.timeseries) &&
                    timeseries && timeseries[layerId] && timeseries[layerId].data ? [...timeseries[layerId].data] :
                    (layer.source && layer.source.data &&
                        (layer.source.data.features || [...layer.source.data]));
                if (data && data.length) {
                    let row;
                    for (let r = 0; r < data.length; r += 1) {
                        row = {
                            ...(data[r].properties || data[r]),
                        };
                        const rowItem = {
                            ...row,
                            ...feature.properties,
                        };
                        // if row matches property
                        if ((layer.popup.join &&
                            (row[layer.popup.join[0]] === feature.properties[layer.popup.join[1]])) ||
                            (!layer.popup.join &&
                                (row[layer.source.join[1]] === feature.properties[layer.source.join[0]]))) {
                            // Add header and body to popup with data from layer
                            if (rowItem[layer.popup.header]) {
                                /**
                                 * ('') hideNulls - Custom flag that hides null values in data on the popup
                                 */
                                if (layer.popup && layer.popup.hideNulls) {
                                    Object.keys(rowItem).forEach((k) => {
                                        if (( typeof rowItem[k] === "string" && rowItem[k].toLowerCase() === 'n/a' || rowItem[k] === '' && rowItem[k] === null)) {
                                            delete rowItem[k];
                                        }
                                    });
                                    content =
                                        `<div><b>${rowItem[layer.popup.header]}</b></div>` +
                                        `<div><center>${Mustache.render(layer.popup.body, commaFormatting(layer, rowItem, true))}</center></div>`;
                                } else {
                                    const found = [];
                                    const rxp = /{{([^}]+)}/g;
                                    const str = layer.labels ? layer.labels.label : null;
                                    for (let c = rxp.exec(str); c !== null; c = rxp.exec(str)) {
                                        found.push(c[1]);
                                    }
                                    // while (curMatch = rxp.exec(str)) {
                                    //   found.push(curMatch[1]);
                                    // }
                                    found.forEach(i => {
                                        rowItem[`${i}`] = rowItem[`${i}`].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                                    });
                                    const bodyProperties = layer.popup.body.match(/{{(.*?)\}}/g) && layer.popup.body.match(/{{(.*?)\}}/g).map(val => val.replace(/{{?/g, '').replace(/}}?/g, ''));
                                    bodyProperties && bodyProperties.forEach(val => {
                                        // Check if rowItem[val] is a string and if it has ,
                                        const contentArr = typeof rowItem[val.trim()] !== 'number' &&
                                            rowItem[val.trim()].includes(',') ? rowItem[val.trim()].split(',') : [];
                                        if (contentArr.length > 1) {
                                            rowItem[val] = contentArr.join(', ');
                                        }
                                    });
                                    const bodySection = bodyProperties ? Mustache.render(layer.popup.body, commaFormatting(layer, rowItem, true)) : '';
                                    content =
                                        `<div>` +
                                        `<div><b>${row[layer.popup.header]}</b></div>` +
                                        `<div><center>${bodySection}</center></div>` +
                                        `</div>`;
                                }
                            } else {
                                content = Mustache.render(layer.popup.body, commaFormatting(layer, rowItem, true)) || '';
                            }
                            break;
                        }
                    }
                } else {
                    // if no data, use feature.properties to populate popup
                    // eslint-disable-next-line no-lonely-if
                    const formattedData = commaFormatting(layer, feature.properties, true);
                    if (feature.properties[layer.popup.header]) {
                        content = `<div><b>${feature.properties[layer.popup.header]}</b></div>`;
                        if (layer.popup.body) {
                            content += `<div><center>${Mustache.render(layer.popup.body, formattedData)}</center></div>`;
                        }
                    } else {
                        content = Mustache.render(
                            layer.popup.body,
                            formattedData,
                        );
                    }
                }
            }
            if (content) break;
        }
        // Todo - we need to be able to render popups from just tileset data as well
        if (!content) {
            return
            // content = Mustache.render(layer.popup.body, feature.properties);
        }

        // Add popup if content exists
        if (content) {
            popup.setLngLat(map.unproject(e.point)).setHTML(content).addTo(map);
        } else {
            // Remove pop up if no features under mouse pointer
            content = null;
            popup.remove();
            return false;
        }
        return true;
    });

    // add popups for marker charts
    $(document).on('mousemove', '.marker-chart', (e) => {
        const mapid = $(e.currentTarget).data('map');
        const lng = $(e.currentTarget).data('lng');
        const lat = $(e.currentTarget).data('lat');
        content = $(e.currentTarget).data('popup');
        if (mapid === mapId) {
            popup.setLngLat([parseFloat(lng), parseFloat(lat)])
                .setHTML(content)
                .addTo(map);
        }
    });
}