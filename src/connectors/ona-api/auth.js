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
export const oauthURL = {
  apiBase: 'https://api.ona.io',
  apiPath: '/o/authorize/',
  client_id: 'CdJqBZYRVrbpnAu4JoYYFXFPQJa3xWi25oDPqnRY',
  response_type: 'token',
  redirect_uri: 'http://localhost:8080/callback',
  state: 'abc',
  scope: 'read',
};

// Call /user API Endpoint to confirm ONA Oauth2 AuthZ
export const ONAoauth = (reqConfig, token, dispatch) => api(reqConfig).then(({ user, res }) => {
  if (!res.ok) {
    dispatch(loginError(user.detail));
    console.log('!res.ok', user);
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

export default {
  oauthURL,
  ONAoauth,
};
