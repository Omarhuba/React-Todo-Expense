import React from "react"
import '../Styles/NewExpenses.css'
import  ExpensesForm  from "./ExpensesForm"


export const NewExpenses = ({onAddExpenses}) =>{
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.floor(Math.random()*100).toString()
        }
        onAddExpenses(expenseData)
        // console.log(expenseData);
    }

    return(
        <div className="new-expense">
            <ExpensesForm  onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )

}
