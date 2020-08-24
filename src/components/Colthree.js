import React,{useContext} from 'react'
import {globalContext} from '../context/Globalstate'
import Expenselist from './Expenselist'


function Colthree() {
    const {expense, expenseArr, handleExpenseChange, handleExpenseSubmit, handleExpenseDelete} = useContext(globalContext)

    return (
        <div>
            <form onSubmit={handleExpenseSubmit} >
                <input type='text' placeholder='e.g.rent' name='expenseText' value={expense.expenseText} onChange={handleExpenseChange} />
                <input type='number' placeholder='e.g.1000' name='expenseAmount' value={expense.expenseAmount} onChange={handleExpenseChange} />
                <button type='submit' className='btn expense'>Submit</button>
            </form>
            <h3>Transaction History</h3>
            <ul className='items'>
                {
                    expenseArr.map(expense => <Expenselist key={expense.id} text={expense.expenseText} amount={expense.expenseAmount}
                                                            handleExpenseDelete={() => handleExpenseDelete(expense.id)} />)
                }
            </ul>
        </div>
    )
}

export default Colthree
