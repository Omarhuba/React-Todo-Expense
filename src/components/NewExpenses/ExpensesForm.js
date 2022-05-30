import React, {useState} from 'react'
import './ExpensesForm.css'



export const ExpensesForm = () => {
    // const [entredTitle, setEntredTitle] = useState('')
    // const [entredAmount, setEntredAmount] = useState('')
    // const [date, setDate] = useState('')

    const [userInput, setUserInput]= useState({
        setEnteredTitle: '',
        setEnteredAmount: '',
        setDate: ''
    })


    const titleChangeHandler = (event) =>{
        // setEntredTitle(event.target.value);
        setUserInput({...userInput, enteredTitle: event.target.value})
    }
    const amountChangeHandler = (event) =>{
        // setEntredAmount(event.target.value);
        setUserInput({...userInput, enteredAmount: event.target.value})
    }
    const dateChangeHandler = (event) =>{
        // setDate(event.target.value);
        setUserInput({...userInput, date: event.target.value})
    }

  return (
      <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label> Title </label>
                <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label> Amount </label>
                <input type="number" min='0.01'  onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label> Date </label>
                <input type="date" min='2022-01-01' max='2023-12-31' onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expenses</button>
        </div>
      </form>
  )
}


