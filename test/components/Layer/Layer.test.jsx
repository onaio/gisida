import React from 'react';
import renderer from 'react-test-renderer';
import Layer from '../../../src/components/Layer/Layer';

describe('Layer', () => {
    it('Layer renders each layer indicator', () => {
        const component = renderer.create(<Layer />);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});