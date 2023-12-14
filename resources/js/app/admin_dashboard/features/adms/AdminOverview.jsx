import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Outlet, NavLink,useNavigate,useParams} from "react-router-dom"

import { SettingLists } from "../../data/data"
import {MdOutlineClose,MdPostAdd,MdOutlineHistory} from "react-icons/md"
import {FiUsers} from "react-icons/fi"


const AdminOverview = () => {
    const currentColor = useSelector(state=>state.main.currentColor)
    //damin id from route
    const admin_id = useParams().admin_id
    //get all users
    const users = useSelector(state=>state.account.users)
    let adminDetails = {}
    const dispatch = useDispatch()
    const navigate = useNavigate()


    for (let i=0, len = users.length; i < len; i++){

        if(users[i].id == admin_id){

            adminDetails = users[i]

            break          
        }

    }

  
    return (
    <div className='h-full bg-gray-200 text-slate-800 dark:text-gray-300 dark:bg-main-dark-bg rounded-xl overflow-hidden flex flex-col gap-1'>
        <div className='h-10 flex justify-between items-center pr-3 pl-3 bg-gray-50 dark:bg-secondary-dark-bg'>
            <p className='text-sm font-bold'>Admin Overview</p>
            <p className='text-sm' style={{color:currentColor}}>{adminDetails.first_name ? (adminDetails.first_name +' '+ adminDetails.last_name) : adminDetails.email}</p>
        </div>
        <div className='flex-1 flex flex-col md:flex-row gap-1' style={{height:"calc(100% - 2.5rem)"}}>
            <div className='md:w-[200px] pt-2 bg-gray-50 dark:bg-secondary-dark-bg'>
                <div className='flex md:block flex-wrap h-full overflow-auto my-1'>
                    <NavLink to={`/admin/all-admin/${admin_id}/users`}
                        className='flex hover:dark:bg-slate-800 cursor-pointer border-r-2 border-r-transparent
                            items-center py-3 pl-2'
                            style={({isActive})=>(isActive ? {borderRightColor:currentColor, backgroundColor:"rgba(100,116,139,0.4)"}: {})}>
                        <span className='text-xl text-gray-500 dark:text-slate-500'><FiUsers/></span>
                        <span className='ml-2 text-xs font-bold capitalize'>Users</span>
                    </NavLink> 
                    <NavLink to={`/admin/all-admin/${admin_id}/credit-list`}
                        className='flex hover:dark:bg-slate-800 cursor-pointer border-r-2 border-r-transparent
                            items-center py-3 pl-2'
                            style={({isActive})=>(isActive ? {borderRightColor:currentColor, backgroundColor:"rgba(100,116,139,0.4)"}: {})}>
                        <span className='text-xl text-gray-500 dark:text-slate-500'><MdPostAdd/></span>
                        <span className='ml-2 text-xs font-bold capitalize'>All Credit</span>
                    </NavLink>                        
                </div>
            </div>
            <div className='flex-1 h-full overflow-auto px-2 text-slate 
            bg-gray-50 dark:bg-secondary-dark-bg pt-7 md:pt-1'>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default AdminOverview