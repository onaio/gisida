import React from 'react';
import renderer from 'react-test-renderer';
import Layer from '../../../src/components/Layer/Layer';
import layerData from '../../fixtures/layers.json';

describe('Layer', () => {
    const onLayerChange = jest.fn();
    const layer = 'test_layer';
    it('Layer renders each layer indicator', () => {
        const component = renderer.create(
            <Layer
                onLayerChange={onLayerChange}
                key={layer}
                mapTargetId={'map-1'}
                layer={layer}
                layerData={layerData}
            />);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
