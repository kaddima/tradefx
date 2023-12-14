import React, { useEffect,useState } from 'react'
import {useSelector,useDispatch} from "react-redux"

import {NavLink} from 'react-router-dom'
import { format,isFuture,parseISO,differenceInSeconds } from 'date-fns'

import _ from 'lodash'
import axios from "axios"
import { toast } from 'react-toastify'

import {TbArrowsDiagonalMinimize2} from "react-icons/tb"

import { updateTasks,updatePortfolio } from '../store/portfolioSlice'
import { updateAccountBalance } from '../store/accountSlice'

import {ConfirmModal} from "../components"

const TasksRow = ({data})=>{

		let user_id = data.user_id
		let task_id = data.id
		let portfolio_id = data.portfolio_id
		let amount = data.amount
		let end_at = parseISO(data.end_at)
		let started_at = parseISO(data.started_at)

		const dispatch = useDispatch()

		//holds the amount auto generated with time
		const [profitLoss, setProfitLoss] = useState()

    // let [searchParams, setSearchParams] = useSearchParams()

	// useEffect(function() {
	// 	console.log('here')
	// 	setSearchParams({'generate-profit':1})
	// },[])

	const handleYes = ()=>{
		let data = {user_id,task_id,portfolio_id,amount:_.round(profitLoss,2)}

		axios.post('/admin/portfolio/task/close',data)
		.then(data=>{

			let portfolios = data.data.data.portfolios
			let tasks = data.data.data.tasks
			let profit_loss = 0
			let margin = 0
	
			toast('task closed -- portfolio updated')

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
			
			$('.confirm-modal-container').hide()

			
		}).catch(e=>{

			//console.log(e)
		})
		
	}

	const handleNo = ()=>{
		$('.confirm-modal-container').hide()
	}

	const closeTasks = (e)=>{
		if(isFuture(end_at)){

			// hide any container visible before the next btn is clicked
			$('.confirm-modal-container').hide()

			$(e.currentTarget).next('div').show();
			//get current
			let now = Date.now()
			// get the distance between the start and end time to calculate amounts generated per second
			let distance = differenceInSeconds(end_at,started_at)

			// time passed since start date in seconds
			let timePassed = differenceInSeconds(now,started_at)

			let amountPerSecond = amount/distance

			// the current amount per elasped time
			let generatedAmount = Number(amountPerSecond) * +timePassed
			setProfitLoss(generatedAmount)
		}

	}

	return(
		<>
			<tr className='text-xs font-bold border relative'>
				<td className='border-b-1 border-b-gray-300 dark:border-b-slate-700'>
					<div className='py-3 text-center'>
						<span>{data.started_at && format(parseISO(data.started_at),"dd MMM Y")}</span>

					</div>
				</td>
				<td className='border-b-1 border-b-gray-300 dark:border-b-slate-700'>
					<div className='py-3 text-center'>
						<span>{data.market}</span>

					</div>
				</td>
				<td className={`${data.amount < 0 ? 'text-red-600' : 'text-green-600'} text-center border-b-1 border-b-gray-300 dark:border-b-slate-700`}>
					<span>{data.amount < 0 ? '-' : ''}${String(_.round(data.amount,2).toLocaleString()).replace('-','')}</span>
				</td>
				<td className={`${data.generated < 0 ? 'text-red-600' : 'text-green-600'} text-center border-b-1 border-b-gray-300 dark:border-b-slate-700`}>
					<span>{data.generated < 0 ? '-' : ''}${String(_.round(data.generated,2).toLocaleString()).replace('-','')}</span>
				</td>

				<td className={`${data.remainder < 0 ? 'text-red-600' : 'text-green-600'} text-center border-b-1 border-b-gray-300 dark:border-b-slate-700`}>
					<span>{data.remainder < 0 ? '-' : ''}${String(_.round(data.remainder,2).toLocaleString()).replace('-','')}</span>
				</td>
				<td className='text-center border-b-1 border-b-gray-300 dark:border-b-slate-700'>
					<span>{data.end_at && format(parseISO(data.end_at),"dd MMM Y")}</span>
				</td>

				<td className='border-b-1 border-b-gray-300 dark:border-b-slate-700'>
					<button data-portfolioid={data.portfolio_id} className='p-1 bg-red-800 text-gray-3 rounded font-semibold'
					onClick={closeTasks}>Stop</button>
					<div className='confirm-modal-container fixed z-[900] left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4  hidden'>
						<ConfirmModal text={`${data.amount < 0 ? 'Loss' : 'Profit'} generated is
						${data.amount < 0 ? '-' : ''}$${String(_.round(profitLoss,2).toLocaleString()).replace('-','')}`}
						 onClickYes={handleYes} onClickNo={handleNo}/>
					</div>
				</td>
			</tr>
		</>
	)
}

const Tasks = () => {

	const tasks = useSelector(state=>state.portfolio.tasks)
	const dispatch = useDispatch()

	useEffect(()=>{

		let newTasks = []
		//keep count of tasks not completed
		let pendingTasks = 0
		let interval = setInterval(()=>{
			tasks.map((v,k)=>{

				if(!isFuture(parseISO(v.end_at))){

					newTasks.push({...tasks[k], generated:tasks[k].amount})

				}else{
					pendingTasks += 1
					let amount = v.amount
					let remainder

					let twiceamount = 2*Number(amount)
					let randomAmount = _.random(-twiceamount,twiceamount)
					let generated = randomAmount

					remainder = Number(amount) + ((randomAmount < 0) ? -(randomAmount) : -randomAmount)

					newTasks.push({...tasks[k], generated:generated, remainder:remainder})
				}

			})

			if(pendingTasks > 0){
				dispatch(updateTasks({tasks:newTasks}))
			}

	   },10000)

	  

		return ()=>{

			clearInterval(interval)
		}
	},[tasks])

	if(!tasks.length){

		return (
            <div className='h-full w-full bg-white dark:bg-secondary-dark-bg px-4'>
                <div className='text-gray-800 font-bold dark:text-gray-200 md:w-2/5 text-center absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
                    <div className='w-20 h-20 rounded-full bg-slate-500 dark:bg-slate-800 flex justify-center items-center text-5xl mx-auto'>
                        <TbArrowsDiagonalMinimize2/>
                    </div>
                    <div className='mt-3 space-y-1'>
                        <p >No Tasks running</p>
                        <p className='text-sm font-semibold'>Tasks progress are shown here</p>
                    </div>       
                </div>
            </div>
        )
	}

  return (
    <>

        <div className='flex flex-col bg-white dark:bg-secondary-dark-bg flex-1 h-full px-4'>

			<div className='dark:text-white mt-12 font-bold overflow-auto'>
				<table className='w-full table-auto border-separate' style={{borderSpacing:"0 0px"}}>
					<thead>
						<tr className='uppercase dark:text-slate-200 '>
							<th className='text-[10px] dark:bg-secondary-dark-bg w-[15%] pl-4 text-center'>
								Start
							</th>
							<th className='text-[10px] dark:bg-secondary-dark-bg w-[10%] pl-4 text-center'>
								Market
							</th>
							<th className='text-[10px] dark:bg-secondary-dark-bg w-[20%] text-center'>
								Amount
							</th>
							<th className='text-[10px] dark:bg-secondary-dark-bg w-[20%] text-center'>
								Generated
							</th>
							<th className='text-[10px] dark:bg-secondary-dark-bg w-[20%] text-center'>
								Remainder
							</th>
							<th className='text-[10px] dark:bg-secondary-dark-bg text-center'>
								End
							</th>

							<th className='dark:bg-secondary-dark-bg'>
							</th>
						</tr>
					</thead>
					<tbody>

						{tasks.map((task,i)=>(
							<TasksRow key={i} data={task} />
						))}

					</tbody>
				</table>
			</div>
		</div>

    </>

  )
}

export default Tasks
