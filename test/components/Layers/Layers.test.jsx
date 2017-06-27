import React from 'react';
import renderer from 'react-test-renderer';
import Layers from '../../../src/components/Layers/Layers';

describe('Layers', () => {
  let layers;
  beforeEach(() => {
    layers = shallow(<Layers layers={['layer-1', 'layer-2', 'layer-3']} />);
  });
  it('Layers renders indicators', () => {
    const component = renderer.create(<Layers />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});