import React from 'react';
import renderer from 'react-test-renderer';
import Filter from '../../../src/components/Filter/Filter';

describe('Filter', () => {
  const onToggleView = jest.fn();
  const onFilterSelect = jest.fn();
  const filter = 'test_filter';
  const view = 'test_view';
  const headers = ['test_headers'];
  const sector = 'test_sector';
  const checked = ['test_checked'];
  const currentView = 'test_currentView';
  it('Filter renders each filter', () => {
    const component = renderer.create(
      <Filter
        onToggleView={onToggleView}
        onFilterSelect={onFilterSelect}
        filter={filter}
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
