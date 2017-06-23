import React from 'react';
import renderer from 'react-test-renderer';
import TimeSeriesSlider from '../../../../src/components/Controls/TimeSeriesSlider/TimeSeriesSlider';

describe('TimeSeriesSlider', () => {
    it('TimeSeriesSlider renders time series slider', () => {
        const component = renderer.create(<TimeSeriesSlider />);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});