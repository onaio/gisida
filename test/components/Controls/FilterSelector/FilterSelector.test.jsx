import React from 'react';
import renderer from 'react-test-renderer';
import FilterSelector from '../../../../src/components/Controls/FilterSelector/FilterSelector';

describe('FilterSelector', () => {
    it('FilterSelector renders filter options', () => {
        const component = renderer.create(<FilterSelector />);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});