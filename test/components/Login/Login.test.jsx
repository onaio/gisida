import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../../../src/components/Login/Login';

describe('Login', () => {
    it('Login renders login screen', () => {
      const component = renderer.create(<Login appConfig={{password: "default"}}/>);
      const json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
});
