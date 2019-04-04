import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import uuid from 'uuid';

const css = [
  {
    cssId: uuid.v4(),
    cssTitle: "Boostrap",
    cssDescription: "Boostrap is a CSS framework and created by Mark Otto, Jacob Thornton a developer and a designer at Twitter, on 2011."
  },
  {
    cssId:uuid.v4(),
    cssTitle: "Materialize",
    cssDescription: "Materialize is a CSS framework and created by Google."
  },
  {
    cssId: uuid.v4(),
    cssTitle: "Foundation",
    cssDescription: "Foundation is a CSS framework and created by ZURB on 2011."
  },
  {
    cssId: uuid.v4(),
    cssTitle: "Bulma",
    cssDescription: "Bulma is a CSS framework."
  },
  {
    cssId: uuid.v4(),
    cssTitle: "Semantic UI",
    cssDescription: "Semantic UI is a CSS framework."
  }
];


const FrameworkCss = ({match}) => {
  return (
    <div className="current-option">
    <h2>{match.params.cssTitle}</h2>
    {css.map(theCss => {
      if(theCss.cssTitle === match.params.cssTitle) {
        return <p key={theCss.cssId}>{theCss.cssDescription}</p>
      }
    })}
    </div>
  );
}

const Css = (match) => {
  return (
    <div className="options">
    <p className="option-title">CSS frameworks</p>

    <ul>
    {css.map(({cssTitle, cssId}) => (
  <li key={cssId}><NavLink to={`${match.match.path}/${cssTitle}`} className="option-li" activeClassName="active-link">{cssTitle}</NavLink></li>
  ))}

    </ul>
    <Route path={`${match.match.path}/:cssTitle`} component={FrameworkCss}></Route>
    </div>
  );
}


export default Css;
