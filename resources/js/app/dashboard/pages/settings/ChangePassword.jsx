import React,{useState} from 'react'
import Textfield from '../../components/Textfield'
import axios from 'axios'
import { toast, Toast } from 'react-toastify'

// ICONS
import {RiLockPasswordLine} from "react-icons/ri"

const ChangePassword = () => {

	const [inputValues, setInputValues] = useState({old_password:'',new_password:'',confirm_password:''})
	const [error,setError] = useState('')
	const handleOnChange = (e)=>{

		const {name,value} = e.target

		setInputValues((prev)=>({
			...prev, [name]:value
		}))
	}
	
	const handleSubmit = (e)=>{
		e.preventDefault()
		axios.post('/change-password',inputValues).then(data=>{
			if(data.data.status){
				setInputValues({old_password:'',new_password:'',confirm_password:''})
				setError('')
				toast('Password changed successfully')
				//console.log(data.data)
			}else{
				setError(data.data.error[0])
				//console.log(data.data)
			}
		}).catch(e=>{
			
		})
	}

  return (
    <>
		<div className='h-full flex items-center rounded-lg px-4 py-3 '>
			<div className='bg-gray-200 dark:bg-slate-800 w-full p-5'>
				<div className='flex justify-between items-center'>
					<div>
						<h1 className='text-sm font-bold'>Change password</h1>
						<p className='text-xs'></p>
					</div>
					
					<span className='text-4xl opacity-60'><RiLockPasswordLine/></span>	
				</div>
				<div className='mt-3'>
					<span className='text-red-500 font-semibold text-sm'>{error}</span>
				</div>
				
				<form className='mt-4' onSubmit={handleSubmit}>
					<Textfield 
					placeHolder="Enter your old password"
					label="Old password"
					type="password"
					id="password"
					value={inputValues.old_password}
					name="old_password"
					onChange={handleOnChange}/>
					<Textfield 
					placeHolder="Old password"
					label="New password"
					type="password"
					id="new_password"
					name="new_password"
					value={inputValues.new_password}
					onChange={handleOnChange}/>
					<Textfield 
					placeHolder="Confirm password"
					label="Confirm password"
					type="password"
					id="confirm_password"
					name="confirm_password"
					value={inputValues.confirm_password}
					onChange={handleOnChange}/>
					<div className='mt-3'>
						<button type='submit' className='text-sm text-black p-1 rounded bg-blue-300'>
							Change
						</button>
					</div>
					
				</form>
			</div>
			
		</div>

	</>
  )
}

export default ChangePassword