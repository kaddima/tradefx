import React, {useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
import { Link } from 'react-router-dom'
import { format,parseISO } from 'date-fns'
import axios from 'axios'
import {toast} from "react-toastify"

import {BiBlock} from "react-icons/bi"
import {TbLockOpen} from "react-icons/tb"
import{TiArrowUnsorted} from "react-icons/ti"
import {MdDelete,MdOutlineAdminPanelSettings} from "react-icons/md"
import { ConfirmModal } from '../components'

import { updateUsers } from '../store/accountSlice'
import { differenceInMinutes } from 'date-fns/esm'


const UserRow = ({user,i})=>{

	const currentColor = useSelector(state=>state.main.currentColor)
	const admin = useSelector (state=>state.account.admin)
	const users = useSelector(state=>state.account.users)
	const dispatch = useDispatch()
	const [typeValue, setTypeValue] = useState()

	//get the each users creator id
	let userCreatorID = user.creator_id

	//filter out users that are admin
	const admins = users.filter(v=>v.is_admin == 1)

	let creatorDetails;

	admins.forEach(v => {
		
		if(v.id == userCreatorID){
			creatorDetails = v

			return
		}
	});


	const handleYes = ()=>{

		let user_id = user.id
		let type = typeValue

		axios.post('/admin/user-action',{user_id,type}).then(data=>{

			$('.confirm-modal-container').hide();

			if(data.data.status == 1){

				// programatically change the pop messge to reflect on block and unblock
				if(type == 'block'){

					type = user.block == 1 ? 'Unblock' : 'block'
				}
				toast(`${type.replace('_',' ')} successful`)

				dispatch(updateUsers(data.data.data))

			}		
			
		}).catch(e=>{
			console.log(e)
		})
		
	}
	const handleNo = ()=>{$('.confirm-modal-container').hide();}

	const handleBtnAction = (e)=>{

		let type = e.currentTarget.dataset.type
		setTypeValue(type)

		// hide any container visible before the next btn is clicked
		$('.confirm-modal-container').hide()

		$(e.currentTarget).next('div').show();

	}

	const handleAssignUser = (e)=>{

		//id of the current user to assign to admin
		let user_id = user.id
		//the id of the admin to assign current user to
		let admin_id = e.target.value

		axios.post('/admin/user-action',{user_id,admin_id,type:'assign_user'}).then(data=>{
			toast('Assignment successfull', {type:'success'})
			dispatch(updateUsers(data.data.data))
		}).catch(e=>{

			console.log(e.response)
		})
	}

	return(
		<>
			<tr className='text-xs font-bold border '>
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
				<div className='flex flex-wrap md:flex-nowrap items-center'>
						<Link to={admin.super_admin == 1 && user.is_admin == 1 ? `/admin/all-admin/${user.id}/users`:`/admin/user/${user.id}`} 
							className='p-1 text-white bg-sky-800 rounded inline-block text-center 
							cursor-pointer hover:bg-slate-300 hover:dark:bg-slate-800'
							style={{color:currentColor}}>view
						</Link>
						
						<div>
							<button type='button'
							title='Delete user'
							data-type="delete"
							onClick={handleBtnAction}
							className='p-1 text-white bg-sky-800 rounded inline-block text-center
							cursor-pointer hover:bg-slate-300 hover:dark:bg-slate-800'>
							<MdDelete className='text-xl text-red-600'/>

							</button>
							<div className='confirm-modal-container fixed z-[900] left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 hidden'>
							<ConfirmModal text={`Delete this user`}
							onClickYes={handleYes} onClickNo={handleNo}/>
							</div>
						</div>
						<div>
							<button type='button'
							title={`${user.block == 1 ? 'Unblock' : 'Block'} user`}
							data-type="block"
							onClick={handleBtnAction}
							className='p-1 text-white bg-sky-800 rounded inline-block text-center
							cursor-pointer hover:bg-slate-300 hover:dark:bg-slate-800'
							style={{color:currentColor}}>
								{user.block == 0 ? 
								<BiBlock className='text-xl text-red-600'/> : (<TbLockOpen className='text-xl'/>)}
							</button>
							<div className='confirm-modal-container fixed z-[900] left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 hidden'>
								<ConfirmModal text={`${user.block == 1 ? 'Unblock' : 'Block '} this user`}
								onClickYes={handleYes} onClickNo={handleNo}/>
							</div>
						</div>
						{admin.super_admin == 1 && (<>
						<div>
							<button type='button'
							title={`Admin privilege`}
							data-type="admin_privilege"
							onClick={handleBtnAction}
							className='p-1 text-white bg-sky-800 rounded inline-block text-center
							cursor-pointer hover:bg-slate-300 hover:dark:bg-slate-800'
							style={{color:currentColor}}>{user.is_admin != 1 ? 
								(<MdOutlineAdminPanelSettings className='text-xl text-orange-300'/>) : (<MdOutlineAdminPanelSettings className='text-green-600 text-xl'/>)}

							</button>
							<div className='confirm-modal-container fixed z-[900] left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 hidden'>
								<ConfirmModal text={`${user.is_admin != 1 ? 'Create ' : 'Remove '} Admin`}
								onClickYes={handleYes} onClickNo={handleNo}/>
							</div>
						</div>
						<div className='w-5 overflow-hidden border border-slate-700 rounded'>
							<select type="select" value={creatorDetails ? creatorDetails.id : 0} title={creatorDetails ? creatorDetails.email : null} 
							className='form-select w-5 bg-transparent cursor-pointer'
							onChange={handleAssignUser}>
								{admins.map((v,i)=>{
									return <option key={i} value={v.id}>{v.email}</option>
								})}
																
							</select>
													
						</div>

						</>)}
						
						
					</div>
					
				</td>
			</tr>
		</>
	)
}


const Users = ({users = [],fetchData = false}) => {
	let allUsers;

	if((users === null || !users.length) && fetchData){

		return(

			<div className='bg-white dark:bg-secondary-dark-bg justify-center items-center flex flex-col h-full'>
				<div className='text-center w-2/4'>
					<h1 className='font-bold uppercase'>No users</h1>
					<p className='text-sm'>Users belonging to this admin is shown here</p>
				</div>
			</div>
		)
	}
	else if(users.length && fetchData){
		allUsers = users
	}else{
		allUsers = useSelector(state=>state.account.users)
		
	}

	
	return (
    	<div className='bg-white dark:bg-secondary-dark-bg flex flex-col h-full'>

			<div className='pt- pl-2 dark:text-white'>
				<h1 className='text-lg text-center pt-2'>Users</h1>
			</div>

			<div className='dark:text-white mt-6 font-bold fh-1rem overflow-auto' style={{heigt:"cal(100% - 30px)"}}>
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
						{allUsers.map((user,i)=>{

							return <UserRow key={i} user={user} i={i+1} fetchData={fetchData}/>
						})}
						
					</tbody>
				</table>
			</div>
		</div>
  )
}

export default Users
