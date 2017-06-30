import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../../src/components/App/App';

describe('App', () => {
    it('App renders dashboard screen', () => {
        const component = renderer.create(<App />);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
