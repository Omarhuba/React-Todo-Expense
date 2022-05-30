import React from "react"
import './NewExpenses.css'
import { ExpensesForm } from "./ExpensesForm"


export const NewExpenses = () =>{

    return(
        <div className="new-expense">
            <ExpensesForm />
        </div>
    )

}
