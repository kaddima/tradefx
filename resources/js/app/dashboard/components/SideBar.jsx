import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link, NavLink} from "react-router-dom"
import $ from 'jquery'

import {IoIosSwitch} from "react-icons/io"
import {BsGear} from "react-icons/bs"


//action
import { toggleActiveMenu,setActiveMenu_screenSize,  setModalContent} from '../store/mainSlice'

import {links} from '../data/data'

const Sidebar = () => {

	const dispatch = useDispatch()
	const activeMenu = useSelector(state=>state.main.navMenu.activeMenu)
	const screenSize = useSelector(state=>state.main.screenSize)
	const currentColor = useSelector(state=>state.main.currentColor)
	const portfolioCount = useSelector(state=>state.portfolio.portfolios).length
	const chartsCounts = useSelector(state=>state.charts.charts).length

	const handleCloseSideBar = ()=>{
		let navBtn = document.getElementById('sidebar')

		if(($('body').outerWidth()) <= 765 && navBtn && navBtn.style.display !== 'none'){
			navBtn.style.display = 'none'
		}
	}

	return (
		<div className='h-full md:overflow-hidden w-full
		overflow-auto md:hover:overflow-auto pb-10 flex flex-col justify-between'>
			
			<div className='mt-2'>
				{links.map((link, i)=>(
					<div key={i} className="relative">
						<NavLink
							to={`/dashboard/${link.name}`}
							key={link.name}
							onClick={handleCloseSideBar}
							className="flex flex-col items-center p-2 mb-1 text-slate-600 dark:text-gray-300 rounded-tr-md rounded-br-md cursor-pointer
							hover:bg-slate-100 hover:dark:bg-slate-700"
							style={({isActive})=>(isActive ? {borderRight : `3px solid ${currentColor}`} : {} )}
						>
							<span className='text-center text-2xl font-bold'>{link.icon}</span>
							<span className='capitalize text-[10px] font-extrabold'>{link.name}</span>

							{(link.name.toLowerCase() == 'portfolio' && portfolioCount > 0) && (<div className='absolute bottom-6 right-5 text-sm text-extrabold 
							bg-slate-800 w-4 h-4 rounded-full flex justify-center items-center' style={{color:currentColor}}>
								<span className='font-extrabold text-xs'>{portfolioCount}</span>
							</div>)}

							{(link.name.toLowerCase() == 'charts' && chartsCounts > 0) && (<div className='absolute bottom-6 right-2 text-sm text-extrabold 
							bg-slate-800 w-4 h-4 rounded-full flex justify-center items-center' style={{color:currentColor}}>
								<span className='font-extrabold text-xs'>{chartsCounts}</span>
							</div>)}		
						</NavLink>
					</div>
				))}
			</div>
			<div className=''>
				<NavLink to="/dashboard/modal/trading-options"
					onClick={handleCloseSideBar}
					className="flex flex-col items-center p-2 mb-1 text-slate-600 dark:text-gray-300 rounded-tr-md rounded-br-md cursor-pointer
					hover:bg-slate-100 hover:dark:bg-slate-700">
					<span className='text-center text-3xl font-bold'><IoIosSwitch/></span>
					<span className='capitalize text-[10px] font-extrabold block text-center'>Trading options</span>
				</NavLink>
				<NavLink to="/dashboard/modal/settings"
					onClick={handleCloseSideBar}
					className="flex flex-col items-center p-2 mb-1 text-slate-600 dark:text-gray-300 rounded-tr-md rounded-br-md cursor-pointer
					hover:bg-slate-100 hover:dark:bg-slate-700">
					<span className='text-center text-3xl font-bold'><BsGear/></span>
					<span className='capitalize text-[10px] font-extrabold'>Settings</span>
				</NavLink>
			</div>
			
		</div>
	)
}

export default Sidebar
