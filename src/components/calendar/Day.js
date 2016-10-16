import React from 'react';

export default ({date, style, onClick}) => {
  return (
    <div className={`col day ${style}`} onClick={onClick}>
      {date}
    </div>
  )
}