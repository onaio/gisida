export const LAYERS = {
  layers: [
    {
      'Place Labels': ['region-labels', 'district-labels', 'banadir-labels'],
    },
    {
      Boundaries: ['region-boundaries', 'district-boundaries'],
    },
  ],
  groups: {
    'Boundaries & Labels': [
      {
        'Place Labels': ['region-labels', 'district-labels', 'banadir-labels'],
      },
      {
        Boundaries: ['region-boundaries', 'district-boundaries'],
      },
    ],
  },
};
export const layerCategories = [
  {
    category: 'Boundaries & Labels',
    layers: [
      {
        'Place Labels': {
          category: 'Place Labels',
          layers: [
            {
              category: 'Place Labels',
              id: 'region-labels',
              label: 'Region labels',
            },
            {
              category: 'Place Labels',
              id: 'district-labels',
              label: 'District labels',
            },
            {
              category: 'Place Labels',
              id: 'banadir-labels',
              label: 'Banadir labels',
            },
          ],
          parent: 'Boundaries & Labels',
        },
      },
      {
        Boundaries: {
          category: 'Boundaries',
          layers: [
            {
              category: 'Boundaries',
              id: 'region-boundaries',
              label: 'Region boundaries',
            },
            {
              category: 'Boundaries',
              id: 'district-boundaries',
              label: 'Districts boundaries',
            },
          ],
          parent: 'Boundaries & Labels',
        },
      },
    ],
  },
];
