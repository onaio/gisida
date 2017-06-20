require('./Menu.scss');

import React from 'react';
import Cookie from 'js-cookie';

const logOut = (e) => {
  e.preventDefault();
  Cookie.set('dsauth', false);
  location.reload();
}

const Menu = ({ toggleSingleScreen=f=>f, toggleSplitScreen=f=>f }) =>
<div className="menu">
  <div className="brand">
    <a className="brand-icon">UKAID</a>
    <div className="brand-title"><span className="white">Somalia</span>&nbsp;&nbsp; Integrated Response Platform</div>
  </div>
  <ul>
    <li><a href="#" onClick={toggleSingleScreen}><span className="glyphicon glyphicon-home"></span></a></li>
    <li><a href="#" onClick={toggleSplitScreen}><span className="glyphicon glyphicon-th-large"></span></a></li>
  </ul>
  <a className="sign-out" onClick={logOut}><span className="glyphicon glyphicon-log-out"></span></a>
</div>

export default Menu
