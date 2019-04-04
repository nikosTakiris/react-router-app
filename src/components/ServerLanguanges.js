import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import uuid from 'uuid';

const serLan = [
  {
    serId: uuid.v4(),
    serTitle: "PHP",
    serDescription: "PHP is a programming languange and created by 	Rasmus Lerdorf on 1995."
  },
  {
    serId:uuid.v4(),
    serTitle: "Python",
    serDescription: "Python is a programming languange and created by Guido van Rossum on 1990."
  },
  {
    serId: uuid.v4(),
    serTitle: "Node.js",
    serDescription: "Node.js is a javascript cross platform for server side scripting and created by Ryan Dahl on 2009."
  },
  {
    serId: uuid.v4(),
    serTitle: "ASP.NET",
    serDescription: "ASP.NET is a server side web application framework and created by Microsoft on 2002."
  },
  {
    serId: uuid.v4(),
    serTitle: "Perl",
    serDescription: "Perl is a programming languange and created by Larry Wall on 1987."
  },
  {
    serId: uuid.v4(),
    serTitle: "Java",
    serDescription: "Java is a programming languange and created by James Gosling on 1995."
  }
];

const serLanguange = ({match}) => {
  return (
    <div className='current-option'>
    <h2>{match.params.serTitle}</h2>
    {serLan.map(the_ser => {
      if(the_ser.serTitle === match.params.serTitle) {
        return <p key={the_ser.serId}>{the_ser.serDescription}</p>
      }
    })}
    </div>
  );
}

const ServerLanguanges = (match) => {
  return (
    <div>
    <div className="options">
    <p className="option-title">Server side languanges</p>
    <ul>
    {serLan.map(({serId, serTitle}) => (
      <li key={serId}><NavLink to={`${match.match.path}/${serTitle}`} className="option-li" activeClassName="active-link">{serTitle}</NavLink></li>
    ))}
    </ul>
    </div>
    <Route path={`${match.match.path}/:serTitle`} component={serLanguange}></Route>
    </div>
  );
}

export default ServerLanguanges;
