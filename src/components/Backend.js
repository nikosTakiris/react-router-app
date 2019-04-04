import React from 'react';
import ServerLanguanges from './ServerLanguanges';
import Databases from './Databases';
import { Route, NavLink } from 'react-router-dom';

const Backend = () => {
  return (
    <div className="wrapper">
    <h1>The Backend side</h1>

    <ul className="front-back-ul">
    <NavLink to="/backend/serverlanguanges/" className="front-back-li" activeClassName="active-option">Languanges</NavLink>
    <NavLink to="/backend/databases/" className="front-back-li" activeClassName="active-option">Databases</NavLink>
    </ul>


    <Route path="/backend/serverlanguanges" component={ServerLanguanges}></Route>
    <Route path="/backend/databases" component={Databases}></Route>

    </div>
  );
}

export default Backend;
