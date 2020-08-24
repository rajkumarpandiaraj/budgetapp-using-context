import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

export const globalContext = React.createContext();
const initialIncome ={
    id : uuidv4(),
    incomeText : '',
    incomeAmount : 0
}
const initialExpense ={
    id : uuidv4(),
    expenseText : '',
    expenseAmount : 0
}

export function Globalstate({children}) {
    
    const [income, setIncome] = useState(initialIncome);
    const [expense, setExpense] = useState(initialExpense);
    const [incomeArr, setIncomeArr] = useState([]);
    const [expenseArr, setExpenseArr] = useState([]);

    const handleIncomeChange = (e) =>{
        setIncome({
            ...income,
            [e.target.name] : e.target.value
        })
    }

    const handleIncomeSubmit = (e) =>{
        e.preventDefault();
        if(income.incomeText === '' || income.incomeAmount === ''){
            alert('Enter The Required Field')
        }else{
            setIncomeArr([...incomeArr, income]);
            setIncome({...initialIncome, id : uuidv4() });
        }

    }

    const handleExpenseChange = (e) =>{
        setExpense({
            ...expense,
            [e.target.name] : e.target.value
        })
    }

    const handleExpenseSubmit = (e) =>{
        e.preventDefault();
        if(expense.expenseText === '' || expense.expenseAmount === ''){
            alert('Enter The Required Field');
        }else{
            setExpenseArr([...expenseArr, expense]);
            setExpense({...initialExpense, id : uuidv4() });
        }
    }

    const handleIncomeDelete = (id)=>{
        const updatedincomeArr = incomeArr.filter(income => income.id !== id);
        setIncomeArr(updatedincomeArr)
    }

    const handleExpenseDelete = (id)=>{
        const updatedexpenseArr = expenseArr.filter(expense => expense.id !== id);
        setExpenseArr(updatedexpenseArr)
    }
    return (
        <div>
            <globalContext.Provider value={{
                income,
                expense,
                incomeArr,
                expenseArr,
                handleIncomeChange,
                handleExpenseChange,
                handleIncomeSubmit,
                handleExpenseSubmit,
                handleExpenseDelete,
                handleIncomeDelete
            }}>
                {children}
            </globalContext.Provider>
            
        </div>
    )
}

export default Globalstate
