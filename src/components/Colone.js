import React, {useContext} from 'react'
import {globalContext} from '../context/Globalstate'

function Colone() {
    const {incomeArr, expenseArr} = useContext(globalContext);
    const totalIncome = incomeArr.reduce((acc,curr) =>{
        return acc += +curr.incomeAmount
    }, 0);
    const totalExpense = expenseArr.reduce((acc,curr) =>{
        return acc += +curr.expenseAmount
    }, 0);

    return (
        <div className='col-one'>
            <h1>BUDGET APP</h1>
            <div className= 'bal-output' >
                <h2>Your Balance</h2>
                <p>Rs.{totalIncome - totalExpense}</p>
            </div>
            <div className='exp-inc-div'>
                <div className='income'>
                    <h3>Income</h3>
                    <p>Rs.{totalIncome}</p>
                </div>
                <div className='expense'>
                    <h3>Expenses</h3>
                    <p>Rs.{totalExpense}</p>
                </div>
            </div>
        </div>
    )
}

export default Colone
