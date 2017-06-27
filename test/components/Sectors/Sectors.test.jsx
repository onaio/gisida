import React from 'react';
import renderer from 'react-test-renderer';
import Sectors from '../../../src/components/Sectors/Sectors';
import layerData from '../../fixtures/layers.json';

describe('Sectors', () => {
    const toggleSectors = jest.fn();
    const sectorClick = jest.fn();
    const changeLayer = jest.fn();
    const sectorData = [{ sector: 'Sample Sector', layers: ['test_layer'] }];
    it('Sectors renders sectors.json clusters', () => {
        const component = renderer.create(
            <Sectors
                sectorMenuId="sector-menu-1"
                mapTargetId="map-1"
                onToggleSectors={toggleSectors}
                onSectorClick={sectorClick}
                onLayerChange={changeLayer}
                sectorData={sectorData}
                layerData={layerData}
            />);
        const json = component.toJSON();
        expect(json).toMatchSnapshot();
    });
});
