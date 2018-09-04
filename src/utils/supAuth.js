import * as files from './files';
import ONA from '../connectors/ona-api/ona';

// Default Authentications
export const defaultOauthC = () => !!localStorage.getItem('access_token');

export const defaultSupAuthC = (User, AuthConfig) => {
  let user;
  let authConfig;
  // Define user
  if (!User && !localStorage.getItem('user')) {
    return false;
  } else if (!User) {
    user = JSON.parse(localStorage.getItem('user'));
  } else {
    user = { ...User };
  }

  // Define authConfig
  if (!AuthConfig && !localStorage.getItem('authConfig')) {
    return false;
  } else if (!AuthConfig) {
    authConfig = JSON.parse(localStorage.getItem('authConfig'));
  } else {
    authConfig = { ...AuthConfig };
  }

  if (defaultOauthC()) {
    if (!authConfig || !authConfig.SITE || (authConfig.SITE && authConfig.SITE === 'public')) {
      return true;
    }
    if (Array.isArray(authConfig.SITE)) {
      return authConfig.SITE.includes(user.username);
    }
  }
  return false;
};

export const defaultUnSupAuthZ = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('user');
  localStorage.removeItem('authConfig');
};

class SupAuthZ {
  static instance;

  token;
  pk;
  authConfig;

  defaultOauthC = defaultOauthC;
  defaultSupAuthC = defaultSupAuthC;
  defaultUnSupAuthZ = defaultUnSupAuthZ;

  // Pass in APP as config
  constructor() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = this;
  }

  // Method called from callback to initiate Promise chain - willAuthorize is optional
  async authorizeUser(APP, accessToken, willAuthorize) {
    this.config = APP;
    this.token = accessToken;
    localStorage.setItem('access_token', accessToken);
    this.user = await this.getUser();
    localStorage.setItem('user', JSON.stringify(this.user));
    if (!this.config.authConfig) {
      return true;
    }

    // Fetch Auth Config
    this.authConfig = await this.getAuthConfig(this.config.authConfig);
    if (this.authConfig) {
      localStorage.setItem('authConfig', JSON.stringify(this.authConfig));
    }

    if (willAuthorize) {
      return willAuthorize();
    }

    // Return results of willAuthorize function
    const isAuth = this.defaultSupAuthC(this.user, this.authConfig);
    // Remove access_token from localMemory
    if (!isAuth) {
      this.defaultUnSupAuthZ();
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
    return (typeof pk === 'string')
      ? SupAuthZ.getLocalAuthConfig(pk)
      : this.getMediaAuthConfig(pk);
  }
  static async getLocalAuthConfig(path) {
    return (path.indexOf('.csv') !== -1)
      ? files.loadCSV(path, res => res)
      : files.fetchJSON(path);
  }
  async getMediaAuthConfig(pk) {
    return ONA.API.fetch({
      token: this.token,
      endpoint: 'media',
      extraPath: `/${pk}`,
    }, res => res);
  }

  defaultSupViewAuthC = (path) => {
    // Define this.user
    if (!this.user && !localStorage.getItem('user')) {
      this.defaultUnSupAuthZ();
      return false;
    } else if (!this.user) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }

    // Define this.authConfig
    if (!this.authConfig && !localStorage.getItem('authConfig')) {
      this.defaultUnSupAuthZ();
      return false;
    } else if (!this.authConfig) {
      this.authConfig = JSON.parse(localStorage.getItem('authConfig'));
    }

    const { user, authConfig } = this;
    if (!authConfig) return true;
    const { VIEWS } = authConfig;

    // pass authentication if no path in config or if path is public
    if (!VIEWS || !VIEWS[path] || VIEWS[path] === 'public') {
      return true;
    }

    // Check for user.username in list of authorized users
    if (Array.isArray(VIEWS[path])) {
      const isAuth = VIEWS[path].includes(user.username);
      if (!isAuth) {
        this.defaultUnSupAuthZ();
      }
      return isAuth;
    }
    this.defaultUnSupAuthZ();
    return false;
  }
}

export default new SupAuthZ();
