import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {NavLink} from "react-router-dom"
import {BsGear} from "react-icons/bs"
import {FiUsers} from "react-icons/fi"


//action
import {setActiveMenu_screenSize,} from '../store/mainSlice'

import {Sidebarlinks} from '../data/data'

const Sidebar = () => {

	const dispatch = useDispatch()
	const activeMenu = useSelector(state=>state.main.navMenu.activeMenu)
	const currentColor = useSelector(state=>state.main.currentColor)

	//get the super admin status of the logged in admin
	let admin = useSelector(state=>state.account.admin)
	const appFeatures = useSelector(state=>state.account.appFeatures)
	const handleCloseSideBar = ()=>{

		let screenSize = window.innerWidth
	
		if (activeMenu && screenSize <= 900) {
			dispatch(setActiveMenu_screenSize({active:false}))
		}
	}

	return (
		<div id='sideBar' className='h-full md:overflow-hidden
		overflow-auto md:hover:overflow-auto pb-4 flex flex-col'>
			{activeMenu && (
			<>

				<div className='mt-2 flex-1'>
					{Sidebarlinks.map((link, i)=>(
						<div key={i} className="">
							<NavLink
								to={`/admin/${link.name.toLowerCase().replace(' ','-')}`}
								key={link.name}
								onClick={handleCloseSideBar}
								className="flex flex-col items-center p-2 mb-1 text-slate-600 dark:text-gray-300 rounded-tr-md rounded-br-md cursor-pointer
								hover:bg-slate-100 border-r-2 border-transparent hover:dark:bg-slate-700"
								style={({isActive})=>(isActive ? {borderRight : `3px solid ${currentColor}`} : {} )}>
								<span className='text-center text-3xl font-bold'>{link.icon}</span>
								<span className='capitalize text-[10px] text-center font-extrabold'>{link.name}</span>
							</NavLink>
						</div>
					))}

					{admin && (admin.super_admin == 1 && appFeatures.adms == 1 && (<div className=''>
						<NavLink to={"/admin/all-admin"} 
						className="flex flex-col items-center p-2 mb-1 text-slate-600 dark:text-gray-300 rounded-tr-md rounded-br-md cursor-pointer
							hover:bg-slate-100 hover:dark:bg-slate-700" 
							onClick={handleCloseSideBar}>
							<span className='text-center text-3xl font-bold'><FiUsers/></span>
							<span className='capitalize text-[10px] font-extrabold'>ADMS</span>
						</NavLink>
					</div>))}
					
				</div>
				<div className=''>
					<NavLink to={"/admin/modal/settings/account"} className="flex flex-col items-center p-2 mb-1 text-slate-600 dark:text-gray-300 rounded-tr-md rounded-br-md cursor-pointer
						hover:bg-slate-100 hover:dark:bg-slate-700" 
						onClick={handleCloseSideBar}>
						<span className='text-center text-3xl font-bold'><BsGear/></span>
						<span className='capitalize text-[10px] font-extrabold'>Settings</span>
					</NavLink>
				</div>
			</>)}
		</div>
	)
}

export default Sidebar
