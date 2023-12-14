import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink,useParams,Outlet } from 'react-router-dom'

import {FaUsers} from "react-icons/fa"
import {BiTransfer} from "react-icons/bi"
import {BsCashCoin} from "react-icons/bs"

import { DashboardQuickLinks } from '../data/data'

const QuickLink = ({name, icon})=>{
	
	const currentColor = useSelector(state=>state.main.currentColor)
	

	return <NavLink to={`/admin/dashboard/${name.toLowerCase().replace(' ','-')}`}
	 className="hover:bg-slate-200 hover:dark:bg-slate-800 block border-transparent border-r-2"
	 style={({isActive})=>(

		(isActive ? {borderRightColor:currentColor} :{})
	 )}>
		<div className='flex justify-start py-2 text-gray-600 dark:text-slate-400'>
			<span className='text-sm md:text-xl mr-1 md:mr-4  font-bold'>{icon}</span>
			<div className='text-xs md:text-sm font-bold capitalize'>{name}</div>
		</div>
	</NavLink>
    
	 }

const Card = ({Icon,text,number})=>{

	const currentColor = useSelector(state=>state.main.currentColor)
	return (
		<div className='w-36 bg-slate-200 dark:bg-slate-900 rounded-lg p-1'>
			<div className='flex gap-2'>
				<div className='w-10 h-10 rounded p-1 text-center' style={{backgroundColor:currentColor,opacity:0.8}}>
					<span className='text-3xl dark:text-slate-800'><Icon/></span>
				</div>
				<div className='text-slate-600 dark:text-slate-300'>
					<p className='font-extrabold'>{number}</p>
					<h1 className='capitalize text-xs font-bold'>{text}</h1>	
				</div>
			</div>
		</div>
	)
}

const Dashboard = () => {

	const users = useSelector(state=>state.account.users)

	let verifiedUsersCount = 0;
	let unverifiedUsersCount = 0;

	users.map((v)=>{
		
		if(v.active == 1){
			verifiedUsersCount += 1
		}else{

			unverifiedUsersCount += 1
		}
	})


  return (
    <div className='h-full bg-main-bg dark:bg-main-dark-bg dark:text-slate-200'>
		<div className='flex flex-col md:flex-row md:space-x-1 h-full'>
			<div className='md:w-1/4 md:h-full flex flex-col'>
				<div className='flex flex-wrap justify-between bg-white dark:bg-secondary-dark-bg py-3 px-2'>
					<Card Icon={FaUsers} text="users" number={verifiedUsersCount}/>
					{/* <Card Icon={FaUsers} text="tasks" number={2}/>
					<Card Icon={FaUsers} text="portfolios" number={2}/> */}
					<Card Icon={FaUsers} text="verify users" number={unverifiedUsersCount}/>
				</div>
				<div className='md:flex-1 bg-white dark:bg-secondary-dark-bg py-3 px-2 mt-1 overflow-auto space-y-5'>
					<div>
						<h1 className='text-xs uppercase dark:text-slate-600 font-semibold'>General Purpose</h1>
						{DashboardQuickLinks.map((v,i)=>{
						return <QuickLink key={i} name={v.name} icon={v.icon}/>
						})}
						<QuickLink name='Update Assets' icon={<BiTransfer/>}/>
					</div>
					<div>
						<h1 className='text-xs uppercase dark:text-slate-600 font-semibold'>Payment methods</h1>
						<QuickLink name='transfer setup' icon={<BiTransfer/>}/>
						<QuickLink name='crypto setup' icon={<BsCashCoin/>}/>
					</div>
					
				</div>	
			</div>
			<div className='flex-1 md:w-3/4 md:h-full relative mt-1 md:mt-0'>
				<Outlet/>
			</div>
		</div>
    </div>
  )
}

export default Dashboard