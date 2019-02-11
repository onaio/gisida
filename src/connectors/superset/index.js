import { API } from './api';

const processData = (res) => {
  return (res
    && res['form_data']
    && res['form_data'].data
    && res['form_data'].data.records
    && Array.isArray(res['form_data'].data.records)
    && [...res['form_data'].data.records])
  ;
}

const SUPERSET = {
  API: new API(),
  processData, 
};

export default SUPERSET;
