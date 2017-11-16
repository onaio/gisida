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
    if (this.props.appConfig.password.includes(password)) {
      Cookie.set('dsauth', true);
      location.reload();
    } else {
      this.setState({ loginError: true });
    }
  }

  render() {
    return (
      <div className="login">
        <form className="login-form" onSubmit={(e) => { e.preventDefault(); this.handleLogin(this.password.value); }}>
          <div className="form-group">
            <div className={this.props.appConfig.defaultView === 'framework' ? 'framework-brand-login' : 'brand-login'} style={{ background: `url(${this.props.appConfig.loginIcon}) no-repeat center center` }} />
            { this.state.loginError === true ? <div className="alert alert-danger">Incorrect password.</div> : null }
            <label className="password-label" htmlFor="password">Enter your password</label>
            <input className="form-control" type="password" ref={(input) => { this.password = input; }} autoFocus />
          </div>
          <button className="btn btn-default center-block" type="submit">Log In</button>
        </form>
        <div className="funded-by">This dashboard is funded by:</div>
        <div className="donor-logos">
          <span className="donors">
            <img src="/assets/img/dfid_logo.jpg" alt="DFID" />
          </span>
          <span className="donors">
            <img src="/assets/img/danida_logo.jpg" alt="DANIDA" />
          </span>
        </div>
      </div>);
  }
}

export default Login;

Login.propTypes = {
  appConfig: PropTypes.objectOf(PropTypes.any).isRequired,
};
