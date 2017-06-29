import React from 'react';
import renderer from 'react-test-renderer';
import StyleSelector from '../../../../src/components/Controls/StyleSelector/StyleSelector';
import styles from '../../../fixtures/styles.json';

describe('StyleSelector', () => {
    it('StyleSelector renders map style icon and options', () => {
        const changeStyle = jest.fn();
        const style = 'test://test-style';
        const component = renderer.create(
            <StyleSelector style={style} styles={styles} />);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
