export const layer1 = 'wfp-safetynets-received-cash-2020';
export const layer2 = 'wfp-safetynets-paid-tax-2020';
export const layerObj1 = {
  label: 'WFP Safety Nets: Percentage Received Cash:',
  source: {
    type: 'vector',
    data: {
      type: 'superset',
      'slice-id': 9831,
    },
    layer: 'banadir_districts-bgw7ky',
    url: 'mapbox://ona.c6t1mf7g',
    join: ['district_id', 'district_id'],
  },
  location: {
    zoom: 12.624128925301363,
    center: {
      lng: 45.33207821,
      lat: 2.047033986,
    },
  },
  type: 'circle',
  property: 'received_cash',
  'radius-range': ['12', '15', '18'],
  categories: {
    breaks: 'no',
    color: ['#f03b20', '#feb24c', '#2ca25f'],
    limit: [84, 95, 1000],
    label: ['below 85%', '85 - 95%', 'above 95%'],
  },
  labels: {
    data: 'data/banadir_districts.csv',
    label: '<b>{{received_cash}}</b>%',
    join: ['district_id', 'district_id'],
    coordinates: ['longitude', 'latitude'],
    minZoom: 4.5,
    height: 30,
    width: 30,
    offset: [-15, -5],
  },
  aggregate: {
    timeseries: {
      field: 'week_year',
    },
    filter: ['region_name', 'district', 'partner'],
    'filter-label': ['Region', 'District', 'Partner'],
    'sub-filter': ['', '', ''],
    'accepted-filter-values': ['all', 'all', 'all'],
    'accepted-sub-filter-values': ['', '', ''],
    'filter-type': ['vBool', 'vBool', 'vBool'],
  },
  popup: {
    header: 'district',
    body:
      '<p style=text-align:left;><b>Proportion Receiving Cash:</b> {{received_cash}}%<br><b>Total who Answered Call: </b>{{total_called}}<br><b>Total who Received Cash: </b>{{got_cash}}<span style=float:right;>',
  },
  visible: true,
  credit: 'WFP Safety Nets',
};

export const layerObj2 = {
  label: 'WFP Safety Nets: Percentage Who Paid Contribution:',
  source: {
    type: 'vector',
    data: {
      type: 'superset',
      'slice-id': 9831,
    },
    layer: 'banadir_districts-bgw7ky',
    url: 'mapbox://ona.c6t1mf7g',
    join: ['district_id', 'district_id'],
  },
  location: {
    zoom: 12.624128925301363,
    center: {
      lng: 45.33207821,
      lat: 2.047033986,
    },
  },
  type: 'circle',
  property: 'paid_tax_commission',
  'radius-range': ['12', '15', '18'],
  categories: {
    breaks: 'no',
    color: ['#2ca25f', '#feb24c', '#f03b20'],
    limit: [9, 20, 1000],
    label: ['below 10%', '10 - 20%', 'above 20%'],
  },
  labels: {
    data: 'data/banadir_districts.csv',
    label: '<b>{{paid_tax_commission}}</b>%',
    join: ['district_id', 'district_id'],
    coordinates: ['longitude', 'latitude'],
    minZoom: 4.5,
    height: 30,
    width: 30,
    offset: [-15, -5],
  },
  aggregate: {
    timeseries: {
      field: 'week_year',
    },
    filter: ['region_name', 'district', 'partner'],
    'filter-label': ['Region', 'District', 'Partner'],
    'sub-filter': ['', '', ''],
    'accepted-filter-values': ['all', 'all', 'all'],
    'accepted-sub-filter-values': ['', '', ''],
    'filter-type': ['vBool', 'vBool', 'vBool'],
  },
  popup: {
    header: 'district',
    body:
      '<p style=text-align:left;><b>Proportion Paying Contribution:</b> {{paid_tax_commission}}%<br><b>Total who Answered Call: </b>{{total_called}}<br><b>Total who Paid Tax: </b>{{paid_tax}}<span style=float:right;>',
  },
  visible: false,
  credit: 'WFP Safety Nets',
};

export const layerGroup = {
  'Safety Nets Cash Distribution - 2020': [layer1, layer2],
};
