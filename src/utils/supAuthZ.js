import { files } from './files';
import { onaAPI } from './../connectors/ona-api/api';

class SupAuthZ {
  token;
  pk;
  authConfig;

  // Pass in APP as config
  constructor(config) {
    this.config = { ...config };
    this.pk = this.config.pk;
  }

  // Method called from callback to initiate Promise chain - willAuthorize is optional
  authorizeUser(accessToken, willAuthorize) {
    this.token = accessToken;
    return new Promise((resolve) => {
      this.getUser()
        .then(this.getAuthConfig)
        .then((willAuthorize || this.willAuthorize))
        .then(res => resolve(res));
    });
  }

  // default method of checking auth.json for Site, View, and Layer access rights
  willAuthorize() {
    const self = this;
    // check user ID against AUTH Config and dispatch Actions
    // if pass, update state of authorization
    // if fail, throw error
  }

  // Promise Methods for Fetching local files and API Responses
  getUser() {
    const self = this;
    // make api call to get user
    return new Promise((resolve, reject) =>
      onaAPI({ token: self.token, endpoint: 'user' }, (res) => {
        self.user = { ...res };
        resolve(res);
      }));
  }

  getAuthConfig(pk) {
    if (typeof pk === 'string') {
      return this.getLocalAuthConfig(pk);
    } else if (typeof pk !== 'undefined') {
      return this.getMediaAuthConfig(pk);
    }
    return false;
  }
  getLocalAuthConfig(path) {
    const self = this;
    return new Promise((resolve, reject) => {
      const callback = (res) => {
        self.authConfig = { ...res };
        resolve(res);
      };
      if (path.indexOf('.csv') !== -1) {
        return files.loadCSV(path, callback);
      }
      return files.loadJSON(path, callback);
    });
  }
  getMediaAuthConfig() {
    const self = this;
    return new Promise((resolve, reject) =>
      onaAPI({
        token: self.token,
        endpoint: 'media',
        extraPath: `/${self.pk}`,
      }, (res) => {
        resolve(res);
      }));
  }
}

export default SupAuthZ;
