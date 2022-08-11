import React from 'react'
import '../Styles/ExpenseDate.css';

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('sv-SV', { month: 'long' });
  console.log(month);
  const day = props.date.toLocaleString('sv-SV', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;