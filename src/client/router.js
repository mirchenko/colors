import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Feed from './components/feed'
import Create from './components/create'

export default () =>
  <BrowserRouter>
    <div>
      <ul className="menu-wrapper">
        <li><NavLink strict activeClassName="active" to="/"
                     isActive={(match, location) => location.pathname === '/'}>Feed</NavLink></li>
        <li><NavLink strict activeClassName="active" to="/create">Create</NavLink></li>
      </ul>

      <Route exact path="/" component={Feed}/>
      <Route exact path="/create" component={Create}/>
    </div>
  </BrowserRouter>