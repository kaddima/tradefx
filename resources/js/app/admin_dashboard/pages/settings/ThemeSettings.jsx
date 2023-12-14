import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import {toast} from 'react-toastify'
import {BsCheck} from "react-icons/bs"
import { themeColors } from '../../data/data'

import { setTheme, setColor, setThemeSettings } from '../../store/mainSlice';
import { updateSuperAdminConfig } from '../../store/accountSlice';


const ThemeSettings = () => {

	const dispatch = useDispatch()
	const currentColor = useSelector(state=>state.main.currentColor)
	const adminDetails = useSelector(state=>state.account.admin)

	const admin_config = useSelector(state=>state.account.superAdminConfig)

	const handleThemeChange = (e)=>{

		const themeValue = e.target.value
		dispatch(setTheme(themeValue))
	}

	const handleColorClick = (item)=>{

		return function(e){
			
			const color = item.color

			//localStorage.setItem('currentColor', color)
			dispatch(setColor(color))

			// hide the themesettings
			dispatch(setThemeSettings({display:false}))
		}	
	}

	const handleCustomize = (e)=>{

		let action = e.target.dataset.type
		//get the logged in super admin details

		if(adminDetails.super_admin == 1){

			let admin_id = adminDetails.id

			axios.post('/admin/admin-config', {action,admin_id}).then(data=>{

				toast('Status change', {type:'success'})
				dispatch(updateSuperAdminConfig(data.data.data))


			}).catch(e=>{
				console.log(e.response)
			})
		}

	}

	return (
	
		<div className='h-full text-slate-800 dark:text-gray-500 py-3 px-3  rounded-lg flex items-center'>	
			<div className='w-full bg-gray-300 dark:bg-slate-800 p-5 rounded-lg'>
				<h1 className='text-sm font-extrabold dark:text-gray-100 text-center mb-5'>Settings</h1>

				{adminDetails && (adminDetails.super_admin == 1 && (<div className='text-xs font-semibold dark:text-gray-300 space-y-2 mb-2'>
					<div className='flex flex-wrap justify-between items-center'>
						<p>Alert super admin on Credit transactions</p>
						<button 
						className={admin_config.credit_alert == 1 ? 'text-red-600' : 'text-green-600'}
						data-type="credit_alert" 
						onClick={handleCustomize}>{admin_config.credit_alert == 1 ? 'OFF' : 'ON'}</button>
					</div>
					<div className='flex flex-wrap justify-between items-center'>
						<p>Choose payment details</p>
						<button data-type="payment_details" onClick={handleCustomize}>{admin_config.payment_details == 1 ? 'Super admin' : 'Admin'}</button>	
					</div>	
				</div>))}
								
				
				<div className='flex-col border-t-1 border-slate-200 dark:border-slate-700 space-y-3 py-3'>
					<p className='text-sm font-bold'>Theme Options</p>
					<div className='flex gap-2'>
						<div className='flex gap-1'>
							<input type="radio" id='dark' className='form-radio border border-slate-400 dark:border-slate-700 ' 
							onClick={handleThemeChange}
							value="dark" name='theme'/>
							<label htmlFor="dark">Dark</label>
						</div>
						<div className='flex gap-1 ml-3'>
							<input type="radio" id='light' className='form-radio border border-slate-400 dark:border-slate-700'
							onClick={handleThemeChange}
							value="light" name='theme'/>
							<label htmlFor="light">Light</label>
						</div>
					</div>
				</div>
				<div className='flex-col border-t-1 border-slate-200 dark:border-slate-700	space-y-3 py-3'>
					<p className='font-bold text-sm'>Theme Colors</p>
					<div className='flex gap-3 mt-3'>
						{themeColors.map((item, i)=>( 
							<div className='cursor-pointer' title={item.name} key={i}>
								<button type='button' className='h-6 w-6 rounded-full 
								cursor-pointer flex items-center justify-center' 
								style={{backgroundColor:item.color}}
								onClick={handleColorClick(item)}>
									<BsCheck className={`text-2xl text-white 
									${item.color===currentColor ? "block" : "hidden"}`}/>
								</button>
							</div>						
						))}		
					</div>
				</div>
			</div>		
			
		</div>		
	)
}

export default ThemeSettings