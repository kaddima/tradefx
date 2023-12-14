import React, {useState,useEffect} from 'react'
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom'
import { format,parseISO } from 'date-fns'
import axios from 'axios'

const UserRow = ({user,i})=>{

	const currentColor = useSelector(state=>state.main.currentColor)

	return(
		<>
			<tr className='text-xs font-bold border'>
				<td className='text-gray-800 dark:text-slate-100 border-b-1 border-b-gray-300 dark:border-b-slate-700'>
					<div className='flex justify-between items-center py-3'>
						<span>{i}</span>
					</div>
				</td>
				<td className='text-gray-800 dark:text-slate-100 text-center border-b-1 border-b-gray-300 dark:border-b-slate-700'>
					<span>{user.first_name}</span>
				</td>
				<td className='text-gray-800 dark:text-slate-100 text-center border-b-1 border-b-gray-300 dark:border-b-slate-700'>
					<span>{user.last_name}</span>
				</td>
				<td className='text-gray-800 dark:text-slate-100 text-center border-b-1 border-b-gray-300 dark:border-b-slate-700'>
					<span>{user.email}</span>
				</td>
				<td className='text-slate-100 text-center border-b-1 border-b-gray-300 dark:border-b-slate-700'>
					<span className={`block p-1 ${user.active == 1 ? "bg-green-800" : "bg-orange-800"} rounded`}>{user.active == 1 ? 'active' : 'inactive'}</span>
				</td>
				<td className='text-gray-800 dark:text-slate-100 text-center border-b-1 border-b-gray-300 dark:border-b-slate-700'>
					<span>{user.created_at && format(parseISO(user.created_at), 'dd MMM Y')}</span>
				</td>
				<td className='text-gray-800 dark:text-slate-100 border-b-1 border-b-gray-300 dark:border-b-slate-700'>
					<span>{user.is_admin == 0 ?'regular':'admin'}</span>
				</td>
				<td className='border-b-1 border-b-gray-300 dark:border-b-slate-700'>
				<div className='flex items-center'>
						<Link to={`/admin/all-admin/${user.id}`} 
							className='p-1 text-white bg-sky-800 rounded inline-block text-center 
							cursor-pointer hover:bg-slate-300 hover:dark:bg-slate-800'
							style={{color:currentColor}}>view
						</Link>
					</div>
					
				</td>
			</tr>
		</>
	)
}


const AllAdmin = () => {
    const [admins,setAdmins] = useState([])

    useEffect(()=>{

        axios.post('/admin/all-admin').then(data=>{

            setAdmins(data.data.data)

        }).catch(e=>{
            console.log(e.response)
        })
    },[])
	
	return (
    	<div className='bg-white dark:bg-secondary-dark-bg flex flex-col h-full overflow-scroll'>

			<div className='pt- pl-2 dark:text-white'>
				<h1 className='text-lg text-center pt-2'>Admins</h1>
			</div>

			<div className='dark:text-white mt-6 font-bold fh-1rem overflow-auto' style={{height:"cal(100% - 30px)"}}>
				<table className='w-full table-auto border-separate' style={{borderSpacing:"0 0px"}}>
					<thead>
						<tr className='capitalize dark:text-slate-200'>
							<th className='dark:bg-secondary-dark-bg w-[3%] text-xs pl-4 text-center'>
								S/N
							</th>
							<th className='dark:bg-secondary-dark-bg text-xs text-center'>
								FirstName
							</th>
							<th className='dark:bg-secondary-dark-bg text-xs text-center'>
								LastName
							</th>

							<th className='dark:bg-secondary-dark-bg text-xs text-center'>
								Email
							</th>
							<th className='dark:bg-secondary-dark-bg text-xs text-center'>
								Status
							</th>
							<th className='dark:bg-secondary-dark-bg text-xs text-center'>
								Registered
							</th>
							<th className='dark:bg-secondary-dark-bg text-xs'>
								Type
							</th>
							<th className='dark:bg-secondary-dark-bg'>
							</th>
						</tr>
					</thead>
					<tbody>
						{admins.map((user,i)=>{

							return <UserRow key={i} user={user} i={i+1}/>
						})}
						
					</tbody>
				</table>
			</div>
		</div>
  )
}

export default AllAdmin
