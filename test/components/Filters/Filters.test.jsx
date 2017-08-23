import React from 'react';
import renderer from 'react-test-renderer';
import Filters from '../../../src/components/Filters/Filters';

describe('Filters', () => {
  const onToggleView = jest.fn();
  const onFilterSelect = jest.fn();
  const filters = ['test_filters'];
  const view = 'test_view';
  const headers = ['test_headers'];
  const sector = 'test_sector';
  const checked = ['test_checked'];
  const currentView = 'test_currentView';
  it('Filters renders each filters', () => {
    const component = renderer.create(
      <Filters
        onToggleView={onToggleView}
        onFilterSelect={onFilterSelect}
        filters={filters}
        view={view}
        headers={headers}
        sector={sector}
        checked={checked}
        currentView={currentView}
        mapTargetId={'map-1'}
      />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
