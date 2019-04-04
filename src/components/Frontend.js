import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Html from './Html';
import Css from './Css';
import Javascript from './Javascript';

const Frontend = () => {

  return (
    <div className="wrapper">

    <h1>The Frontend side</h1>

    <ul className="front-back-ul">
    <NavLink to="/frontend/html" className="front-back-li" activeClassName="active-option">HTML</NavLink>
    <NavLink to="/frontend/css" className="front-back-li" activeClassName="active-option">CSS</NavLink>
    <NavLink to="/frontend/javascript" className="front-back-li"activeClassName="active-option">Javascript</NavLink>
    </ul>

    <Route path="/frontend/html" component={Html}></Route>
    <Route path="/frontend/css" component={Css}></Route>
    <Route path="/frontend/javascript" component={Javascript}></Route>

    </div>
  );

}

export default Frontend;
