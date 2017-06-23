import React from 'react';
import renderer from 'react-test-renderer';
import Map from '../../../src/components/Map/Map';

describe('Map', () => {
    it('Map renders map component with visible layers', () => {
        const component = renderer.create(<Map />);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
