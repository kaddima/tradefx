import React from 'react'

import { AccountModalLists } from '../../data/data'
import {NavLink} from "react-router-dom"

import {FaAngleRight} from "react-icons/fa"
import {BiUserCircle} from "react-icons/bi"
import {FiSettings} from "react-icons/fi"

import { useDispatch, useSelector } from 'react-redux'


const AccountModal = () => {

	const userActive = useSelector(state=>state.account.user.active)
  const dispatch = useDispatch()

  const handleOnClick = (list)=>{

  /* DIFFERENT FUNCTIONS TO RETURN BASED ON ACTIONS NEEDED */

    const logOut = ()=>{

        location.href = '/logout'
    }

  switch (list.id) {
    //Account status
    // SWITCH TO DEMO
    case 6:
        switchDemo()
        break;

	case 7:
		logOut()
		break;
  }

}
  return (

	<div id='account-modal'
		className='absolute right-1 hidden top-16 cursor-pointer z-[1000] mt-1 shadow-sm bg-slate-100
		shadow-black w-3/4 md:w-278 dark:bg-slate-800 px-1 py-1 rounded-lg'>

      	<div className='flex justify-between acct-modal-link hover:bg-slate-300 hover:dark:bg-slate-700 items-center dark:text-gray-50
			font-bold px-2 py-2 md:px-3 md:py-3 rounded-lg' onClick={()=>{userActive == 1 ? '' :location.href = '/complete-registration'}}>
			<div className='flex items-center'>
				<span className='text-lg md:text-3xl inline-block mr-3'><BiUserCircle/></span>
				<span className='inline-block capitalize text-sm '>Account Status</span>
			</div>
			{userActive == 1 ?
			(<span className='text-xs p-1 text-gray-200 bg-green-500 rounded'>Verified</span>) :
			(<span className='text-xs p-1 text-gray-200 bg-orange-500 rounded'>not verified</span>)
			}
		</div>
		<NavLink to={`/dashboard/modal/settings`} className='flex justify-between acct-modal-link hover:bg-slate-300 hover:dark:bg-slate-700 items-center dark:text-gray-50
			font-bold px-2 py-2 md:px-3 md:py-3 rounded-lg'>
			<div className='flex items-center'>
				<span className='text-lg md:text-3xl inline-block mr-3'><FiSettings/></span>
				<span className='inline-block capitalize text-sm '>My Account</span>
			</div>
			<span className='font-bold text-xl'><FaAngleRight/></span>
		</NavLink>

		{AccountModalLists.map((list, i)=>(
		<NavLink to={`/dashboard/modal/${list.title.toLowerCase().replace(' ','-')}`}
		key={i} className='flex justify-between acct-modal-link hover:bg-slate-300 hover:dark:bg-slate-700 items-center dark:text-gray-50
		font-bold px-2 py-2 md:px-3 md:py-3 rounded-lg' onClick={()=>handleOnClick(list)}>
			<div className='flex items-center'>
				<span className='text-lg md:text-3xl inline-block mr-3'>{list.icon}</span>
				<span className='inline-block capitalize text-sm '>{list.title}</span>
			</div>
			{list.title === "account status" && <span className='text-[10px] p-[2px] text-gray-200 bg-orange-500 rounded'>not verified</span>}
			{list.title !== "account status" && <span className='font-bold text-xl'><FaAngleRight/></span>}
		</NavLink>
		))}
	</div>
  )
}

export default AccountModal
