import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {GiPayMoney, GiReceiveMoney} from "react-icons/gi"

import { ConfirmModal } from '../../components'


const Live = ()=>{

  
    const currentColor = useSelector(state=>state.main.currentColor)
    const balance = useSelector(state=>state.account.account)
    const navigate = useNavigate()
    const user = useSelector(state=>state.account.user)

    const handleClickYes = ()=>{
        navigate('/dashboard/modal/failed-withdrawal')
        }

    const handleClickNo = ()=>{

        $('#confirm-modal-container').fadeOut();
    }
    return(
        <>
            <div className='w-full text-gray-800 dark:text-slate-100 rounded-lg pl-12 pt-3 pr-4 pb-3 bg-gray-200 dark:bg-slate-800'>
                <div className='flex justify-between items-center'>
                    <div className='text-xs font-extrabold'>
                        <h1>Trade-USD</h1>
                        <h5>CFD</h5>
                    </div>
                    {/* <div className='text-[10px] font-bold'>
                        <span className='bg-gray-400 dark:bg-slate-600 p-[3px] mr-2 rounded inline-block'>Registration incomplete</span>
                        <button className='font-bold p-[2px] text-slate-700 rounded' style={{backgroundColor:currentColor}}>switch to</button>
                    </div> */}
                </div>
                <div className='flex flex-wrap gap-3 items-center text-[10px] uppercase font-extrabold mt-7 border-b-1 border-b-slate-600 pb-3'>
                    <div className='mr-5'>
                        <span className='block'>available</span>
                        <span className='text-xs'>${parseFloat(balance.available).toLocaleString()}</span>
                    </div>
                    <div className='mr-5'>
                        <span className='block'>funds</span>
                        <span className='text-xs'>${parseFloat(balance.funds).toLocaleString()}</span>
                    </div>
                    <div className='mr-5'>
                        <span className='block'>P&L</span>
                        <span className='text-xs'>${parseFloat(balance.profit_loss).toLocaleString()}</span>
                    </div>
                    <div>
                        <span className='block'>margin</span>
                        <span className='text-xs'>${parseFloat(balance.margin).toLocaleString()}</span>
                    </div>
                </div>
                <div className='flex items-center pt-2'>
                    <button className='text-xs font-bold text-slate-700 p-1 rounded'
                     style={{backgroundColor:currentColor}}
                     onClick={()=>{
                        if(user.active == 0){
                            location.href = '/complete-registration'
                        }else{
                            return
                        }
                        
                     }}
                    >{user.active == 0 ? 'Verify Account' : "Account Verified"}</button>
                    <div className='ml-4 space-x-2 flex gap-3'>
                    
                        <button title="Deposit"  className='h-10 w-10 rounded-full border border-slate-600 p-1'
                            style={{color:currentColor}}
                            onClick={()=>{navigate('/dashboard/modal/deposit-funds')}}>
                            <GiPayMoney className='text-3xl'/>
                        </button>
                        <div className='relative'>
                            <button title="withdraw" className='h-10 w-10 rounded-full border border-slate-600 p-1'
                            style={{color:currentColor}}
                            onClick={()=>{
                                $('#confirm-modal-container').fadeIn();
                            }}>
                            <GiReceiveMoney className='text-3xl'/>
                            </button>  
                            <div id='confirm-modal-container' className='w-full absolute -left-12 md:left-0 -top-12 hidden'>
                                <ConfirmModal text={'Do you want to withdraw?'} onClickYes={handleClickYes} onClickNo={handleClickNo}/>  
                            </div>   
                        </div>
                                         
                    </div>
                </div>
            </div>
        </>
    )
}


const MyAccountsContent = (value)=>{

    switch (value) {
        case 1:
            return <Live/>;
        case 2:
            return <Demo/>
    
        default:
            break;
    }
}

const MyAccounts = () => {
    const [content,setContent] = useState(1)

    const currentColor = useSelector(state=>state.main.currentColor)

  return (
    <>
        <div className='w-full dark:text-gray-200 border-b-1 border-b-slate-800'>
            <div>
                <button className='inline-block text-xs border-b-2 border-transparent px-4 pb-2 font-bold' 
                onClick={()=>setContent(1)} 
                style={content === 1 ? {color:currentColor,borderBottomColor:currentColor}: {}}>
                Live account
                </button>
                {/* <button className='inline-block  border-b-2 border-transparent text-xs px-4 pb-2 font-bold' 
                onClick={()=>setContent(2)}
                style={content === 2 ? {color:currentColor,borderBottomColor:currentColor}: {}}>
                    Demo account
                </button> */}
            </div>

            <div className='w-full mt-3'>
                {MyAccountsContent(content)}
            </div>   
        </div>

        
    </>
    )
}

export default MyAccounts