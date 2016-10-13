import React from 'react';
import Day from './Day';

export default ({days}) => {
  console.log(days);
  return (
    <div>
      {days.map(day => <Day number={day} />)}
    </div>
  )
}