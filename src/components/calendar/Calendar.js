import React from 'react';
import Week from './Week';

export default ({year, month, onDayClick}) => {

  const start = new Date(year, month).getDay();
  const length = new Date(year, month + 1, 0).getDate();
  const lastMonthLength = new Date(year, month, 0).getDate();

  const weeks = [];
  let week = {days: [], offset: 0};

  for (let i = lastMonthLength - start + 1; i <= lastMonthLength; i++) {
    week.days.push({date: i, style: "faded"});
  }

  for (let i = 1; i <= length; i++) {
    week.days.push({date: i, style: ""});
    if ((i + start) % 7 === 0) {
      weeks.push(week);
      week = {days: [], offset: 0};
    }
  }

  const rest = week.days.length;

  for (let i = 1; i <= 7 - rest; i++) {
    week.days.push({date: i, style: "faded"});
  }


    weeks.push(week);
  weeks[0].offset = start;
  console.log(weeks);

  return (
    <div className="container">
      {weeks.map((week, i) => <Week key={i} week={week} onDayClick={(day) => onDayClick(new Date(year, month, day))} />)}
    </div>
  )
};