import React,{useContext} from 'react'
import {globalContext} from '../context/Globalstate'
import Incomelist from './Incomelist'


function Coltwo() {
    const {income, incomeArr, handleIncomeChange, handleIncomeSubmit, handleIncomeDelete} = useContext(globalContext)
    return (
        <div>
            <form onSubmit={handleIncomeSubmit} >
                <input type='text' placeholder='e.g.car sold' name='incomeText' value={income.incomeText} onChange={handleIncomeChange} />
                <input type='number' placeholder='e.g.50000' name='incomeAmount' value={income.incomeAmount}  onChange={handleIncomeChange}/>
                <button type='submit' className='btn income'>Submit</button>
            </form>
            <h3>Transaction History</h3>
            <ul className='items'>
                {
                    incomeArr.map(income => <Incomelist key={income.id} text={income.incomeText} amount={income.incomeAmount}
                                            handleIncomeDelete={()=>handleIncomeDelete(income.id)} />)
                }
            </ul>
        </div>
    )
}

export default Coltwo
