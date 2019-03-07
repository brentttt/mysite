import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


const Header = (props) => (
  <header className={!props.headerActive ? 'header--not-active' : null}>
    <div className="header__title">Brent Hildebrand</div>
      <span className="header__point">•</span>
      <div className="header__nav-list">
        <NavLink to="/" exact activeClassName="nav-active">Web</NavLink>
        <NavLink to="/design" activeClassName="nav-active">Design</NavLink>
        <NavLink to="/info" activeClassName="nav-active">Info</NavLink>
      </div>

  </header>
);

export default Header;

// <div className="header__contact"
//    onClick={props.changeContactView
//   }>Contact</div>
