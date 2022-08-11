import React from 'react'
import '../Styles/ExpensesList.css'
import ExpensesItem from './ExpensesItem'



export const ExpensesList = (props) => {
//   let expensesContent = <p>No more Expenses</p>
  if(props.items.length === 0){
    return <h2 className='expenses-list__fallback'>No more Expenses Found!</h2>

  }



  return (
    <ul className='expenses-list'>
        {props.items.map((expense, index) => (
      <ExpensesItem
        key={index}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
    </ul>
  )
}
