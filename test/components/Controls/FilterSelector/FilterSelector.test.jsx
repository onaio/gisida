import React from 'react';
import renderer from 'react-test-renderer';
import FilterSelector from '../../../../src/components/Controls/FilterSelector/FilterSelector';
import layerData from '../../../fixtures/layers.json';


describe('FilterSelector', () => {
    it('FilterSelector renders filter options', () => {
        const component = renderer.create(
            <FilterSelector
                filterData={jest.fn()}
                layerObj={layerData}
            />);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
