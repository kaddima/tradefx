import React,{useState} from 'react'
import {useSearchParams, useParams} from "react-router-dom"
import {useDispatch} from "react-redux"
import { toast } from 'react-toastify'
import axios from "axios"
import {isFuture,parseISO} from "date-fns"

import { updateTasks } from '../../store/portfolioSlice'

const Automatic = () => {

    let user_id = useParams().id
    const [searchParams] = useSearchParams()

    const [inputValue,setInput] = useState({amount:'',duration:'',profit_loss:'loss',type:'automatic'})

    let portfolio_id = searchParams.get('portfolio-id')

    const dispatch = useDispatch()

    const handleInputChange = (e)=>{

        let name = e.currentTarget.name
        let value = e.currentTarget.value
        setInput({...inputValue, [name] : value})
    }

    const handleFormSubmit = (e)=>{
        e.preventDefault()

        if(inputValue.amount === '' || inputValue.duration ===''){
            toast('Amount and Duration must be provided')
            return

        }else if(inputValue.amount < 0){

            toast('Plese provide positive number')
            return
        }
        else if(!isFuture(parseISO(inputValue.duration))){
            toast('Please use future date')
            return
        }
        // else if(!isFuture(new Date(inputValue.duration))){
        //     toast('Please provide time in future')
        //     return
        // }

        const data = {...inputValue, portfolio_id,user_id}

        

        axios.post('/admin/portfolio/generate-profit-loss',data).then(data=>{
			if(data.data.status == 1){
                dispatch(updateTasks(data.data.data))	
                toast(`Automatic ${inputValue.profit_loss} has been generated`)

                //automatically update tasks 10seconds interval
                setInput({amount:'',duration:'',profit_loss:'loss',type:'automatic'})
			}else{
                toast(`Tasks already exists for this portfolio`)
            }
		}).catch(e=>{
			console.log(e.response)
		})

    }
  return (
    <>
        <form className='space-y-4' onSubmit={handleFormSubmit}>
            <div className='flex flex-col md:flex-row md:items-center gap-2'>
                <div className='md:flex-1 relative'>
                    <span className='text-2xl absolute top-7 left-2 dark:text-slate-500'>$</span>
                    <label className='text-sm dark:text-slate-600 mb-1 block'>Amount</label>
                    <input type="number" name='amount' value={inputValue.amount} className='form-input w-full bg-transparent border block pl-6 dark:text-slate-500'
                    onChange={handleInputChange}/>
                </div>
                <div className='md:flex-1'>
                    <label className='text-sm dark:text-slate-600 mb-1 block'>Duration</label>
                    <input type="date" name='duration' value={inputValue.duration} className='form-input bg-transparent border block w-full dark:text-slate-500'
                    onChange={handleInputChange}/>
                </div>
            </div>
            
            <div className='space-y-2'>
                <p className='text-sm dark:text-slate-600 mb-1 block'>Generate Type</p>
                <div className='flex gap-3'>
                    <div className='flex gap-2'>
                       <input id="profit" type={'radio'} checked={inputValue.profit_loss === 'profit' ? 'checked':''} name="profit_loss" value={"profit"} className='form-radio border'
                       onChange={handleInputChange}/>
                       <label htmlFor='profit' className='text-sm dark:text-slate-600 mb-1 block'>Profit</label>
                    </div>
                    <div className='flex gap-2'>
                       <input type={'radio'} checked={inputValue.profit_loss === 'loss' ? true:''} name="profit_loss" id='loss' value={"loss"} 
                       className='form-radio border 'onChange={handleInputChange}/>
                       <label htmlFor='loss' className='text-sm dark:text-slate-600 mb-1 block'>Loss</label>
                    </div>
                </div>

            </div>

            <div>
                <button type='submit' className='text-sm p-3 dark:text-slate-400 rounded bg-slate-800 w-full'>
                    {`Generate ${inputValue.profit_loss}`}
                </button>
            </div>
            
        </form>
    </>
  )
}

export default Automatic