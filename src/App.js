import './App.css';
import { NewExpenses } from './components/NewExpenses/NewExpenses';
import { Expenses } from './components/Expenses/Expenses';
import { useState } from 'react';
// import ExpensesDate from './components/Expenses/ExpenseDate';

const initial_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {
  const [expenses, setExpenses]= useState(initial_expenses)
  const addExpensesHandler = (expense)=>{
      setExpenses((prevExpenses)=>{
        return [expense, ...prevExpenses]
      })

    console.log('add in App.js');
    console.log(expense);
  }

  return (
    <div className="App">
      <header className="App-header">
        <NewExpenses  onAddExpenses={addExpensesHandler}/>
        <Expenses items={expenses} />

      </header>
    </div>
  );
}

export default App;
