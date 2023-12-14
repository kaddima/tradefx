import React,{useEffect, useState}  from 'react'
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import {AiOutlineMenu} from "react-icons/ai"

import {BiChevronDown} from "react-icons/bi"

import {SiShopware} from "react-icons/si"

import { toggleActiveMenu,setActiveMenu_screenSize,
	toggleAccountModal } from '../store/mainSlice'


const NavButton = ({title, customFunc,icon,color,dotColor})=>{
return (
		<button type='button' title={title}
			style={{color}}
			className="relative text-xl rounded-full p-3 hover:bg-light-gray" 
			onClick={customFunc}>
			<span style={{background:dotColor}}
			className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"/>
			{icon}
			
		</button>
	)
}


const Navbar = () => {
	const dispatch = useDispatch()

	const [screenSize,setScreenSize] = useState()
	const currentColor = useSelector(state=>state.main.currentColor)
	
	// useEffect(()=>{
	// 						//get the screen size
	// 	const handleResize = ()=>setScreenSize(window.innerWidth)

	// 	window.addEventListener('resize', handleResize)

	// 	handleResize()

	// 	return ()=>window.removeEventListener('resize', handleResize)
	// },[])

	// useEffect(()=>{

	// 	if (screenSize <= 900) {
	// 		dispatch(setActiveMenu_screenSize({active:false,screenSize}))
	// 	}else{
	// 		dispatch(setActiveMenu_screenSize({active:true,screenSize}))
	// 	}

	// },[screenSize])

	return (
		<div className='flex justify-between relative items-center flex-1'>
			<NavButton 
				title="Menu" 
				color={currentColor}
				icon={<AiOutlineMenu/>}
				customFunc={()=>dispatch(toggleActiveMenu('activeMenu'))}
			/>
			<div className=''>
				<Link to="/dashboard" 
					className="items-center ml-3 flex text-xl 
					font-extrabold tracking-tight dark:text-white  text-slate-900">
						<img src="/images/logo/logo.png" className='w-28' alt="" />
				</Link>	
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
	)
}

export default Navbar