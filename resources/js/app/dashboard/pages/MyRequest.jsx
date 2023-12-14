import React from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from "react-router-dom"

import {MdOutlineClose,MdConnectWithoutContact} from "react-icons/md"

import { modalContentDisply } from '../store/mainSlice'

const MyRequest = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
  return (
    <div className='bg-gray-50 h-[400px] text-gray-900 dark:text-gray-300 dark:bg-main-dark-bg rounded-xl overflow-hidden'>
        <div className='h-10 flex justify-between items-center pr-3 bg-gray-50 dark:bg-secondary-dark-bg'>
            <p className='flex-1 text-center text-sm font-bold'>My Requests</p>
            <span className='text-xl cursor-pointer' onClick={()=>{navigate(-1)}}><MdOutlineClose/></span>
        </div>
        <div className='dark:bg-secondary-dark-bg p-8 h-full'>
			<div className='text-center'>
				<span className='text-5xl text-slate-600 block'><MdConnectWithoutContact className=' mx-auto'/></span>
				<p className='text-sm font-bold mt-5'>You have no active requests</p>
				<span className='text-xs font-semibold'>We will contct you if we need additional information</span>
			</div>
        </div>
    </div>
  )
}

export default MyRequest