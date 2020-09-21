export const layerObj1 = {
  label:
    'Number of children (under 18 years old) in affected areas provided with access to safe water and personal hygiene',
  source: {
    type: 'vector',
    data: {
      type: 'superset',
      'slice-id': 1607,
    },
    layer: 'zwe_adm2_district',
    url: 'mapbox://ona.62o31uy4',
    join: ['ADM2_EN', 'location'],
  },
  type: 'fill',
  property: 'unicef_results_agg',
  categories: {
    breaks: 'yes',
    color: 'Oranges',
    clusters: 5,
  },
  aggregate: {
    filter: ['location'],
    'accepted-filter-values': ['all'],
    'filter-label': ['District'],
    'filter-type': ['vBool'],
    customAggregation: true,
    type: 'sum',
    'group-by': 'location',
    'date-by': 'date',
    extraProps: ['date', 'unicef_results_agg'],
    timeseries: {
      type: 'cumulative',
      field: 'period',
    },
  },
  popup: {
    header: 'location',
    body:
      ' <p style=text-align:left;><b>Target:</b> {{target}}<br><b>UNICEF Results:</b> {{unicef_results_agg}}<br><b>Female:</b> {{female_agg}}<br><b>Male:</b> {{male_agg}}<br><b>Disabled:</b> {{disabled_agg}}</p>',
  },
  visible: true,
  credit: 'HPM',
  id: 'wash-ind1.json',
};

export const layerObj2 = {
  label:
    'Number of adults (18 years or older) provided with critical WASH-related information to prevent waterborne diseases',
  source: {
    type: 'vector',
    data: {
      type: 'superset',
      'slice-id': 1610,
    },
    layer: 'zwe_adm2_district',
    url: 'mapbox://ona.62o31uy4',
    join: ['ADM2_EN', 'location'],
  },
  type: 'fill',
  property: 'unicef_results_agg',
  categories: {
    breaks: 'yes',
    color: 'Oranges',
    clusters: 5,
  },
  aggregate: {
    filter: ['location'],
    'accepted-filter-values': ['all'],
    'filter-label': ['District'],
    'filter-type': ['vBool'],
    customAggregation: true,
    type: 'sum',
    'group-by': 'location',
    'date-by': 'date',
    extraProps: ['date', 'unicef_results_agg'],
    timeseries: {
      type: 'cumulative',
      field: 'period',
    },
  },
  popup: {
    header: 'location',
    body:
      ' <p style=text-align:left;><b>Target:</b> {{target}}<br><b>UNICEF Results:</b> {{unicef_results_agg}}<br><b>Female:</b> {{female_agg}}<br><b>Male:</b> {{male_agg}}<br><b>Disabled:</b> {{disabled_agg}}</p>',
  },
  visible: false,
  credit: 'HPM',
  id: 'wash-ind2.json',
};
