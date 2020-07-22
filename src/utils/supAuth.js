/* eslint-disable arrow-parens */
/* eslint-disable comma-dangle */
import * as files from './files';
import ONA from '../connectors/ona-api/ona';
import defaultUnSupAuthZ from './../connectors/ona-api/common';

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

class SupAuthZ {
  static instance;

  token;
  pk;
  authConfig;
  endpoint = '';

  // Pass in APP as config
  constructor() {
    if (this.instance) {
      return this.instance;
    }
    this.defaultOauthC = defaultOauthC;
    this.defaultSupAuthC = defaultSupAuthC;
    this.defaultUnSupAuthZ = defaultUnSupAuthZ;
    this.instance = this;
  }

  // Method called from callback to initiate Promise chain - willAuthorize is optional
  async authorizeUser(APP, AUTH, accessToken, willAuthorize) {
    this.config = APP;
    this.auth = AUTH;
    this.token = accessToken;
    localStorage.setItem('access_token', accessToken);
    this.user = await this.getUser();
    localStorage.setItem('user', JSON.stringify(this.user));
    this.endpoint = APP.authConfigApiMap || 'metadata';
    if (!this.config.authConfig) {
      return true;
    }

    // Fetch Auth Config
    this.authConfig = await this.getAuthConfig(this.config.authConfig);
    if (this.authConfig) {
      localStorage.setItem('authConfig', JSON.stringify(this.authConfig));
    } else {
      return false;
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

    return {
      isAuth,
      user: this.user,
      authConfig: this.authConfig,
    };
  }

  // Promise Methods for Fetching local files and API Responses
  async getUser() {
    const self = this;
    const User = await ONA.API.fetch(
      {
        token: self.token,
        endpoint: 'user',
        base: self.auth && self.auth.apiBase,
        method: 'POST',
      },
      user => user
    );
    return User;
  }
  async getAuthConfig(pk) {
    return typeof pk === 'string' ? SupAuthZ.getLocalAuthConfig(pk) : this.getMediaAuthConfig(pk);
  }
  static async getLocalAuthConfig(path) {
    return path.indexOf('.csv') !== -1
      ? files.fetchCSV(path).then(res => this.parseCSVauth(res))
      : files.fetchJSON(path);
  }
  async getMediaAuthConfig(pk, token = this.token, endpoint = this.endpoint) {
    const self = this;
    localStorage.setItem('csvId', pk);
    return ONA.API.fetch({
      // token: this.token,
      token,
      endpoint,
      mimeType: 'text/csv',
      extraPath: `${pk}.csv`,
      base: self.auth && self.auth.apiBase,
    }).then(({ user }) => {
      if (user.length === 0 || (user.detail && user.detail === 'Not found.')) {
        return false;
      }
      const auth = this.parseCSVauth(user);
      return auth;
    });
  }
  parseCSVauth(res) {
    // Define default authConfig
    const authConfig = {
      SITE: [],
      VIEWS: {},
      LAYERS: {},
    };

    let user;
    let Prop;
    let prop;
    let propName;
    let dashboardProp;
    let layerName;
    let propKeys;

    // Loop through all auth user rows
    for (let u = 0; u < res.length; u += 1) {
      user = { ...res[u] };

      propKeys = Object.keys(user);

      // Loop through all Auth properties from form acknowledge question types
      for (let p = 0; p < propKeys.length; p += 1) {
        Prop = propKeys[p];

        // Check for Site Wide Auth (exclude SITE question/column for public sites)
        if (Prop === 'SITE' && user[Prop] === 'OK') {
          authConfig.push(user.username);

          // Check User Auth Prop for View specific Auth (exclude Public Views)
        } else if (Prop.indexOf('VIEW.') === 0 && user[Prop] === 'OK') {
          // Define actual View name
          [, propName, dashboardProp] = Prop.split('.');
          // push users for various dashboards
          if (propName === 'dashboards'){
            if (!authConfig.VIEWS[`${propName}.${dashboardProp}`]) {
              authConfig.VIEWS[`${propName}.${dashboardProp}`] = [];
            }
            authConfig.VIEWS[`${propName}.${dashboardProp}`].push(user.username);
          }
          if (propName === 'Iframe') {
            if (!authConfig.VIEWS[propName]) {
              authConfig.VIEWS[propName] = [];
            }
            // Add username to list of authorized users
            authConfig.VIEWS[propName].push(user.username);
          } else {
            // Reference site config to match VIEWS to URI Paths
            prop = this.config['private-views'] && this.config['private-views'][propName];
            // Check View exists in authConfig, if not add it
            if (prop && !authConfig.VIEWS[prop]) authConfig.VIEWS[prop] = [];
            // Add username to list of authorized users
            if (prop) authConfig.VIEWS[prop].push(user.username);
          }
          // Check User Auth Prop for Layer specific Auth (exclude Public Layers)
        } else if (Prop.indexOf('LAYER.') === 0 && user[Prop] === 'OK') {
          // Define actual Layer name
          [, layerName] = Prop.split('.');
          // Check Layer exists in authConfig, if not add it
          if (!authConfig.LAYERS[layerName]) {
            authConfig.LAYERS[layerName] = [];
          }
          // Add username to list of authorized users
          authConfig.LAYERS[layerName].push(user.username);
        }
      }
    }

    // if SITE is empty, assume the site should be public
    if (!authConfig.SITE.length) {
      authConfig.SITE = 'public';
    }

    return authConfig;
  }

  defaultSupViewAuthC = path => {
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
  };
}

export default new SupAuthZ();
