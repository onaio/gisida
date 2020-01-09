import { history } from '../../helpers/history';
import { loginError, receiveLogin } from '../../store/actions/actions';
import api from './api';

// nonce random string to
// export const randomString = (length) => {
//   var bytes = new Uint8Array(length);
//   var random = window.crypto.getRandomValues(bytes);
//   var result = [];
//   var charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-._~'
//   random.forEach(function (c) {
//       result.push(charset[c % charset.length]);
//   });
//   return result.join('');
// }

// URL Constructor Reference - can be imported and/or encrypted
export const oauthURL = (clientID, callback, baseURL) => {
  // const authURL = {
  //   apiBase: 'https://api.ona.io',
  //   apiPath: '/o/authorize/',
  //   client_id: clientID,
  //   response_type: 'token',
  //   redirect_uri: callback,
  //   state: 'abc',
  //   scope: 'read',
  // };
  const apiBase = baseURL || 'https://api.ona.io/';
  const apiPath = 'o/authorize/';
  const responseType = 'token';
  const state = 'abc';
  const scope = 'read';

  return `${apiBase}${apiPath}?client_id=${clientID}&response_type=${responseType}&redirect_uri=${callback}&state=${state}&scope=${scope}`;
};

// Call /user API Endpoint to confirm ONA Oauth2 AuthZ
export const ONAoauth = (reqConfig, token, dispatch) => api(reqConfig).then(({ user, res }) => {
  if (!res.ok) {
    dispatch(loginError(user.detail));
    window.authRes = res;
    history.replace('/login');
  } else {
    try {
      localStorage.setItem('access_token', token);
    } catch (e) {
      //
    }
    dispatch(receiveLogin(user));
    history.replace('/');
  }
}).catch(err => console.log('Error: ', err));

export class Oauth2 {
  constructor() {
    this.getOauthURL = oauthURL;
    this.getUser = ONAoauth;
  }
}

export default {
  oauthURL,
  ONAoauth,
};
