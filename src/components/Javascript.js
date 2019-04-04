import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import uuid from 'uuid';

const js = [
  {
    jsId: uuid.v4(),
    jsTitle: "Angular",
    jsDescription: "Angular is a javascript framework and created by Google on 2010."
  },
  {
    jsId:uuid.v4(),
    jsTitle: "React",
    jsDescription: "React is a javascript library and created by Facebook on 2013."
  },
  {
    jsId: uuid.v4(),
    jsTitle: "Vue.js",
    jsDescription: "Vue.js is a javascript framework and created by Evan You on 2014."
  },
  {
    jsId: uuid.v4(),
    jsTitle: "Ember",
    jsDescription: "Ember is a Javascript framework and created by Yehuda Katz on 2011."
  },
  {
    jsId: uuid.v4(),
    jsTitle: "Backbone",
    jsDescription: "Backbone is a javascript library and created by Jeremy Ashkenas on 2010."
  },
  {
    jsId: uuid.v4(),
    jsTitle: "Meteor",
    jsDescription: "Meteor is a javascript framework and created by Meteor Development Group on 2012."
  },
  {
    jsId: uuid.v4(),
    jsTitle: "Polymer",
    jsDescription: "Polymer is a javascript library and created on 2012 by Google developers and contributors on Github."
  }
];

const FrameworkJs = ({match}) => {
  return (
    <div className="current-option">
    <h2>{match.params.jsTitle}</h2>
    {js.map(jsFramework => {
      if(jsFramework.jsTitle === match.params.jsTitle) {
        return <p key={jsFramework.jsId}>{jsFramework.jsDescription}</p>
      }
    })}
    </div>
  );
}

const Javascript = (match) => {
  return (
    <div className="options">
    <p className="option-title">Javascript frameworks</p>
    <ul>
    {js.map(({jsId, jsTitle}) => (
      <li key={jsId}><NavLink to={`${match.match.path}/${jsTitle}`} className="option-li" activeClassName="active-link">{jsTitle}</NavLink></li>
    ))}
    </ul>

    <Route path={`${match.match.path}/:jsTitle`} component={FrameworkJs}></Route>

    </div>
  );
}


export default Javascript;
