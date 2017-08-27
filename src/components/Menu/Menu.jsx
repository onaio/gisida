import React from 'react';
import PropTypes from 'prop-types';
import Cookie from 'js-cookie';

require('./Menu.scss');

const logOut = (e) => {
  e.preventDefault();
  Cookie.set('dsauth', false);
  location.reload();
};

const Menu = ({
  toggleSingleScreen = f => f,
  toggleSplitScreen = f => f,
  appConfig = f => f,
  onToggleSectors = f => f,
  }) =>
  (appConfig.defaultView === 'framework' ?
    (<div className="framework-menu">
      <div className="framework-brand">
        <a
          href="#"
          onClick={e => onToggleSectors(e)}
          className="hamburger-menu"
        >
          <span className="glyphicon glyphicon-list" /></a>
        <img src={appConfig.appIcon} alt={appConfig.appName} className="framework-brand-icon" />
        <div className="framework-brand-title">
          <span className="framework-white">{appConfig.appName}</span>&nbsp;&nbsp; {appConfig.appNameDesc}</div>
      </div>
      <div className="framework-reports"><a>How do I use the site?</a>
        <div id="reports-divider"> | </div>
        <a target="_blank" rel="noopener noreferrer" href="http://regionaldss.org/publications/redss-solutions-statements">Download</a></div>
      <a className="framework-sign-out" onClick={logOut} role="button" tabIndex={0}><span className="glyphicon glyphicon-log-out" /></a>
    </div>)
    :
    (<div className="menu">
      <div className="brand">
        <img src={appConfig.appIcon} alt={appConfig.appName} className="brand-icon" />
        <div className="brand-title">
          <span className="white">{appConfig.appName}</span>&nbsp;&nbsp; {appConfig.appNameDesc}</div>
      </div>
      <ul>
        <li><a href="#" onClick={toggleSingleScreen}><span className="glyphicon glyphicon-home" /></a></li>
        <li><a href="#" onClick={toggleSplitScreen}><span className="glyphicon glyphicon-th-large" /></a></li>
      </ul>
      <a className="sign-out" onClick={logOut} role="button" tabIndex={0}><span className="glyphicon glyphicon-log-out" /></a>
    </div>));

Menu.propTypes = {
  toggleSingleScreen: PropTypes.func.isRequired,
  toggleSplitScreen: PropTypes.func.isRequired,
  appConfig: PropTypes.objectOf(PropTypes.any).isRequired,
  onToggleSectors: PropTypes.func,
};

Menu.defaultProps = {
  onToggleSectors: null,
};

export default Menu;
