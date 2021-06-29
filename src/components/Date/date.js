import React from 'react';

function DateDisplay() {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const today = new Date();
  const date = today.getDate();
  const month = months[today.getMonth()];
  const day = days[today.getDay()];

  return <h2 style={{ marginBottom: '2rem' }}>{`${day}, ${month} ${date}`}</h2>;
}

export default DateDisplay;
