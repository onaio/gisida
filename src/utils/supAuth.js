import * as files from './files';
import ONA from '../connectors/ona-api/ona';

// Default Authentications
export const defaultOauthC = () => !!localStorage.getItem('access_token');

export const defaultSupAuthC = () => {
  if (defaultOauthC()) {
    // analyize default AUTH config from the AUTH.json
    return true;
  }
  return false;
};

export const defaultUnSupAuthZ = () => {
  localStorage.removeItem('access_token');
};

class SupAuthZ {
  token;
  pk;
  authConfig;

  defaultOauthC = defaultOauthC;
  defaultSupAuthC = defaultSupAuthC;
  defaultUnSupAuthZ = defaultUnSupAuthZ;

  // Pass in APP as config
  constructor(config) {
    this.config = { ...config }; // APP site-config
    this.pk = this.config.pk;
  }

  // Method called from callback to initiate Promise chain - willAuthorize is optional
  async authorizeUser(APP, accessToken, willAuthorize) {
    this.config = APP;
    this.token = accessToken;
    localStorage.setItem('access_token', accessToken);
    this.user = await this.getUser();
    if (!this.config.authConfig) {
      return true;
    }
    // Fetch Auth Config
    this.authConfig = await this.getAuthConfig(this.config.authConfig);

    if (willAuthorize) {
      return willAuthorize();
    }

    // Return results of willAuthorize function
    const isAuth = this.defaultSupAuthC();
    // Remove access_token from localMemory
    if (!isAuth) {
      localStorage.removeItem('access_token');
    }

    return isAuth;
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
