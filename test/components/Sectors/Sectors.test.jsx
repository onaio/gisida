import React from 'react';
import renderer from 'react-test-renderer';
import Sectors from '../../../src/components/Sectors/Sectors';

describe('Sectors', () => {
    it('Sectors renders sectors.json clusters', () => {
        const component = renderer.create(<Sectors />);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
