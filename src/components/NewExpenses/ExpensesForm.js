import React, {useState} from 'react'
import '../Styles/ExpensesForm.css'



const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //   enteredTitle: '',
    //   enteredAmount: '',
    //   enteredDate: '',
    // });

    const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value);
      // setUserInput({
      //   ...userInput,
      //   enteredTitle: event.target.value,
      // });
      // setUserInput((prevState) => {
      //   return { ...prevState, enteredTitle: event.target.value };
      // });
    };

    const amountChangeHandler = (event) => {
      setEnteredAmount(event.target.value);
      // setUserInput({
      //   ...userInput,
      //   enteredAmount: event.target.value,
      // });
    };

    const dateChangeHandler = (event) => {
      setEnteredDate(event.target.value);
      // setUserInput({
      //   ...userInput,
      //   enteredDate: event.target.value,
      // });
    };

    const submitHandler = (event) => {
      event.preventDefault();

      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
      };

      props.onSaveExpenseData(expenseData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
    };

    return (
      <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input
              type='text'
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input
              type='number'
              min='0.01'
              step='0.01'
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input
              type='date'
              min='2019-01-01'
              max='2022-12-31'
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className='new-expense__actions'>
          <button type='submit'>Add Expense</button>
        </div>
      </form>
    );
  };

  export default ExpenseForm;







// export const ExpensesForm = ({onSaveExpenseData}) => {
//     const [entredTitle, setEntredTitle] = useState('')
//     const [entredAmount, setEntredAmount] = useState('')
//     const [date, setDate] = useState('')

//     // const [userInput, setUserInput]= useState({
//     //     enteredTitle: '',
//     //     enteredAmount: '',
//     //     date: ''
//     // })


//     const titleChangeHandler = (event) =>{
//         setEntredTitle(event.target.value);
//         // setUserInput({...userInput, enteredTitle: event.target.value})
//         // för att kunna se senaste State vi använder så......
//         // setUserInput((prevState)=>{
//         //     return { ...prevState, enteredTitle: event.target.value}
//         // })
//     }
//     const amountChangeHandler = (event) =>{
//          setEntredAmount(event.target.value);
//         // 2- setUserInput({...userInput, enteredAmount: event.target.value})
//         // setUserInput((prevState)=>{
//         //     return {...prevState, enteredAmount: event.target.value}
//         // })
//     }
//     const dateChangeHandler = (event) =>{
//          setDate(event.target.value);
//         // 2- setUserInput({...userInput, date: event.target.value})
//         // setUserInput((prevState)=>{
//         //     return{ ...prevState, date: event.target.value}
//         // })
//     }

//     const submitHandler = (e)=>{
//         e.preventDefault()

//         const expenseData = {
//             title: entredTitle,
//             amount: entredAmount,
//             data: new Date(date)
//         }
//         onSaveExpenseData(expenseData)
//         // console.log(expenseData);
//         // two way binding and clear data in input then give value={}
//         setEntredTitle('')
//         setEntredAmount('')
//         setDate('')
//     }

//   return (
//       <form onSubmit={submitHandler}>
//         <div className='new-expense__controls'>
//             <div className='new-expense__control'>
//                 <label> Title </label>
//                 {/* för att töma input vi ska använda tomma value---> value='' */}
//                 <input type="text" placeholder='Type a Name'
//                 onChange={titleChangeHandler}
//                 value={entredTitle}/>
//             </div>
//             <div className='new-expense__control'>
//                 <label> Amount </label>
//                 <input type="number" placeholder='Type a Amount'
//                 onChange={amountChangeHandler}
//                 value={entredAmount} />
//             </div>
//             <div className='new-expense__control'>
//                 <label> Date </label>
//                 <input type="date" min='2022-01-01' max='2023-12-31'
//                 onChange={dateChangeHandler}
//                 value={enteredDate}  />
//             </div>
//         </div>
//         <div className='new-expense__actions'>
//             <button type='submit'>Add Expenses</button>
//         </div>
//       </form>
//   )
// }


