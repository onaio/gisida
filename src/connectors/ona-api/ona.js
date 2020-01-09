// ONA CONNECTOR
import { API } from './api';
import { Oauth2 } from './auth';

const ONA = {
  API: new API(),
  Oauth2: new Oauth2(),
};

export default ONA;
