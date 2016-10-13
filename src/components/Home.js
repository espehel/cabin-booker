import React from 'react';
import {Link} from 'react-router';

export default () => {
  return(
    <div>
      <h2>Home page</h2>
      <p>Here there should be lots of info and stuff</p>
      <Link to={`/cabins`}>Go to cabins overview</Link>
    </div>
  )
}