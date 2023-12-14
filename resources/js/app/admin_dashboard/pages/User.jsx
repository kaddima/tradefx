import React,{useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux/';
import { NavLink,Outlet ,useParams} from 'react-router-dom';

import _ from 'lodash';
import axios from 'axios'
import { toast } from 'react-toastify'
import {isFuture, differenceInSeconds,parseISO} from "date-fns"

import {BsCreditCardFill} from "react-icons/bs"
import {FaEdit} from "react-icons/fa"

import { UserSidebarList } from '../data/data'

import { BalanceSheet } from '../components'
import {CreditUser} from '../components'

import {fetchPortfolio,updatePortfolio} from "../store/portfolioSlice";
import { getActivities } from '../store/activitySlice';
import {getAssets} from "../store/assetsSlice"
import { getUserAccountDetails,updateAccountBalance } from '../store/accountSlice';
import { fetchTasks,updateTasks } from '../store/portfolioSlice'


const User = () => {

	const userId = useParams().id
	const accountBalance = useSelector(state=>state.account.account)
	const dispatch = useDispatch()
  	const currentColor = useSelector(state=>state.main.currentColor)
	const portfolioCount = useSelector(state=>state.portfolio.portfolios).length
	const tasks = useSelector(state=>state.portfolio.tasks)

	useEffect(()=>{
		//get users account details- balance and profile
		dispatch(getUserAccountDetails(userId))
		//get all users available tasks
		dispatch(fetchTasks(userId)).unwrap().then(data=>{

			//calculaate the actuall price
			let newTasks = []
			let tasks = data.data.tasks
    
			tasks.map((value,key)=>{
		
				let started_at = parseISO(value.started_at)
				let end_at = parseISO(value.end_at)
				let amount = +value.amount
			
				if(isFuture(end_at)){
				
					//get current
					let now = Date.now()
					// get the distance between the start and end time to calculate amounts generated per second
					let distance = differenceInSeconds(end_at,started_at)
				
					// time passed since start date in seconds
					let timePassed = differenceInSeconds(now,started_at)
				
					let amountPerSecond = amount/distance
				
					// the current amount per elasped time
					let generatedAmount = Number(amountPerSecond) * +timePassed
					let remainderAmount = amount - generatedAmount

					newTasks.push({...tasks[key], generated:generatedAmount, remainder:remainderAmount})
				}else{

					newTasks.push({...tasks[key], generated:amount, remainder:0})
				}
		

			})

			dispatch(updateTasks({tasks:newTasks}))

		})

		dispatch(getAssets(userId))
		dispatch(getActivities(userId))
		dispatch(fetchPortfolio(userId)).unwrap().then(data=>{  

            let margin = 0, profit_loss = 0
            let portfolios = data.data.portfolios

            portfolios.map((portfolio,key)=>{
                margin += Number(portfolio.margin);
                profit_loss += Number(portfolio.profit_loss)
				
            })
			//update the user's account balance
           dispatch(updateAccountBalance({margin,profit_loss,}))
        })
        
	},[])


	useEffect(()=>{

		if(tasks.length > 0){

			let task = tasks[0]

			let data = {amount:task.amount,portfolio_id:task.portfolio_id,
				task_id:task.id,user_id:userId}

			if(!isFuture(parseISO(task.end_at))){
					axios.post('/admin/portfolio/task/close',data)
					.then(data=>{

						let portfolios = data.data.data.portfolios
						let tasks = data.data.data.tasks
						let profit_loss = 0
						let margin = 0

						toast('task completed -- Portfolio updated')
				
						if(portfolios.length > 0){

							portfolios.map((portfolio,key)=>{

								profit_loss = Number(profit_loss) + Number(portfolio.profit_loss)
								margin += Number(portfolio.margin)
							})

						}
						//update the uncompleted balance from server to include both margin and profit_loss
						let balance = {profit_loss,margin}
						
						dispatch(updateAccountBalance(balance))
						dispatch(updatePortfolio({portfolios:portfolios}))
						dispatch(updateTasks({tasks:tasks}))

						

				})

			}
		}

	},[tasks])

  return (
    <div className='flex bg-white h-full dark:bg-main-dark-bg relative'>
        <div className='w-14 dark:bg-secondary-dark-bg'>
        	{UserSidebarList.map((link, i)=>(
				<div key={i} className="relative">
					<NavLink
						to={`/admin/user/${userId}/${link.name.toLowerCase().replace(' ','-')}`}
						key={link.name}
						className="flex flex-col items-center p-2 mb-1 text-slate-600 dark:text-gray-300 rounded-tr-md rounded-br-md cursor-pointer
						hover:bg-slate-100 hover:dark:bg-slate-700"
						style={({isActive})=>(isActive ? {borderRight : `3px solid ${currentColor}`} : {} )}>
						<span className='text-center text-xl font-bold'>{link.icon}</span>
						<span className='capitalize text-[10px] text-center font-extrabold'>{link.name}</span>

						{(link.name.toLowerCase() == 'portfolio' && portfolioCount > 0) && (<div className='absolute bottom-6 right-0 text-sm text-extrabold 
								bg-slate-800 w-4 h-4 rounded-full flex justify-center items-center' style={{color:currentColor}}>
                                    <span className='font-extrabold text-xs'>{portfolioCount}</span>
                                </div>)}
						{(link.name.toLowerCase() == 'tasks' && tasks.length > 0) && (<div className='absolute bottom-6 right-0 text-sm text-extrabold 
						bg-slate-800 w-4 h-4 rounded-full flex justify-center items-center' style={{color:currentColor}}>
							<span className='font-extrabold text-xs'>{tasks.length}</span>
						</div>)}
					</NavLink>
				</div>
			))}
			<div className="relative">
					<NavLink
						to={`/admin/user/${userId}/edit`}
						
						className="flex flex-col items-center p-2 mb-1 text-slate-600 dark:text-gray-300 rounded-tr-md rounded-br-md cursor-pointer
						hover:bg-slate-100 hover:dark:bg-slate-700"
						style={({isActive})=>(isActive ? {borderRight : `3px solid ${currentColor}`} : {} )}>
						<span className='text-center text-xl font-bold'><FaEdit/></span>
						<span className='capitalize text-[10px] text-center font-extrabold'>Edit user</span>
					</NavLink>
				</div>
			<div >
				<div id="credit-user-btn" onClick={()=>{$('#credit-user-container').show()}}  
				className="flex flex-col items-center p-2 mb-1 text-slate-600 dark:text-gray-300 cursor-pointer
						hover:bg-slate-100 hover:dark:bg-slate-700">
					<span className='text-center text-xl font-bold'><BsCreditCardFill/></span>
					<span className='capitalize text-[10px] text-center font-extrabold'>Credit user</span>
				</div>				
			</div>
			
				
		
        </div>
		<div className='flex-1 flex flex-col ml-1 h-full max-h-full overflow-auto gap-1'>
			<div className='bg-white dark:bg-secondary-dark-bg w-full h-16'>
				<div className='flex justify-end space-x-3 w-full'>
					<BalanceSheet title={'Capital'} amount={_.round(accountBalance.funds,2)}/>
					<BalanceSheet title={'Available'} amount={_.round(accountBalance.available,2)} />
					<BalanceSheet title={'margin'} amount={_.round(accountBalance.margin,2)}/>
					<BalanceSheet title={'P&L'} amount={_.round(accountBalance.profit_loss,2)}/>
				</div>
			</div>
			<div className="flex-1 fh-4rem mt-1 md:mt-0 relative z[9999]">
				<Outlet/>
			</div>	
		</div>

		<div id="credit-user-container" className='w-11/12 bg-white dark:bg-slate-800 hidden rounded md:w-3/5 h-3/4 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
			<div className='relative h-full w-full'>
				<CreditUser/>
			</div>	
				
		</div>
    </div>
  )
}

export default User
