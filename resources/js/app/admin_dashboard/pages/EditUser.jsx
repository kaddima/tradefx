import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

import { countries } from '../data/data'

const EditUser = () => {

    const user_id = useParams().id
    const user = useSelector(state=>state.account.user)

    const [userProfile, setUserProfile] = useState({
        first_name:'',middle_name:'',last_name:'',
        phone:'',dob:'',email:'',country:'',
        state:'',address:''})

        useEffect(()=>{
            setUserProfile({
                first_name:user.first_name,
                middle_name:user.middle_name,
                last_name:user.last_name,
                phone:user.phone,
                dob:user.dob,
                email:user.email,
                country:user.country,
                state:user.state,
                address:user.address,
                type:'update',
                user_id})
        },[user])

        const handleChange = (e)=>{

            let name = e.target.name
            let value = e.target.value

            setUserProfile({...userProfile, [name]:value})
        }

        const handleSubmit = (e)=>{
            e.preventDefault()
            
            //console.log(userProfile)
            axios({
                method:'post',
                url:'/admin/user-action',
                data:userProfile,
                //responseType:'json',
                
            }).then(data=>{
                if(data.data.status == 1){

                    toast('User profile updated')
                }
            }).catch(e=>{
                console.log(e)
            })
        }
  return (
    <div className="py-10 h-full bg-white dark:bg-secondary-dark-bg overflow-auto" >
        <div className="md:w-5/6 lg:w-4/6 mx-auto py-10 rounded-3xl shadow">
            <div className="">       
                <div>
                    <div className="text-center mb-4">
                        <h1 className="text-slate-500 font-bold text-2xl">Edit Account</h1>
                    </div>
                    <form  method="POST" onSubmit={handleSubmit} className="space-y-6 text-slate-500 text-xs md:text-sm font-semibold">
                        
                        <div className="flex flex-col md:flex-row mx-2 justify-between gap-5">
                            <div className="flex-1 space-y-5">
                                <div className="flex flex-col md:flex-row md:items-center gap-2">
                                    <div className="space-y-1 flex-1">
                                        <label htmlFor="">First name</label>
                                        <input type="text" name="first_name" value={userProfile.first_name} placeholder="Enter first name"
                                                className="block border w-full md:pl-4 rounded-xl form-input bg-transparent"
                                                onChange={handleChange}/>
                                    </div>
                                    <div className="space-y-1 flex-1">
                                        <label htmlFor="">Middle name</label>
                                        <input type="text" name="middle_name" value={userProfile.middle_name} placeholder="Enter middle name"
                                                className="block border w-full md:pl-4 rounded-xl form-input bg-transparent"
                                                onChange={handleChange}/>
                                    </div>

                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="">Last name</label>
                                    <input type="text" name="last_name" value={userProfile.last_name} placeholder="Enter last name"
                                            className="block border w-full pl-4 rounded-xl form-input bg-transparent"
                                            onChange={handleChange}/>
                                </div>
                                <div className="">
                                    <div className="space-y-1 flex-1">
                                        <label htmlFor="">Date of birth</label>
                                        <input type="date" name="dob" value={userProfile.dob} 
                                                className="block border w-full pl-4 rounded-xl form-input bg-transparent"
                                                onChange={handleChange}/>
                                        
                                    </div>

                                </div>

                            </div>

                            <div className="flex-1 space-y-5">
                                <div className="flex gap-2">
                                    <div className="space-y-1 flex-1">
                                        <label htmlFor="country">Country</label>
                                        <select type="" name="country" id="country" value={userProfile.country && userProfile.country.toLowerCase()} 
                                        className="block bg-transparent border form-select w-full pl-4 rounded-xl form-input"
                                        onChange={handleChange}>
                                            <option value="null">Select nationality</option>
                                            {countries.map((v,i)=>{

                                                return (
                                                    <option key={i} value={v.toLowerCase()}>{v}</option>
                                                )
                                            })}          
                                            
                                        </select>
                                    
                                    </div>
                                    <div className="space-y-1 flex-1">
                                        <label htmlFor="">City</label>
                                        <input type="text" name="state" value={userProfile.state} placeholder="city"
                                                className="block border w-full pl-4 rounded-xl form-input bg-transparent"
                                                onChange={handleChange}/>
                                        
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="">Phone</label>
                                    <input type="tel" name="phone" value={userProfile.phone} placeholder="Enter phone"
                                            className="block border w-full pl-4 rounded-xl form-input bg-transparent"
                                            onChange={handleChange}/>
                                
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="">Address</label>
                                    <input type="text" name="address" value={userProfile.address} placeholder="Enter your address"
                                            className="block border w-full pl-4 rounded-xl form-input bg-transparent"
                                            onChange={handleChange}/>
                                    
                                </div>
                            </div>
                            
                        </div>
                        <div>
                            <button type='submit'
                            className="w-full text-center rounded-3xl h-12 bg-slate-800 hover:bg-slate-900 text-lg font-bold"
                            >Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditUser