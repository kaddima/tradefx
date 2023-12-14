import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Outlet, NavLink,useNavigate} from "react-router-dom"

import { SettingLists } from "../../data/data"
import {MdOutlineClose} from "react-icons/md"


const Settings = () => {
    const currentColor = useSelector(state=>state.main.currentColor)
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    return (
    <div className='h-full bg-gray-200 text-slate-800 dark:text-gray-300 dark:bg-main-dark-bg rounded-xl overflow-hidden flex flex-col gap-1'>
        <div className='h-10 flex justify-between items-center pr-3 bg-gray-50 dark:bg-secondary-dark-bg'>
            <p className='flex-1 text-center text-sm font-bold'>Settings</p>
            <span className='text-xl cursor-pointer' onClick={()=>{navigate('/admin/dashboard')}}><MdOutlineClose/></span>
        </div>
        <div className='flex-1 flex flex-col md:flex-row gap-1'>
            <div className='md:w-[200px] pt-2 bg-gray-50 dark:bg-secondary-dark-bg'>
                <div className='flex md:block flex-wrap h-full overflow-auto'>
                    {SettingLists.map((list, i)=>(
                        <NavLink to={`/admin/modal/settings/${list.title.replace(' ','-')}`}
                            key={i}
                            className='flex hover:dark:bg-slate-800 cursor-pointer border-r-2 border-r-transparent
                             items-center py-3 pl-2'
                             style={({isActive})=>(isActive ? {borderRightColor:currentColor, backgroundColor:"rgba(100,116,139,0.4)"}: {})}>
                            <span className='text-xl text-gray-500 dark:text-slate-500'>{list.icon}</span>
                            <span className='ml-2 text-xs font-bold capitalize'>{list.title}</span>
                        </NavLink>
                    ))}   
                </div>
            </div>
            <div className='flex-1 h-full overflow-auto px-5 text-slate 
            bg-gray-50 dark:bg-secondary-dark-bg pt-7 md:pt-1'>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Settings