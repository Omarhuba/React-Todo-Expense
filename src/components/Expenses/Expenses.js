import React, {useState} from 'react'
import ExpensesItem from './ExpensesItem'
import { Card } from '../UI/Card'
import '../Styles/Expenses.css'
import { ExpensesFilter } from './ExpensesFilter'



export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear)=>{
    setFilteredYear(selectedYear)
  }

  return (
      <div>

        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChange={filterChangeHandler}/>
            {props.items.map((expense, index)=> <ExpensesItem key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}/>)}
            {/* <ExpensesItem title={props.items[0].title} amount={props.items[0].amount} pris={props.items[0].pris} date={props.items[0].date}/>
            <ExpensesItem title={props.items[1].title} amount={props.items[1].amount} pris={props.items[1].pris} date={props.items[1].date}/>
            <ExpensesItem title={props.items[2].title} amount={props.items[2].amount} pris={props.items[2].pris} date={props.items[2].date}/>
            <ExpensesItem title={props.items[3].title} amount={props.items[3].amount} pris={props.items[3].pris} date={props.items[3].date}/>
            <ExpensesItem title={props.items[4].title} amount={props.items[4].amount} pris={props.items[4].pris} date={props.items[4].date}/> */}
        </Card>
      </div>
  )
}



