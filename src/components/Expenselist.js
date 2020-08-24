import React from 'react'

function Expenselist(props) {
    const {text, amount, handleExpenseDelete} = props
    return (
        <div>
            <li className='item expense-li'>
                    <span className='expense-item'>
                        <span>{text}</span>
                        <span>{amount}</span>
                    </span>
                    <i className='fas fa-trash-alt' onClick={handleExpenseDelete} ></i>
                </li>
        </div>
    )
}

export default Expenselist
