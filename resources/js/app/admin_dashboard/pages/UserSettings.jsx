import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {useParams} from "react-router-dom"
import axios from 'axios'

import {BsInfoCircle} from "react-icons/bs"
import {FaRegEdit} from "react-icons/fa"
import {MdBlock,MdDelete,MdOutlineAdminPanelSettings} from "react-icons/md"

import { updateUserConfig } from '../store/accountSlice'

import User from "../data/user.png"
import { format, parseISO } from 'date-fns'


const UserSettings = () => {

    const userId = useParams().id
    const userProfile = useSelector(state=>state.account.user)
    const userConfig = useSelector(state=>state.account.userConfig)
    const tasksCount = useSelector(state=>state.portfolio.tasks).length
    const dispatch = useDispatch()

    const handleConfigAction = (e)=>{

        let config_type = e.currentTarget.dataset.config

        axios.post('/admin/user-config',{config_type,user_id:userId})
        .then(data=>{

            if(data.data.status == 1){
                dispatch(updateUserConfig(data.data.data))
            }
        }).catch(e=>{
            console.log(e)
        })
    }

    // useEffect(()=>{

    //     //get the user configuration
    //     axios.get('/admin/user-config',{params:{user_id:userId}})
    //     .then(data=>{
    //         if(data.data.status == 1){

    //             let config = data.data.data
    //             dispatch(updateUserConfig(config))
    //         }
    //     }).catch(e=>{

    //         console.log(e.response)
    //     })

    // },[])

  return (
    <div className='h-full text-gray-200 overflow-auto'>
        <div className=' md:px-2 bg-secondary-dark-bg overflow-auto'>
            <div className='flex flex-col md:flex-row rounded md:w-full lg:w-4/5 mx-auto py-5 bg-slate-900'>
                <div className='md:w-2/6 flex flex-col order-2 md:order-1'>
                    <div className='flex flex-col flex-1'>
                        <div className='w-40 rounded-full mx-auto bg-slate-800 h-40 hidden md:block '>
                            <img src={User} className="w-full" alt="" />
                        </div>

                        <div className='flex-1 px-5 mt-5'>
                            <h1 className='text-sm mb-3 text-center font-bold text-slate-600 uppercase'>Customization</h1>
                            <div className='text-xs space-y-1 border-b-1 border-b-slate-700 pb-1 text-slate-500 font-bold'>
                            <h4 className='text-sm text-slate-400'>Payment methods</h4> 
                            <div className='flex items-center justify-between'>
                                    <span className='w-32'>Credit Card</span>
                                    <button className={`text-slate-200 ${userConfig?.card_payment == 1 ? 'bg-green-800' : 'bg-orange-700'} p-1 rounded font-semibold`} data-config={'card_payment'}
                                    onClick={handleConfigAction}>{userConfig?.card_payment == 1 ? 'Enabled' : 'Disabled'}</button>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <span className='w-32'>Transfer</span>
                                    <button className={`text-slate-200 ${userConfig?.transfer_payment == 1 ? 'bg-green-800' : 'bg-orange-700'} p-1 rounded font-semibold`} data-config={'transfer_payment'}
                                    onClick={handleConfigAction}>{userConfig?.transfer_payment == 1 ? 'Enabled' : 'Disabled'}</button>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <span className='w-32'>BTC Payment</span>
                                    <button className={`text-slate-200 ${userConfig?.crypto_payment == 1 ? 'bg-green-800' : 'bg-orange-700'} p-1 rounded font-semibold`} data-config={'crypto_payment'}
                                    onClick={handleConfigAction}>{userConfig?.crypto_payment == 1 ? 'Enabled' : 'Disabled'}</button>
                                </div>
                            </div>

                            <div className='text-xs mt-3 space-y-1 border-b-1 border-b-slate-700 pb-1 text-slate-500 font-bold'>
                                <h1 className='text-slate-400'>customize trader</h1>
                                <div className='flex items-center justify-between'>
                                    <span className='w-32'>Trading By</span>
                                    <button className={`text-slate-200 bg-green-800 p-1 rounded font-semibold`} data-config={'admin_trade'}
                                    onClick={handleConfigAction}>{userConfig?.admin_trade == 1 ? 'Admin':'User'}</button>
                                </div>
                            </div>
                            
                            <div className='text-xs space-y-1 border-b-1 border-b-slate-700 pb-1 text-slate-500 font-bold'>
                                <h1 className='text-slate-400'>Personalize User edit</h1>
                                <div className='flex items-center justify-between'>
                                    <span className='w-32'>User Profile</span>
                                    <button className={`text-slate-200 ${userConfig?.edit_profile == 1 ? 'bg-green-800' : 'bg-orange-700'} p-1 rounded font-semibold`} data-config={'edit_profile'}
                                    onClick={handleConfigAction}>{userConfig?.edit_profile == 1 ? 'Enabled':'Disabled'}</button>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <span className='w-32'>Update Password</span>
                                    <button className={`text-slate-200 ${userConfig?.change_password == 1 ? 'bg-green-800' : 'bg-orange-700'} p-1 rounded font-semibold`} data-config={'change_password'}
                                    onClick={handleConfigAction}>{userConfig?.change_password == 1 ? 'Enabled':'Disabled'}</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className='relative w-full'>
                        <div className='flex items-center justify-between text-xs text-slate-400 font-bold border-b-1 border-b-slate-800'>
                            <div className='p-2 w-20 text-center cursor-pointer hover:bg-slate-800'>
                                <p className='text-3xl text-emerald-900'><FaRegEdit className='mx-auto'/></p>
                                <p>Edit user</p>
                                
                            </div>
                            <div className='p-2 w-20 text-center cursor-pointer hover:bg-slate-800'>
                                <p className='text-3xl text-red-900'><MdBlock className='mx-auto'/></p>
                                <span>block</span>
                                
                            </div>
                            <div className='p-2 w-20 text-center cursor-pointer hover:bg-slate-800'>
                                <p className='text-3xl text-red-900'><MdDelete className='mx-auto'/></p>
                                <span>delete</span>
                                
                            </div>
                            <div className='p-2 w-20 text-center cursor-pointer hover:bg-slate-800'>
                                <p className='text-3xl text-green-900'><MdOutlineAdminPanelSettings className='mx-auto'/></p>
                                <span>Admin Access</span>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className='md:w-4/6 space-y-5 pl-4 order-1 md:order-2'>
                   
                    <div className='flex flex-col md:flex-row items-center gap-2'>
                        <div className='w-full md:w-2/4 space-y-2'>
                            <h1 className='text-3xl font-bold'>{userProfile.first_name}{' '}{userProfile?.middle_name}{' '}{userProfile.last_name}</h1>
                            <div className='text-xs text-slate-500 font-extrabold'>
                                <span>Account type :</span>
                                <span className='inline-block md:ml-3 text-slate-400'>{userProfile.is_admin == 1 ? 'Admin':'Regular'}</span>
                            </div> 
                        </div>
                        <div className='w-full md:w-2/4 space-y-2'>
                            <div  className='text-xs text-slate-500 font-extrabold'>
                                <span className='inline-block md:w-20'>Status :</span>
                                <span className={`inline-block ml-1 p-1 ${userProfile.active==1?"bg-green-800":'bg-orange-700'}  text-slate-300 rounded`}>{userProfile.active==1?'Active':'Inactive'}</span>
                            </div>
                            {/* <div  className='text-xs text-slate-500 font-extrabold'>
                                <span className='inline-block w-20'>Last seen :</span>
                                <span className='inline-block p-1  text-slate-300 rounded'>1 hour ago</span>
                            </div> */}      
                        </div>
                        
                    </div>
                    <div>
                        <h1 className='text-sm font-bold text-slate-400'>Tasks available <span className='cursor-pointer inline-block ' title='number of pending profit or loss '><BsInfoCircle/></span></h1>
                        <span className='text-slate-300 text-sm font-extrabold'>{tasksCount}</span>
                    </div>

                    <div className='pt-2'>
                        <p className='uppercase font-bold text-sm text-slate-700'>Contact information</p>

                        <div className='mt-4 space-y-3 text-slate-500 text-sm font-bold'>
                            <div className='md:w-2/4 flex'>
                                <span className='w-32'>Phone</span>
                                <span className='text-slate-400 font-semibold'>{userProfile.phone}</span>
                            </div>
                            <div className='md:w-3/4 flex'>
                                <span className='w-32'>Address</span>
                                <span className='text-slate-400 font-semibold'>{userProfile.address}</span>
                            </div>
                            <div className='md:w-3/4 flex'>
                                <span className='w-32'>Email</span>
                                <span className='text-slate-400 font-semibold'>{userProfile.email}</span>
                            </div>
                            <div className='md:w-3/4 flex'>
                                <span className='w-32'>Country</span>
                                <span className='text-slate-400 font-semibold'>{userProfile.country}</span>
                            </div>
                            <div className='md:w-3/4 flex'>
                                <span className='w-32'>City</span>
                                <span className='text-slate-400 font-semibold'>{userProfile.state}</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className='uppercase font-bold text-sm text-slate-700'>Basic Information</p>
                        <div className='mt-3 space-y-3 text-slate-500 text-sm font-bold'>
                            <div className='md:w-2/4 flex'>
                                <span className='w-32'>Birthday</span>
                                <span className='text-slate-400 font-semibold'>{userProfile.dob && format(parseISO(userProfile.dob),"dd MMM Y")}</span>
                            </div>

                            <div className='md:w-2/4 flex'>
                                <span className='w-32'>Gender</span>
                                <span className='text-slate-400 font-semibold'>{userProfile.gender}</span>
                            </div>
                        </div>
                    
                    </div>
                </div>   
            </div>
        </div>
		
    </div>
  )
}

export default UserSettings