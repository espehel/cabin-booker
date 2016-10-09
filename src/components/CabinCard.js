import React from 'react';
import {Link} from 'react-router';

export default ({cabin}) => {

  return (
    <div className="row">
      <div className="col s12 l8 offset-l2">
        <div className="card medium">
          <div className="card-image">
            <img src={cabin.img} />
            <span className="card-title">{cabin.name}</span>
          </div>
          <div className="card-content">
            <p className="bold">Location: {cabin.location}</p>
            <p className="bold">Owner: {cabin.owner}</p>
          </div>
          <div className="card-action">
            <Link to={`/cabins/${cabin.id}`}>Go to cabin</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
