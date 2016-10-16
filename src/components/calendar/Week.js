import React from 'react';
import Day from './Day';

export default ({week, onDayClick}) => {
  return (
    <div className="row week">
      {week.days.map(day => <Day key={day.date} date={day.date} style={day.style} onClick={() => onDayClick(day.date)} />)}
    </div>
  )
}