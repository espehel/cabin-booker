import React from 'react';
import Week from './Week';

export default ({year, month}) => {

  const start = new Date(year, month).getDay();
  const length = new Date(year, month + 1, 0).getDate();

  console.log(length);

  const weeks = [];
  let week = [];
  for (let i = 0; i < length; i++) {
    week.push(i);
    if (i % 6 === 0) {
      weeks.push(week);
      week = [];
    }
  }
  console.log(weeks);

  return (
    <div className="container">
      {weeks.map(week => <Week days={week}/>)}
    </div>
  )
};