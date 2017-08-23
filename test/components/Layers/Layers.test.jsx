import React from 'react';
import renderer from 'react-test-renderer';
import Layers from '../../../src/components/Layers/Layers';
import layerData from '../../fixtures/layers.json';

describe('Layers', () => {
  const layers = ['test_layer'];
  const onLayerChange = jest.fn();

  it('Layers renders indicators', () => {
    const component = renderer.create(
      <Layers
        onLayerChange={onLayerChange}
        mapTargetId={'map-1'}
        layers={layers}
        layerData={layerData}
        sector='sector'
        defaultView = 'test'
      />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
