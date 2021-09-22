export const filtersOutputData = [
  {
    'NU_indicators/district_label': {
      filterValues: { Kisumu: 1, Machakos: 1 },
      label: 'District',
      type: 'vector',
    },
    'NU_indicators/region_label': {
      filterValues: { Eastern: 1, Nyanza: 1 },
      label: 'Region',
      type: 'vector',
    },
    'Type of site': { filterValues: { Clinic: 2 }, label: 'Type of Site', type: 'vector' },
    acronym: {
      filterType: 'multi',
      filterValues: { UNICEF: 2, WVI: 2 },
      label: 'Acronym',
      type: 'vector',
    },
    no_of_reports: {
      filterValues: { '6': 1, '7': 1 },
      label: 'No of Reports',
      quantitativeValues: [6, 7],
      type: 'vector',
    },
    site_activity: {
      filterType: 'multi',
      filterValues: { BSFP: 1, IYCF: 0, MCHN: 0, Micronutrient: 0, OTP: 1, SC: 0, TSFP: 2 },
      label: 'Site Activity',
      type: 'vector',
    },
  },
  {
    cp_service: { filterValues: {}, label: 'CP Service', type: 'vector' },
    district: { filterValues: {}, label: 'District', type: 'vector' },
    month: { filterValues: {}, label: 'Month', type: 'vector' },
    partner_category: { filterValues: {}, label: 'Partner Category', type: 'vector' },
    partner_org: { filterValues: {}, label: 'Partner Organisation', type: 'vector' },
    region: { filterValues: {}, label: 'Region', type: 'vector' },
    state: { filterValues: {}, label: 'State', type: 'vector' },
    subservices: { filterValues: {}, label: 'CP Sub-service', type: 'vector' },
    year: { filterValues: {}, label: 'Year', type: 'vector' },
  },
];

export const processedFiltersData = [
  {
    'NU_indicators/region_label': 'Eastern',
    'NU_indicators/district_label': 'Machakos',
    'Type of site': 'Clinic',
    no_of_reports: 6,
    site_activity: 'OTP TSFP',
    acronym: 'UNICEF,WVI',
  },
  {
    'NU_indicators/region_label': 'Nyanza',
    'NU_indicators/district_label': 'Kisumu',
    'Type of site': 'Clinic',
    no_of_reports: 7,
    site_activity: 'TSFP BSFP',
    acronym: 'UNICEF,WVI',
  },
];
