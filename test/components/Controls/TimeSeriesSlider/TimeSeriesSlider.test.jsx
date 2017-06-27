import React from 'react';
import renderer from 'react-test-renderer';
import TimeSeriesSlider from '../../../../src/components/Controls/TimeSeriesSlider/TimeSeriesSlider';

describe('TimeSeriesSlider', () => {
    const periods = ['Week 1', 'Week 2', 'Week 3'];
    it('TimeSeriesSlider renders time series slider', () => {
        const component = renderer.create(<TimeSeriesSlider mapId={1} periods={periods} />);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
