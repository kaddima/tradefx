import React from 'react'
import { Input } from '../components'
import {RadioInput} from "../components"

import addusericon from "../data/add-user-icon.png"

import { countries } from '../data/data'

const CreateUsers = () => {
  return (
    <div className='bg-white dark:bg-secondary-dark-bg h-full'>
		<div className='md:w-11/12 lg:w-3/5 mx-auto h-full'>
			<div className='flex justify-between items-center'>
				<h1 className='text-3xl text-slate-700 font-extrabold'>Create User</h1>
				<div className='w-20'>
					<img src={addusericon} alt="" />
				</div>
				
			</div>
			<form action="">
				<div className=''>
					<div className='text-slate-400 text-xs font-bold space-y-4'>
						<div className='flex gap-3'>
							<div className='w-2/4'>
								<label htmlFor="" className='block'>First Name</label>
								<Input name="firstname" className={`w-full form-input border border-slate-600 dark:bg-transparent`} 
								placeholder='First Name'/>
							</div>
							<div className=' w-2/4'>
								<label htmlFor="" className='block'>Last Name</label>
								<Input name="lastname" className={`w-full form-input border border-slate-600 dark:bg-transparent`}
								placeholder='Last Name'/>
							</div>
						</div>

						<div className='flex gap-3'>
							<div className='w-2/4'>
								<label htmlFor="" className='block'>Phone</label>
								<Input name="phone" className={`w-full form-input border border-slate-600 dark:bg-transparent`}
								placeholder='Phone'/>
							</div>
							<div className=' w-2/4'>
								<label htmlFor="" className='block'>Email</label>
								<Input name="email" className={`w-full form-input border border-slate-600 dark:bg-transparent`}
								placeholder='Email'/>
							</div>
						</div>

						<div className='flex gap-3 items-center'>
								<div className=' w-2/4'>
								<label htmlFor="" className='block'>Country</label>
								<select name='country' className={`w-full border form-select border-slate-600 dark:bg-transparent`}
								>
									<option value="">Select country</option>
									{countries.map((v,i)=>(
										<option key={i} value={v}>{v}</option>
									))}
								</select>
							</div>
							<div className='w-2/4'>
								<label htmlFor="" className='block'>State</label>
								<Input name="state" className={`w-full  border form-input border-slate-600 dark:bg-transparent`}
								placeholder='State'/>
							</div>
						
						</div>

						<div className='flex gap-3'>

							<div className='w-2/4 '>
								<label>Gender</label>
								<div className='flex gap-5'>
									<RadioInput name={"gender"} label="M" value="male"/>
									<RadioInput name={"gender"} label="F" value="female"
									className={`before:bg-slate-500 text-sky-500`}/>
								</div>
								
							</div>
							<div className=' w-2/4'>
								<label htmlFor="" className='block'>DOB</label>
								<Input name="dob" type={"date"} 
								className={`w-full form-input border border-slate-600 dark:bg-transparent`}/>
							</div>
						</div>

						<div className='flex gap-3'>
							<div className='w-2/4'>
								<label htmlFor="" className='block'>Password</label>
								<Input name="password" className={`w-full form-input border border-slate-600 dark:bg-transparent`}
								placeholder='Password'/>
							</div>
							<div className=' w-2/4'>
								<label htmlFor="" className='block'>Verify</label>
								<Input name="verify" className={`w-full form-input border border-slate-600 dark:bg-transparent`}
								placeholder='Verify password'/>
							</div>
						</div>

						<div className=''>
							<button className='w-full text-center text-sm font-bold capitalize
							 bg-green-800 hover:bg-green-700 p-2 rounded'>create user</button>
						</div>
						
					</div>
				</div>
			</form>
		</div>
    </div>
  )
}

export default CreateUsers