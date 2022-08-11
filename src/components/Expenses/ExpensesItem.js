// import React, {useState} from 'react'
// import App from '../App'
import '../Styles/ExpenseItem.css';
import  ExpensesDate  from './ExpenseDate'

function ExpensesItem(props){
  // const [title,  setTitle] = useState(props.title)
  // const [amount,  setAmount] = useState(props.amount)
  // const changeTitle = () =>{
  //   setTitle('Updated!')
  //   // console.log('clocked!');
  // }
  // const changeAmount = () =>{
  //   setAmount('500!')

  // }



  return (
    <div className='expense-item'>
        <ExpensesDate date={props.date}/>
        <div className='expense-item__description'>
            <h3>Title: {props.title}</h3>
            <div className='expense-item__price'>SEK:{props.amount}</div>
        </div>
        {/* <button  onClick={changeTitle} >Change Title</button>
        <button  onClick={changeAmount} > Amount</button> */}


    </div>
  )
}

export default ExpensesItem

// function ExpenseItem(props) {
//   const [title, setTitle] = useState()
//   const [amount, setAmount] = useState()

//   const changeTitle =()=>{
//     setTitle('Updated!')
//   }

//   const changeAmount = ()=>{
//     setAmount('500kr')
//   }


//   return(
//     <div className='expense-item'>
//       <ExpensesDate date={props.date} />
//       <div className='expense-item__discription'>
//         <h3>Title: {title}</h3>
//         <div className='expense-item__price'>SEK: {amount}</div>
//       </div>
//       <button onClick={changeTitle}>Change Title</button>
//       <button onClick={changeAmount}>Change Amount</button>
//     </div>
//   )
// }
// export default ExpenseItem