import React from 'react';
import renderer from 'react-test-renderer';
import jQuery from 'jquery';
import Framework from '../../../src/components/Framework/Framework';
import sectorData from '../../fixtures/sectors.json';
import layerData from '../../fixtures/layers.json';

window.$ = jQuery;

describe('Framework', () => {
  const onToggleView = jest.fn();
  const onViewClick = jest.fn();
  const onSectorClick = jest.fn();
  it('Framework renders each Framework view', () => {
    const component = renderer.create(
      <Framework
        onToggleView={onToggleView}
        onViewClick={onViewClick}
        onSectorClick={onSectorClick}
        layerData={[layerData]}
        sectorData={[sectorData]}
/>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
