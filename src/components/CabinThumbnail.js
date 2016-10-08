import React from 'react';

export default (cabin) => {

  return (
    <div>
      <h3>{cabin.name}</h3>
      <p>Location: {cabin.location}</p>
      <img src={cabin.img} alt="Image of cabin" />
    </div>
  );
}
