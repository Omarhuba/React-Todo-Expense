import './App.css';
import  ExpensesItem  from './components/Expenses/ExpensesItem';
import { NewExpenses } from './components/NewExpenses/NewExprenses';

function App() {
  const expenses = [
    {title: 'Köp Toalet papper', amount: '100',  date: new Date(2022, 5, 23)},
    {title: 'Köp Mjölk', amount: '30', date: new Date(2022, 5, 23)},
    {title: 'Köp Pankaka', amount: '60',  date: new Date(2022, 5, 23)},
    {title: 'Köp Cykel', amount: '1500', date: new Date(2022, 5, 23)}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <NewExpenses />
        <div>Expenses</div>
          <ExpensesItem title={expenses[0].title} amount={expenses[0].amount} pris={expenses[0].pris} date={expenses[0].date}/>
          <ExpensesItem title={expenses[1].title} amount={expenses[1].amount} pris={expenses[1].pris} date={expenses[1].date}/>
          <ExpensesItem title={expenses[2].title} amount={expenses[2].amount} pris={expenses[2].pris} date={expenses[2].date}/>
          <ExpensesItem title={expenses[3].title} amount={expenses[3].amount} pris={expenses[3].pris} date={expenses[3].date}/>
      </header>
    </div>
  );
}

export default App;
