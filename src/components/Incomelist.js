import React from 'react'

function Incomelist(props) {
    const {text, amount, handleIncomeDelete} = props
    return (
        <>
            <li className='item income-li'>
                    <span className='income-item'>
                        <span>{text}</span>
                        <span>{amount}</span>
                    </span>
                    <i className='fas fa-trash-alt' onClick={handleIncomeDelete}></i>
            </li>
        </>
    )
}

export default Incomelist
