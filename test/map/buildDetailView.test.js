import buildDetailView from '../../src/map/buildDetailView';
import layer from '../fixtures/default-layer.json'

const mapId = 'map-1';
const dispatch = jest.fn();

describe('buildDetailView', () => {
    test('should return false if no layer and feature properties', () => {
        expect(buildDetailView(mapId, null, null, dispatch, {})).toBe(false);
    })

    test('should return false if layer detail view has no UID', () => {
        const layer = {"detail-view": {}}
        expect(buildDetailView(mapId, layer, {}, dispatch, {})).toBe(false)
    })


})