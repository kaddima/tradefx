import React, {useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useParams} from "react-router-dom"
import axios from 'axios'

import { SettingLists } from "../../data/data"
import {MdOutlineClose} from "react-icons/md"

import {Users} from '../../pages/index'


const AdminUsers = () => {

    let [users,setUsers] = useState(null)
    const admin_id = useParams().admin_id 

    useEffect(()=>{
        axios.post('/admin/all-admin/users', {admin_id}).then(data=>{
			setUsers(prev=>prev = data.data.data.users)
			
		}).catch(e=>{
			console.log(e.response)
		})
    },[admin_id])

    return (
    <div className='md:h-full overflow-scroll'>
    	<Users users={users} fetchData={true}/> 
    </div>
  )
}

export default AdminUsers