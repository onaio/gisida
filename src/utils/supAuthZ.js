import * as files from './files';
import ONA from './../connectors/ona-api/ona';

class SupAuthZ {
  token;
  pk;
  authConfig;

  // Pass in APP as config
  constructor(config) {
    this.config = { ...config }; // APP site-config
    this.pk = this.config.pk;
  }

  // Method called from callback to initiate Promise chain - willAuthorize is optional
  async authorizeUser(APP, accessToken, willAuthorize) {
    this.config = APP;
    this.token = accessToken;
    this.user = await this.getUser();
    if (!this.config.authConfig) {
      return true;
    }
    // Fetch Auth Config
    this.authConfig = await this.getAuthConfig(this.config.authConfig);

    // Return results of willAuthorize function
    return (willAuthorize || this.willAuthorize)();
  }

  // default method of checking auth.json for Site, View, and Layer access rights
  willAuthorize() {
    const self = this;
    return false; // => will always fail auth
  }

  // Promise Methods for Fetching local files and API Responses
  async getUser() {
    const self = this;
    // make api call to get user
    const User = await ONA.API.fetch(
      { token: self.token, endpoint: 'user' },
      ({ user }) => user,
    );
    return User;
  }
  async getAuthConfig(pk) {
    const config = (typeof pk === 'string')
      ? await SupAuthZ.getLocalAuthConfig(pk)
      : await this.getMediaAuthConfig(pk);
    return config;
  }
  static async getLocalAuthConfig(path) {
    const config = (path.indexOf('.csv') !== -1)
      ? await files.loadCSV(path, res => res)
      : await files.loadJSON(path, res => res);
    return config;
  }
  async getMediaAuthConfig(pk) {
    const config = ONA.API.fetch({
      token: this.token,
      endpoint: 'media',
      extraPath: `/${pk}`,
    }, res => res);
    return config;
  }
}

export default SupAuthZ;
