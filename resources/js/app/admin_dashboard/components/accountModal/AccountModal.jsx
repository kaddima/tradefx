import React from 'react'
import {NavLink} from "react-router-dom"

import {BiUserCircle} from "react-icons/bi"
import {TbLogout } from 'react-icons/tb';

import { useDispatch } from 'react-redux'



const AccountModal = () => {

  const dispatch = useDispatch()

  return (
    <div id='account-modal' className='absolute hidden right-1 top-16 mt-1 mr-2 md:mr-0 shadow-sm  px-1 py-1
	 rounded-lg cursor-pointer z-[1000] w-3/4 md:w-278 bg-slate-100 shadow-black  dark:bg-slate-800'>
        <div className=''>
              
			<NavLink to={`/admin/modal/settings/account`}
					 className='block w-full hover:bg-slate-300 hover:dark:bg-slate-700 dark:text-gray-50 
			font-bold px-2 py-2 md:px-3 md:py-3 rounded-lg'>
					<div className='flex items-center'>
						<span className='text-lg md:text-3xl inline-block mr-3'><BiUserCircle/></span>
						<span className='inline-block capitalize text-sm '>account</span>
					</div>
			</NavLink>
			<button className='block w-full hover:bg-slate-300 hover:dark:bg-slate-700 items-center dark:text-gray-50 
				font-bold px-2 py-2 md:px-3 md:py-3 rounded-lg'
				onClick={()=>{

					location.href = '/logout'
				}}>
				<div className='flex items-center'>
					<span className='text-lg md:text-3xl inline-block mr-3'><TbLogout/></span>
					<span className='inline-block capitalize text-sm '>Log out</span>
				</div>
			</button>

                    
                
        </div>
    </div>
  )
}

export default AccountModal