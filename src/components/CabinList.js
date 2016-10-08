import React from 'react';
import CabinThumbnail from './CabinThumbnail';

export default ({cabins}) => {

  if (!cabins) {
    return null;
  }

  return (
    <div>
      {
        cabins.map(cabin => (<CabinThumbnail cabin={cabin}/>))
      }
    </div>
  )
}
