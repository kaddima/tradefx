import React,{useState} from 'react'
import {useParams} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import axios from 'axios'

import { updateAccountBalance } from '../store/accountSlice'

const CreditUser = () => {

    let user_id = useParams().id
  
    const [inputValue,setInput] = useState({amount:''})
    
    const dispatch = useDispatch()


    const handleInputChange = (e)=>{

        let name = e.currentTarget.name
        let value = e.currentTarget.value

        if(value < 0){
            return
        }
        setInput({...inputValue, [name] : value})
    }

    const handleFormSubmit = (e)=>{
        e.preventDefault()
        
        if(inputValue.amount === '' ){
            toast('Please provide an amount')
            return

        }

        const data = {...inputValue,user_id}
        

        axios.post('/admin/credit-user',data).then(data=>{

			if(data.data.status){
                //empty the input field
                setInput({amount:''})
                let balance = data.data.data

                //update the incompleted balance from server to include both margin and profit_loss
                 toast('Account Credited')
				 dispatch(updateAccountBalance(balance))
			}
		}).catch(e=>{
			console.log(e)
		})
        
    }

  return (
   
    <div className='w-11/12 md:w-3/5 absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4'>
        <h1 className='text-center font-bold text-sm mb-10 dark:text-slate-200'>Create user</h1>
        <form className='space-y-4' onSubmit={handleFormSubmit}>
            <div className='flex flex-col md:flex-row md:items-center gap-2'>
                <div className='md:flex-1 relative'>
                    <span className='text-2xl absolute top-7 left-2 dark:text-slate-500'>$</span>
                    <label className='text-sm dark:text-slate-400 mb-1 block'>Amount</label>
                    <input type="number" name='amount' value={inputValue.amount} placeholder="Amount"
                    className='form-input w-full bg-transparent border block pl-6 dark:text-slate-500'
                    onChange={handleInputChange}/>
                </div>
            </div>

            <div>
                <button type='submit' className='text-sm p-3 dark:text-slate-400 rounded hover:bg-slate-700 bg-slate-900 w-full'>
                    Credit
                </button>
            </div>
            
        </form>
    </div>
   
   
  )
}

export default CreditUser