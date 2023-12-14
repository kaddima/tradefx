
import React,{useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'

import {BsInfoCircle} from "react-icons/bs"
import {FaRegEdit} from "react-icons/fa"
import {FiUserCheck} from "react-icons/fi"
import {MdBlock,MdDelete,MdOutlineAdminPanelSettings} from "react-icons/md"

import User from "../../data/user.png"

//import { BalanceSheet } from '../../components'


const PersonalDetails = () => {

	const userId = 1 //= useParams().id
	const location = 1// = useLocation().pathname
	const user = {}  //useSelector(state=>state.account.user)
	const dispatch = useDispatch()

	const currentColor = useSelector(state=>state.main.currentColor)

	if(user.first_name == null){

		return(
			<div className='flex flex-col h-full text-gray-200 bg-slate-100  dark:bg-secondary-dark-bg items-center justify-center'>
				<div className='text-center text-gray-600 dark:text-gray-200 '>
					<div className='w-20 h-20 bg-gray-200 dark:bg-slate-800 rounded-full mx-auto flex justify-center items-center'>
						<FiUserCheck className='text-5xl'/>
					</div>
					<p className='text-sm font-bold'>Please Complete your Registration</p>
					<p className='text-xs'>Your personal profile would be display here once Registration is completed</p>
				</div>
			</div>
		)
	}

  return (
    <div className='h-full text-gray-200'>
        <div className='flex items-center md:px-2 h-full'>
            <div className='flex rounded md:w-full bg-slate-100 dark:bg-slate-900 py-5'>
                <div className='w-2/6 flex flex-col pl-4'>
                    <div className='flex flex-col flex-1'>
                        <div className='w-32 h-32 rounded-full mx-auto bg-slate-300 dark:bg-slate-800 '>
                            <img src={User} className="w-full" alt="" />
                        </div> 
                    </div>
                    {/* <button className='mt-5 block text-xs font-semibold text-slate-800 dark:text-slate-400
                     bg-slate-400 dark:bg-slate-800 rounded py-3 text-center'>Edit</button> */}
                </div>

                <div className='w-4/6 space-y-5 text-slate-700 dark:text-slate-400 pl-4 pr-2'>
                    <div className='flex items-center justify-between'>
                        <div className='w-2/4 space-y-2'>
                            <h1 className='text-lg font-bold'>{user.first_name}{' '}{user.middle_name}{' '}{user.last_name}</h1>
							<div className='text-xs  font-extrabold'>
                                <span>Account type :</span>
                                <span className='inline-block ml-3 '>{user.is_admin == 0 ? 'Regular' : 'Admin'}</span>
                            </div> 
                        </div>
                        <div className='space-y-2'>
                            <div  className='text-xs font-extrabold'>
                                <span className='inline-block w-20'>Status :</span>
                                <span className='inline-block p-1 bg-green-800 text-slate-200  rounded'>{user.active == 1 ? 'Active' : 'complete registration'}</span>
                            </div>
                        </div>
                        
                    </div>
                    <div className='pt-2'>
                        <p className='uppercase font-bold text-sm '>Contact information</p>

                        <div className='mt-4 space-y-2 text-xs font-bold'>
                            <div className='flex'>
                                <span className='w-32'>Phone</span>
                                <span className=' font-semibold'>{user.phone}</span>
                            </div>
                            <div className='flex'>
                                <span className='w-32'>Address</span>
                                <span className=' font-semibold'>{user.address}</span>
                            </div>
                            <div className='flex'>
                                <span className='w-32'>Email</span>
                                <span className=' font-semibold'>{user.email}</span>
                            </div>
                            <div className='flex'>
                                <span className='w-32'>Country</span>
                                <span className=' font-semibold'>{user.country}</span>
                            </div>
                            <div className='flex'>
                                <span className='w-32'>City</span>
                                <span className=' font-semibold'>{user.state}</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className='uppercase font-bold text-sm '>Basic Information</p>
                        <div className='mt-3 space-y-3  text-xs font-bold'>
                            <div className='flex'>
                                <span className='w-32'>Birthday</span>
                                <span className=' font-semibold'>{user.dob}</span>
                            </div>
                            <div className='flex'>
                                <span className='w-32'>Gender</span>
                                <span className=' font-semibold'>{user.gender}</span>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
		
    </div>
  )
}

export default PersonalDetails