# New Project Checklist
Before starting a new Gisida project there are a few requirements to have in mind and on hand:

1. Project name
2. Site title
3. Logo (optional)
4. Geometries
5. Data
6. Layers and Sections

### Project name
This should be a simple yet descriptive name for the project. This will be used as the name of your new repository so it should be all lowercase letters and no spaces.

### Site title
This title will be displayed as the name of the webpage and should be human readable.

### Logo (optional)
By default the gisida-react TitleBar component will render a logo image based on the value of `APP.appIcon` from the site-config file. All image types supported by major browsers acceptable and square logos are highly recommended.

### Geometries
Rendering Gisida maps requires valid geometries in order to plot marks, these geometries are most commonly administrative boundaries and collections of points. Currently we support GEOJSON and Mapbox Tilesets as valid geometry sources; GEOJSON can be used to generate Tilesets and Shapefiles can be used to manually generate GEOJSON.

### Data
Data can come in many formats from many sources and is required to encode / visualize information and render more than simple line and symbol layers. Often data will be included in the geometries, and additional / supplemental data can be loaded and joined to specific geometric features.

### Layers and Sections
Knowing which geometries and which data need to be displayed is the first step in configuring layers and rendering a menu with nestable groups of layers.
