import React from 'react';
import {Link} from 'react-router';

export default () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">Cabin booker</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
    </nav>
  )
}