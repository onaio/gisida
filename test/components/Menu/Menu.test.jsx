import React from 'react';
import renderer from 'react-test-renderer';
import Menu from '../../../src/components/Menu/Menu';

describe('Menu', () => {
    it('Menu renders application details', () => {
        const component = renderer.create(<Menu />);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
