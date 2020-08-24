import React from 'react'
import Colone from './Colone'
import Coltwo from './Coltwo'
import Colthree from './Colthree'
import './all.min.css'
import Globalstate from '../context/Globalstate'

function budget() {
    return (
        <div>
        <Globalstate>
        <div className='container'>
            <div className='wrapper'>
            <Colone/>
            <Coltwo/>
            <Colthree/>
            </div>
        </div>
        </Globalstate>
        </div>
    )
}

export default budget
