import React from 'react';
import renderer from 'react-test-renderer';
import Export from '../../../src/components/Export/Export';

describe('Export', () => {
    it('Export renders export icon and screen', () => {
        const component = renderer.create(<Export />);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
