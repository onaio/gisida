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

export const layerCategories2 = [
  {
    category: 'Infrastructure',
    layers: [
      {
        'Roads, Sites and Settlements': {
          category: 'Roads, Sites and Settlements',
          layers: [
            {
              id: 'road-networks',
              category: 'Infrastructure',
              label: 'Road Networks',
            },
            {
              id: 'nutrition-sites',
              category: 'Infrastructure',
              label: 'Nutrition Sites - Cluster',
            },
            {
              id: 'towns',
              category: 'Infrastructure',
              label: 'Towns & Cities',
            },
            {
              id: 'settlements',
              category: 'Infrastructure',
              label: 'Settlements',
            },
          ],
          parent: 'Infrastructure',
        },
      },
      {
        Education: {
          category: 'Education',
          layers: [
            {
              id: 'combined-schools-layer',
              label:
                'Schools Supported Through A Central DFID Education Programme & Girls Education Challenge (GEC) Fund',
            },
          ],
          parent: 'Infrastructure',
        },
      },
    ],
  },
];
