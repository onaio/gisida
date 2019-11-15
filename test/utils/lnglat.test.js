import { isNumber } from '../../src/utils/files.js'
import lngLat from '../../src/utils/lngLat'
import mapConfig from '../fixtures/map-config.json'

describe('lngLat', () => {
	const app = {mapConfig}
	const loc = {location: {...mapConfig}}
	const output = {
		center: {
			lng: mapConfig.center[0],
      		lat: mapConfig.center[1],
		},
		zoom:mapConfig.zoom
	}

	test('Returns map center and zoom with no LOC parameter', () => {
		expect(lngLat({}, app)).toEqual(output);
	});

	test('Returns map center and zoom with LOC parameter', () => {
		expect(lngLat(loc, app)).toEqual(output);
	});

})