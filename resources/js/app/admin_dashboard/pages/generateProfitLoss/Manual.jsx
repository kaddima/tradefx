import React,{useState} from 'react'
import {useSearchParams, useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import axios from "axios"
import { toast } from 'react-toastify'


import { updatePortfolio } from '../../store/portfolioSlice'
import { updateAccountBalance } from '../../store/accountSlice'

const Manual = () => {

    
    let user_id = useParams().id
    let balance = useSelector(state=>state.account.account)

    const [searchParams] = useSearchParams()
    let portfolio_id = searchParams.get('portfolio-id')

    const [inputValue,setInput] = useState(
        {amount:'',backdate:'',
        profit_loss:'loss',type:'manual'}
        )
    
    const dispatch = useDispatch()


    const handleInputChange = (e)=>{

        let name = e.currentTarget.name
        let value = e.currentTarget.value
        setInput({...inputValue, [name] : value})
    }

    const handleFormSubmit = (e)=>{
        e.preventDefault()
        
        if(inputValue.amount === '' && inputValue.backdate ===''){
            toast('Amount and Backdate can not both be empty')
            return

        }else if(inputValue.amount < 0){

            toast('Please provide positive number')
            return
        }

        const data = {...inputValue, portfolio_id,user_id}

        axios.post('/admin/portfolio/generate-profit-loss',data).then(data=>{
			if(data.data.status == 1){

                // check if an amount was set
                if(inputValue.amount !== ''){
                     toast(`${inputValue.profit_loss == 'loss' ? 'Loss ' : 'Profit '} of $${inputValue.amount} was generated`)
                }else if(inputValue.backdate !== '' && inputValue.amount === ''){
                    toast('Date updated successfully')
                }
               
				setInput({amount:'',backdate:'',profit_loss:'loss',type:"manual"})
                let portfolios = data.data.data.portfolios
                //get the funds the users aaccount balance
                let profit_loss = 0;

                // loop through portfolio and sum up its profits
                portfolios.map((portfolio,key)=>{
                   
                    profit_loss += Number(portfolio.profit_loss)
                })
                
                //update the incompleted balance from server to include both margin and profit_loss
                 balance = {...balance, profit_loss}

				 dispatch(updatePortfolio(data.data.data))
				 dispatch(updateAccountBalance(balance))
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
                    <label className='text-sm dark:text-slate-600 mb-1 block'>Back date</label>
                    <input type="date" name='backdate' value={inputValue.backdate} className='form-input bg-transparent border block w-full dark:text-slate-500'
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

export default Manual