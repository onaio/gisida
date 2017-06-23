import React from 'react';
import renderer from 'react-test-renderer';
import StyleSelector from '../../../../src/components/Controls/StyleSelector/StyleSelector';

describe('StyleSelector', () => {
    it('StyleSelector renders map style icon and options', () => {
        const component = renderer.create(<StyleSelector />);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});