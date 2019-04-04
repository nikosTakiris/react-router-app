import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import uuid from 'uuid';

const db = [
  {
    dbId: uuid.v4(),
    dbTitle: "PostgreSql",
    dbDescription: "PostgreSql is an open source object relational database management system (ORDBMS) and created by PostgreSQL Global Development Group on 1996 ."
  },
  {
    dbId:uuid.v4(),
    dbTitle: "MySQL",
    dbDescription: "MySQL is an open source relational database management system (RDBMS) and created by MySQL AB on 1995."
  },
  {
    dbId: uuid.v4(),
    dbTitle: "MongoDB",
    dbDescription: "MongoDB is a NoSQL database and created by MongoDB Inc. on 2009."
  }
];

const Database = ({match}) => {
  return (
    <div className="current-option">
    <h2>{match.params.dbTitle}</h2>
    {db.map(the_db => {
      if(the_db.dbTitle === match.params.dbTitle) {
        return <p key={the_db.dbId}>{the_db.dbDescription}</p>
      }
    })}
    </div>
  );
}

const Databases = (match) => {
  return (
    <div className="options">
    <p className="option-title">Databases</p>
    <ul>
    {db.map(({dbId, dbTitle}) => (
      <li key={dbId}><NavLink to={`${match.match.path}/${dbTitle}`} className="option-li" activeClassName="active-link">{dbTitle}</NavLink></li>
    ))}
    </ul>

    <Route path={`${match.match.path}/:dbTitle`} component={Database}></Route>

    </div>
  );
}

export default Databases;
