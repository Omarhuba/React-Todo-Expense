import React from 'react'
import ExpensesItem from './ExpensesItem'
import { Card } from '../UI/Card'
import './Expenses.css'



export const Expenses = (props) => {
  return (
      <div>

    <div>Expenses</div>
        <Card className='expenses'>
            <ExpensesItem title={props.items[0].title} amount={props.items[0].amount} pris={props.items[0].pris} date={props.items[0].date}/>
            <ExpensesItem title={props.items[1].title} amount={props.items[1].amount} pris={props.items[1].pris} date={props.items[1].date}/>
            <ExpensesItem title={props.items[2].title} amount={props.items[2].amount} pris={props.items[2].pris} date={props.items[2].date}/>
            <ExpensesItem title={props.items[3].title} amount={props.items[3].amount} pris={props.items[3].pris} date={props.items[3].date}/>
        </Card>
      </div>
  )
}



