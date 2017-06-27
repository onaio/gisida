import React from 'react';
import Cookie from 'js-cookie';

require('./Menu.scss');

const logOut = (e) => {
  e.preventDefault();
  Cookie.set('dsauth', false);
  location.reload();
};

const Menu = ({ toggleSingleScreen = f => f, toggleSplitScreen = f => f, appConfig = f => f }) =>
  (<div className="menu">
    <div className="brand">
      <img src={appConfig.appIcon} alt="UKAID" className="brand-icon" />
      <div className="brand-title">
        <span className="white">{appConfig.appName}</span>&nbsp;&nbsp; {appConfig.appNameDesc}</div>
    </div>
    <ul>
      <li><a href="#" onClick={toggleSingleScreen}><span className="glyphicon glyphicon-home" /></a></li>
      <li><a href="#" onClick={toggleSplitScreen}><span className="glyphicon glyphicon-th-large" /></a></li>
    </ul>
    <a className="sign-out" onClick={logOut} role="button" tabIndex={0}><span className="glyphicon glyphicon-log-out" /></a>
  </div>);

Menu.propTypes = {
  toggleSingleScreen: React.PropTypes.func.isRequired,
  toggleSplitScreen: React.PropTypes.func.isRequired,
  appConfig: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
};

export default Menu;
