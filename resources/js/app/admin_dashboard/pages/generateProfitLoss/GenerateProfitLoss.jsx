
import React,{useState} from 'react'

import { useNavigate,useSearchParams } from 'react-router-dom'

import { MdClose,MdAutorenew } from 'react-icons/md'
import {TbManualGearbox} from "react-icons/tb"

import { RadioInput,Input } from '../../components'

import Manual from './Manual'
import Automatic from './Automatic'
import { useSelector } from 'react-redux'


const GenerateProfitLossContent = (value)=>{

    switch (value) {
        case 1:
            
            return <Manual/>;
        case 2:
            
            return <Automatic/>;
    
        default:
            break;
    }
}

const GenerateProfitLoss = () => {

    const currentColor = useSelector(state=>state.main.currentColor)
    const [content, setContent] = useState(1)
    const navigate = useNavigate()

  return (
    <>
       <div className='fixed top-0 left-0 z-[150] w-screen h-screen opacity-60 bg-slate-600'></div>

        <div className='fixed flex flex-col top-20 md:top-28 left-2/4 -translate-x-2/4 z-[200] w-11/12 md:w-4/5 lg:w-9/12 overflow-auto h-4/5 md:h-[450px]  dark:bg-main-dark-bg'>
            <div className='bg-secondary-dark-bg text-gray-200 font-bold w-full items-center h-9 pr-3 flex justify-between'>
                <h1 className='text-center text-xs flex-1'>Generate profit or loss</h1>
                <span 
                onClick={()=>{
                    navigate(-1, {replace:true})
                }}
                className='text-3xl cursor-pointer p-1 hover:bg-slate-800 text-white font-bold'><MdClose/></span>
            </div>
            <div className='w-full mt-1 flex-1'>
                <div className='flex flex-col md:flex-row h-full gap-1 text-gray-200'>
                    <div className='w-full md:w-1/4 flex gap-2 flex-row md:flex-col items-center md:items-start h-full pt-2 px-2 text-xs font-bold md:space-y-4 bg-secondary-dark-bg'>
                        <div
                        onClick={()=>{setContent(1)}} 
                        style={content === 1 ? {borderColor:currentColor} : {}}
                        className='flex md:w-full items-center hover:bg-slate-800 cursor-pointer gap-2 border-b-1 md:border border-transparent py-2'>
                           <span className='text-2xl'><TbManualGearbox/></span>
                           <span>Manually</span> 
                        </div>

                        <div 
                        onClick={()=>{setContent(2)}} 
                        style={content === 2 ? {borderColor:currentColor} : {}}
                        className='flex md:w-full items-center hover:bg-slate-800 cursor-pointer gap-2 border-b-1 md:border border-transparent py-2'>
                            <span className='text-2xl'><MdAutorenew/></span>
                            <span>Automatically</span>
                        </div>
                    </div>

                    <div className='w-full md:w-3/4 pt-2 h-full bg-secondary-dark-bg'>
                        <div className='bg-slate-900 w-11/12 md:w-4/5 mx-auto p-3 rounded shadow-lg'>
                            <ul className='list-disc pl-5 text-xs'>
                                <li><p>Using this window enable's manual generation of profit or loss on an open position</p></li>
                                <li>Profit or loss should be chosen from the select box (default value is "Profit") </li>
                                <li>Input an amount to generate as profit or loss afterward click on "proceed"</li>
                            </ul>
                        </div>

                        <div className='bg-slate-900 w-11/12 md:w-4/5 mx-auto rounded shadow-lg mt-4 px-2 py-3'>
                           {GenerateProfitLossContent(content)}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
 
  )
}

export default GenerateProfitLoss