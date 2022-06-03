import './App.css';
import { NewExpenses } from './components/NewExpenses/NewExprenses';
import { Expenses } from './components/Expenses/Expenses';
import ExpensesDate from './components/Expenses/ExpenseDate';

function App() {
  const expenses = [
    {title: 'Köp Toalet papper', amount: '100',  date: new Date(2022, 5, 23)},
    {title: 'Köp Mjölk', amount: '30', date: new Date(2022, 5, 23)},
    {title: 'Köp Pankaka', amount: '60',  date: new Date(2022, 5, 23)},
    {title: 'Köp Cykel', amount: '1500', date: new Date(2022, 5, 23)},
    {title: 'Köp TV', amount: '5500', date: new Date(2022, 6, 23)}
  ]

  const addExpensesHandler = (expense)=>{
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
