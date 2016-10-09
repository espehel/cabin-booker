import React from 'react';

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
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <p className="bold">Location: {cabin.location}</p>
          </div>
          <div className="card-action">
            <a href="#">Go to cabin</a>
          </div>
        </div>
      </div>
    </div>
  );
}
