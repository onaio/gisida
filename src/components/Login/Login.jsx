import React from 'react';
import Cookie from 'js-cookie';
import PropTypes from 'prop-types';

require('./Login.scss');


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loginError: false };
  }

  handleLogin(password) {
    if (password === this.props.appConfig.password) {
      Cookie.set('dsauth', true);
      location.reload();
    } else {
      this.setState({ loginError: true });
    }
  }

  render() {
    return (
      <div className="login">
        <div>
          <form className="login-form" onSubmit={(e) => { e.preventDefault(); this.handleLogin(this.password.value); }}>
            <div className="form-group">
              <div className="brand-login" />
              { this.state.loginError === true ? <div className="alert alert-danger">Incorrect password.</div> : null }
              <label htmlFor="password">Enter your Password</label>
              <input className="form-control" type="password" ref={(input) => { this.password = input; }} autoFocus />
            </div>
            <button className="btn btn-default center-block" type="submit">Log In</button>
          </form>
        </div>
      </div>);
  }
}

export default Login;

Login.propTypes = {
  appConfig: PropTypes.string.isRequired,
};
