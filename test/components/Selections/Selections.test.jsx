import React from 'react';
import renderer from 'react-test-renderer';
import Selections from '../../../src/components/Selections/Selections';

describe('Selections', () => {
  const UIfilters = ['test_filters'];
  it('Selections renders filter selections', () => {
    const component = renderer.create(
      <Selections
        UIfilters={UIfilters}
      />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
