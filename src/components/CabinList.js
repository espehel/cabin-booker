import React from 'react';
import CabinThumbnail from './CabinCard';

export default ({cabins}) => {

  if (!cabins) {
    return null;
  }

  return (
    <div className="row">
      <div className="col s12 l8 offset-l2">
        {
          cabins.map(cabin => (<CabinThumbnail key={cabin.id} cabin={cabin}/>))
        }
      </div>
    </div>
  )
}
