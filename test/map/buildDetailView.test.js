import buildDetailView, { buildParsedBasicDetailItem, parseDetailValue } from '../../src/map/buildDetailView';
import buildLabelsInput from '../fixtures/buildLabels-input.json';
import perseBasicDetail from '../fixtures/perseBasicDetail.json';

const mapId = 'map-1';
const dispatch = jest.fn();

const {detail, properties} = perseBasicDetail

describe('buildDetailView', () => {
    test('should return false if no layer and feature properties', () => {
        expect(buildDetailView(mapId, null, null, dispatch, {})).toBe(false);
    })

    test('should return false if layer detail view has no UID', () => {
        const layer = {"detail-view": {}}
        expect(buildDetailView(mapId, layer, {}, dispatch, {})).toBe(false)
    })

    test('should return true if correct data provided', () => {
        expect(buildDetailView(mapId, buildLabelsInput, undefined, dispatch, {})).toBe(true)
    })
})

describe('buildParsedBasicDetailItem', () => {

    test('should return false if property not given', () => {
        expect(buildParsedBasicDetailItem(detail, {})).toBe(false)
    })

    test('should return correct output with icon as property', () => {
        const output = {"alt": "Location ID", "icon": "glyphicon glyphicon-map-marker", "iconColor": undefined, "prefix": undefined, "suffix": undefined, "useAltAsPrefix": undefined, "value": "CXB-223"}
        expect(buildParsedBasicDetailItem(detail, properties)).toEqual(output)
    })

    test('should return correct output with icon as object', () => {
        detail.icon = {glyph: 'map-marker'}
        const output = {"alt": "Location ID", "icon": "glyphicon glyphicon-map-marker", "iconColor": undefined, "prefix": undefined, "suffix": undefined, "useAltAsPrefix": undefined, "value": "CXB-223"}
        expect(buildParsedBasicDetailItem(detail, properties)).toEqual(output)
    })
})

describe('parseDetailValue', () => {
    test('should return false if nothing provided', () => {
        expect(parseDetailValue(null, null)).toBe(false)
    })

    test('should return false if 2nd param is empty object', () => {
        expect(parseDetailValue(detail.value, {})).toBe(false)
    })

    test('should return correct value', () => {
        expect(parseDetailValue(detail.value, properties)).toEqual("CXB-223")
    })

    test('should return correct joined props items if props and join', () => {
        const spec = { "prop": [  "longitude", "latitude" ], "join": ", " }
        expect(parseDetailValue(spec, properties.disaggregatedData[0])).toEqual("92.1430221, 21.16054342")
    })

    test('should return the first passing prop if no join', () => {
        const spec = { "prop": [  "longitude", "latitude" ]}
        expect(parseDetailValue(spec, properties.disaggregatedData[0])).toEqual("92.1430221")
    })

    test('should return the first passing prop if no join', () => {
        const spec = { "prop": 'Settlement', mustache: `<ul> <li>latitude: {{latitude}}</li> <li>longitude: {{longitude}}</li> </ul>`}
        expect(parseDetailValue(spec, properties.disaggregatedData[0]))
        .toEqual("<ul> <li>latitude: 21.16054342</li> <li>longitude: 92.1430221</li> </ul>"
        )
    })
})
