import React from 'react';

export default ({date, style}) => {
  return (
    <div className={`col day ${style}`}>
      {date}
    </div>
  )
}