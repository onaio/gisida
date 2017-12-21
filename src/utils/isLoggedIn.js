import Cookie from 'js-cookie';

const isLoggedIn = function isLoggedIn() {
  return Cookie.get('dsauth') === 'true';
};

export default isLoggedIn;
