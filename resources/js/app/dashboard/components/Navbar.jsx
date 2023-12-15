import React,{useEffect, useState}  from 'react'
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import _ from 'lodash'

import { isFuture,parseISO,differenceInSeconds } from 'date-fns'

import {AiOutlineMenu} from "react-icons/ai"
import {BiChevronDown} from "react-icons/bi"


import { toggleActiveMenu,setActiveMenu_screenSize,
	} from '../store/mainSlice'
import { updateAccountWithOutBackup } from '../store/accountSlice'


const NavButton = ({title, customFunc,icon,color,dotColor})=>{
	return(
		<button title={title} type='button'
			style={{color}}
			className="relative text-xl rounded-full p-3 hover:bg-light-gray" 
			onClick={customFunc}>
			<span style={{background:dotColor}}
			className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"/>
			{icon}
			
		</button>)
	
}

const BalanceSheet = ({title, amount,extraClass}) =>(

	<div className={`p-2 mr-1 md:mr-3 sm:block ${extraClass}`}>
		<p className='text-[8px] md:text-[10px] font-extrabold uppercase text-slate-600 dark:text-slate-300 '>{title}</p>
		<span className='font-bold text-[10px] md:text-[15px]'>$</span><span className='text-[10px] md:text-[15px] font-bold '>{parseFloat(amount).toLocaleString()}</span>
	</div>
)

const Navbar = () => {

	
	const dispatch = useDispatch()

	const[screenSize,setScreenSize] = useState()
	const currentColor = useSelector(state=>state.main.currentColor)
	const portfolios = useSelector(state=>state.portfolio.portfolios)

	const accountBalance = useSelector(state=>state.account.account)
	const accountBalanceBackup = useSelector(state=>state.account.accountBackup)
	const tasks = useSelector(state=>state.portfolio.tasks)

	useEffect(()=>{
							//get the screen size
		const handleResize = ()=>setScreenSize(window.innerWidth)

		window.addEventListener('resize', handleResize)

		handleResize()

		return ()=>window.removeEventListener('resize', handleResize)
	},[])

	useEffect(()=>{

		if (screenSize <= 900) {
			dispatch(setActiveMenu_screenSize({active:false,screenSize}))
		}else{
			dispatch(setActiveMenu_screenSize({active:true,screenSize}))
		}

	},[screenSize])

	useEffect(()=>{

		if(portfolios.length){

			let timeOut = setTimeout(()=>{
				let percentCH = 0.05

				//calculate for percentage change PC
				let PCavallable = parseFloat(accountBalanceBackup.available) * percentCH
				let PCmargin = parseFloat(accountBalanceBackup.margin) * percentCH

				// if the profit_loss is 0 initially make it a 100 so it can calculate the random profitloss with this value
				let PCprofit_loss = parseFloat(accountBalanceBackup.profit_loss ==0 ? 100 :accountBalanceBackup.profit_loss) * percentCH

				let randProfitloss = _.random((PCprofit_loss < 0 ? PCprofit_loss : -PCprofit_loss),
				(PCprofit_loss < 0 ? -PCprofit_loss : PCprofit_loss))
				let randMargin = _.random(-PCmargin,PCmargin)
				let randAvailable = _.random(-PCavallable,PCavallable)

				let available = parseFloat(accountBalanceBackup.available) + randAvailable
				let margin = parseFloat(accountBalanceBackup.margin) + randMargin
				let profit_loss = parseFloat(accountBalanceBackup.profit_loss) + randProfitloss

				let highlight = {margin:randMargin < 0 ?'fall':'rise',
								available:randAvailable <0 ?'fall':'rise',
								profit_loss:randProfitloss<0 ?'fall':'rise',
								
							}

							if(tasks.length){
								tasks.map((task,key)=>{
				
										let end_at = parseISO(task.end_at);
										let started_at = parseISO(task.started_at)
										let amount = parseFloat(task.amount)
				
										if(isFuture(end_at)){
				
											let now = Date.now()
				
											// get the distance between the start and end time to calculate amounts generated per second
											let distance = differenceInSeconds(end_at,started_at)
				
											// time passed since start date in seconds
											let timePassed = differenceInSeconds(now,started_at)
				
											let amountPerSecond = amount/distance
				
											// the current amount per elasped time make sure to added to portfolios profit loss
											profit_loss = (Number(amountPerSecond) * +timePassed) + profit_loss
				
										}			
								
								})
							}			

				dispatch(updateAccountWithOutBackup({available,margin,profit_loss,highlight}))

			},5000)
			
		}


	},[accountBalance])

	return (
		<div className='flex justify-between relative items-center flex-1 pr-1'>
			<NavButton 
				title="Menu" 
				color={currentColor}
				icon={<AiOutlineMenu/>}
				customFunc={()=>dispatch(toggleActiveMenu('activeMenu'))}
			/>
			<div className=''>
					<Link to="/" 
					className="items-center ml-3 flex text-xl 
					font-extrabold tracking-tight dark:text-white  text-slate-900">
						Trdefx
					</Link>
			</div>

			<div className='flex items-center'>
				<div className='flex'>
					<BalanceSheet title={'Capital'} amount={_.round(accountBalance.funds,2)} extraClass={`hidden dark:text-gray-100`}/>
					<BalanceSheet title={'Available'} amount={_.round(accountBalance.available,2)} 
					extraClass={`${accountBalance.highlight && accountBalance.highlight.available === 'fall'?'text-red-600' : 'text-green-600'}`}/>
					<BalanceSheet title={'margin'} amount={_.round(accountBalance.margin,2)} 
					extraClass={`${accountBalance.highlight && accountBalance.highlight.margin === 'fall'?'text-red-600' : 'text-green-600'}`}/>
					<BalanceSheet title={'p&l'} amount={_.round(accountBalance.profit_loss,2)} 
					extraClass={`${accountBalance.highlight && accountBalance.highlight.profit_loss === 'fall'?'text-red-600' : 'text-green-600'}`}/>	
				</div>
			
				<div className='w-12 border-l-1 flex pl-2' id='acct-modal-btn'>
					<div className='flex items-center cursor-pointer bg-gray-900 dark:bg-gray-200 h-5 rounded-sm'>
						{/* <Avatar sx={{width:24, height:24}} variant='circular' src={avatar}/> */}
						<p className='text-[10px] uppercase  text-white dark:text-slate-800 font-bold'>
							Live
						</p>
						<BiChevronDown className='text-gray-600 text-lg font-bold'/>
					</div>
					
				</div>	
			</div>
					
		</div>
	)
}

export default Navbar
