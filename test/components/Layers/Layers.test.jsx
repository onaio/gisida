import React from 'react';
import renderer from 'react-test-renderer';
import Layers from '../../../src/components/Layers/Layers';

describe('Layers', () => {
  it('Layers renders indicators', () => {

    const layers = shallow(<Layers layers={['name 1', 'name 2', 'name 3']} />);

      const component = renderer.create(<Layers />);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
});