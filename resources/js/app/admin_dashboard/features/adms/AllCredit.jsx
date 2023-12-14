import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { format,parseISO } from 'date-fns'

import axios from "axios"

const TableRow = ({data,index})=>{

	return(
		<>
			<tr className='text-xs font-bold border '>
				<td className='text-gray-800 dark:text-slate-100 border-b-1 border-b-gray-300 dark:border-b-slate-700'>
					<div className='flex justify-between items-center py-3'>
						<span>{index + 1}</span>
					</div>
				</td>
				<td className='text-gray-800 dark:text-slate-100 text-center border-b-1 border-b-gray-300 dark:border-b-slate-700'>
					<span>{data.username}</span>
				</td>
				<td className='text-slate-100 text-center border-b-1 border-b-gray-300 dark:border-b-slate-700'>
					<span >${data.amount.toLocaleString()}</span>
				</td>
				<td className='text-gray-800 dark:text-slate-100 text-center border-b-1 border-b-gray-300 dark:border-b-slate-700'>
					<span>{data.date && format(parseISO(data.date), 'dd MMM Y')}</span>
				</td>
				
			</tr>
		</>
	)
}

const AllCredit = () => {

	const [creditLists, setCreditList] = useState([])
	const admin_id = useParams().admin_id

	useEffect(()=>{

		axios.post('/admin/all-admin/credit-transactions',{admin_id}).then(data=>{
			setCreditList(prev=>prev = data.data.data)
		}).catch(e=>{
			console.log(e.response)
		})
	},[])

	if(!creditLists.length){

		return(

			<div className='bg-white dark:bg-secondary-dark-bg justify-center items-center flex flex-col h-full'>
				<div className='text-center w-2/4 text-sm'>
					<h1 className='font-bold uppercase '>Empty Credit transactions</h1>
					<p className=''>All credit transaction by the admin is shown here</p>
				</div>
			</div>
		)
	}else{
		return (
    <div>

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
							<th className='dark:bg-secondary-dark-bg text-xs text-center w-[20%]'>
								FullName
							</th>
							<th className='dark:bg-secondary-dark-bg text-xs text-center'>
								Amount
							</th>
							<th className='dark:bg-secondary-dark-bg text-xs text-center'>
								Date
							</th>
							
						</tr>
					</thead>
					<tbody>
						{creditLists.map((data,i)=>{

							return <TableRow key={i} data={data} index={i}/>
						})}
						
					</tbody>
				</table>
			</div>
    </div>
  )
	}



  
}

export default AllCredit