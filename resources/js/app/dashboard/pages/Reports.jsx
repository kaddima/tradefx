import React from 'react'
import { useSelector } from 'react-redux'
import {format,parseISO} from "date-fns"

import _ from 'lodash'

import {FiActivity} from "react-icons/fi"


const ReportsRow = ({data})=>{

    return(
        <>
            <tr className='text-xs font-bold border'>
                 <td className='text-center border-b-1 border-b-gray-300 dark:border-b-slate-700 text-slate-600 dark:text-gray-200'>
                    <span>{data.created_at && format(parseISO(data.created_at), 'dd MMM Y')}</span>
                </td>
                <td className='text-center border-b-1  border-b-gray-300 dark:border-b-slate-700 text-slate-600 dark:text-gray-200'>
                    <span className='inline-block min-w-[50px] ml-2 p-1 text-xs font-extrabold text-white rounded' style={{background:(data.type.toLowerCase() === 'buy') ? "rgb(10,170,253)" : "rgb(224,36,36)"}}>{(data.type.toLowerCase() === 'buy') ? "+" : "-"}{_.round(data.size,2)}</span>
                </td>
                <td className='text-center border-b-1 border-b-gray-300 dark:border-b-slate-700 text-slate-600 dark:text-gray-200'>
                    <span>{_.round(data.price,2).toLocaleString()}</span>
                </td>
                <td className='border-b-1 text-center border-b-gray-300 dark:border-b-slate-700  text-slate-600 dark:text-gray-200'>
                    <span>{data.market}</span>  
                </td>
                <td className='text-center border-b-1 border-b-gray-300 dark:border-b-slate-700 text-slate-600 dark:text-gray-200'>
                    <span>{data.status}</span>
                </td>
                <td className='text-center border-b-1 border-b-gray-300 dark:border-b-slate-700 text-slate-600 dark:text-gray-200'>
                    <span>{data.triggered_by}</span>
                </td>
                <td className='text-center border-b-1 border-b-gray-300 dark:border-b-slate-700 text-slate-600 dark:text-gray-200'>
                    <span>${_.round(data.result,2).toLocaleString()}</span>
                </td>
            </tr>
        </>
    )
}

const Reports = () => {

    const currentColor = useSelector(state=>state.main.currentColor)
    const activities = useSelector(state=>state.activities.activities)

    if(!activities.length){

        return (
            <div className='h-full bg-white dark:bg-secondary-dark-bg px-4 relative'>
                <div className='text-gray-800 font-bold dark:text-gray-200 md:w-2/5 text-center absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
                    <div className='w-20 h-20 rounded-full bg-slate-500 dark:bg-slate-800 flex justify-center items-center text-5xl mx-auto'>
                        <FiActivity/>
                    </div>
                    <div className='mt-3 space-y-1'>
                        <p >No Trading activies</p>
                        <p className='text-sm font-semibold'>Please start trading to see your activities here</p>
                    </div>       
                </div>
            </div>
        )
    }
  return (
    <div className='h-full text-gray-800 dark:text-white bg-white dark:bg-secondary-dark-bg px-4 flex flex-col'>
      	<div className='pt-2 pl-2'>
            <span className='inline-block text-sm py-2 border-b-2 font-extrabold' style={{borderBottomColor:currentColor}}>Activities</span>
        </div>

        <div className='dark:text-white mt-2 font-bold overflow-auto flex-1'>
            <table className='w-full table-auto border-separate' style={{borderSpacing:"0 0px"}}>
                <thead>
                    <tr className='capitalize dark:text-slate-200 text-sm'>
                        <th className='dark:bg-secondary-dark-bg w-[10%] text-xs pl-4 text-center'>
                            Date
                        </th>
                        <th className='dark:bg-secondary-dark-bg text-xs text-center'>
                            Amount
                        </th>

                        <th className='dark:bg-secondary-dark-bg text-xs text-center'>
                            Price
                        </th>
                        <th className='dark:bg-secondary-dark-bg text-xs text-center'>
                            Market
                        </th>
                        <th className='dark:bg-secondary-dark-bg text-xs text-center'>
                            Status
                        </th>
                        <th className='dark:bg-secondary-dark-bg text-xs text-center'>
                            Triggered by
                        </th>
                        <th className='dark:bg-secondary-dark-bg text-xs text-center'>
                            Profit&Loss
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                    {activities.map((activity,i)=>(
                         <ReportsRow key={i} data={activity}/>
                    ))}

                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Reports