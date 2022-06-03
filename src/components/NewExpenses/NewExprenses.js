import React from "react"
import './NewExpenses.css'
import { ExpensesForm } from "./ExpensesForm"


export const NewExpenses = (props) =>{
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.floor(Math.random()*100).toString()
        }
        props.onAddExpenses(expenseData)
        // console.log(expenseData);
    }

    return(
        <div className="new-expense">
            <ExpensesForm  onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )

}
