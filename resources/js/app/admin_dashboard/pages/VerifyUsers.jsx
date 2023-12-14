import React, { useState } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { Link } from 'react-router-dom'
import { format,parseISO } from 'date-fns'
import axios from 'axios'
import {toast} from "react-toastify"
import { updateUsers } from '../store/accountSlice'

import {FaUserShield} from "react-icons/fa"
import {BiBlock} from "react-icons/bi"
import {MdDelete,MdVerifiedUser} from "react-icons/md"

import { ConfirmModal } from '../components'
import { TbLockOpen } from 'react-icons/tb'

const UserRow = ({user,i})=>{

	const currentColor = useSelector(state=>state.main.currentColor)
	const [typeValue, setTypeValue] = useState()

	const dispatch = useDispatch()

	const handleYes = ()=>{

		let user_id = user.id
		let type = typeValue

		axios.post('/admin/user-action',{user_id,type}).then(data=>{

			$('.confirm-modal-container').hide();
			if(data.data.status == 1){

				toast(`${type} successful`)

				dispatch(updateUsers(data.data.data))

			}		
			
		}).catch(e=>{
			console.log(e.response)
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


	return(
		<>
			<tr className='text-xs font-bold border text-slate-700'>
				<td className='border-b-1 border-b-gray-300 dark:border-b-slate-700'>
					<div className='flex justify-between items-center py-3'>
						<span>{i}</span>
					</div>
				</td>
				<td className='text-center border-b-1 border-b-gray-300 dark:border-b-slate-700'>
					<span>{user.first_name}{' '}{user.last_name}</span>
				</td>
				<td className='text-center border-b-1 border-b-gray-300 dark:border-b-slate-700'>
					<span>{user.phone}</span>
				</td>
				<td className='text-center border-b-1 border-b-gray-300 dark:border-b-slate-700'>
					<span>{user.email}</span>
				</td>
				<td className='text-center border-b-1 border-b-gray-300 dark:border-b-slate-700'>
					<span className={`block p-1 rounded`}>{user.country}</span>
				</td>
				<td className='text-center border-b-1 border-b-gray-300 dark:border-b-slate-700'>
					<span className={`block p-1 rounded`}>{user.state}</span>
				</td>
				<td className='border-b-1 border-b-gray-300 dark:border-b-slate-700'>
					<span>{user.gender}</span>
				</td>
				<td className='border-b-1 border-b-gray-300 dark:border-b-slate-700'>
					<span>{user.dob && format(parseISO(user.dob),'dd MMM Y')}</span>
				</td>
				<td className='text-center border-b-1 border-b-gray-300 dark:border-b-slate-700'>
					<span>{user.created_at && format(parseISO(user.created_at), 'dd MMM Y')}</span>
				</td>
				<td className='border-b-1 border-b-gray-300 dark:border-b-slate-700'>
					<div className='flex items-center'>
						<div>
							<button type='button'
								title='Verify user'
								data-type="verify"
								onClick={handleBtnAction}
								className='p-1 text-white bg-sky-800 rounded inline-block text-center
								cursor-pointer hover:bg-slate-300 hover:dark:bg-slate-800'
								style={{color:currentColor}}><MdVerifiedUser className='text-xl'/>

							</button>
							<div className='confirm-modal-container fixed z-[900] left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 hidden'>
								<ConfirmModal text={`Verify this user`}
								onClickYes={handleYes} onClickNo={handleNo}/>
							</div>
						</div>

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

					</div>

				</td>
			</tr>
		</>
	)
}


const VerifyUsers = () => {

	const allUsers = useSelector(state=>state.account.users)

	const unverifiedUsers = allUsers.filter((v)=>{

		if(v.active == 0){

			return v
		}
	})

	if(unverifiedUsers.length < 1){


		return (
            <div className='h-full w-full bg-white dark:bg-secondary-dark-bg px-4 relative'>
                <div className='text-gray-800 font-bold dark:text-gray-200 md:w-2/5 text-center absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
                    <div className='w-20 h-20 rounded-full bg-slate-500 dark:bg-slate-800 flex justify-center items-center text-5xl mx-auto'>
                        <FaUserShield/>
                    </div>
                    <div className='mt-3 space-y-1'>
                        <p >No unverified Users</p>
                        <p className='text-sm font-semibold'>Unverified users will be displayed here</p>
                    </div>
                </div>
            </div>
        )
	}

	return (
    	<div className='bg-white dark:bg-secondary-dark-bg flex flex-col md:h-full'>

			<div className='pl-2 dark:text-white'>
				<h1 className='text-sm pl-2 pt-2'>Unverfied Users</h1>
			</div>

			<div className='dark:text-white mt-6 font-bold fh-1rem overflow-auto' style={{heigt:"cal(100% - 30px)"}}>
				<table className='w-full table-auto border-separate' style={{borderSpacing:"0 0px"}}>
					<thead>
						<tr className='capitalize dark:text-slate-200'>
							<th className='dark:bg-secondary-dark-bg w-[3%] text-xs pl-4 text-center'>
								S/N
							</th>
							<th className='dark:bg-secondary-dark-bg text-xs text-center'>
								FullName
							</th>
							<th className='dark:bg-secondary-dark-bg text-xs text-center'>
								phone
							</th>

							<th className='dark:bg-secondary-dark-bg text-xs text-center'>
								Email
							</th>
							<th className='dark:bg-secondary-dark-bg text-xs text-center'>
								Country
							</th>
							<th className='dark:bg-secondary-dark-bg text-xs text-center'>
								State
							</th>

							<th className='dark:bg-secondary-dark-bg text-xs'>
								Gender
							</th>
							<th className='dark:bg-secondary-dark-bg text-xs'>
								DOB
							</th>
							<th className='dark:bg-secondary-dark-bg text-xs'>
								created_at
							</th>
							<th className='dark:bg-secondary-dark-bg'>
							</th>
						</tr>
					</thead>
					<tbody>
						{unverifiedUsers.map((user,i)=>{

							return <UserRow key={i} user={user} i={i+1}/>
						})}

					</tbody>
				</table>
			</div>
		</div>
  )
}

export default VerifyUsers
