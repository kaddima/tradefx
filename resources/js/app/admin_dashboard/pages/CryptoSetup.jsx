import { set } from 'lodash'
import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from "react-redux"

import {toast} from "react-toastify"
import axios from 'axios'

import {BsCashCoin} from "react-icons/bs"

import { getPaymentsMethods,updatePaymentMethods } from '../store/accountSlice'

const CryptoSetup = () => {
    const currentColor = useSelector(state=>state.main.currentColor)
    const [inputValue,setInputValue] = useState({wallet_address:'',file:''})
    const cryptoPayment = useSelector(state=>state.account.paymentMethods.crypto)
    const dispatch = useDispatch()

    const handleInputChange = (e)=>{
        setInputValue({...inputValue, wallet_address:e.target.value})
    }
    const handleFileSelect = (e)=>{
        setInputValue({...inputValue,file:e.target.files[0]})

    }

    const handleSubmit = (e)=>{

        e.preventDefault()

        if(!inputValue.wallet_address.length || !inputValue.file){
            toast('Both field must be filled')
            return
        }

        const formData = new FormData()

        formData.append('wallet_address',inputValue.wallet_address)
        formData.append('file',inputValue.file)

        axios({
            method:'post',
            url:'/admin/crypto-setup',
            data:formData,
            headers:{"Content-Type":"multipart/form-data"}
        }).then(data=>{
            if(data.data.status == 1){
                dispatch(updatePaymentMethods(data.data.data))

                setInputValue({wallet_address:'',file:''})

                toast('Update successful')

            }else{
                
                toast(data.data.errors[0])
            }
            
        }).catch(e=>{

            console.log(e.response)
        })
    }

    useEffect(()=>{
        //set the payment methods
        dispatch(getPaymentsMethods())
    },[])

  return (
    <div className='bg-white dark:bg-secondary-dark-bg flex flex-col h-full py-3'>
        <div className='w-3/4 mx-auto'>
            <h1 className='text-sm font-bold'>Set and update crypto payment methods</h1>

            <div className='mt-2 p-3 bg-slate-700 rounded'>
                <ul className='list-disc text-xs space-y-2 text-slate-300 font-semibold ml-3'>
                    <li className=''>Copy and paste wallet address into input field</li>
                    <li>A cropped screenshot of your address QRcode should be uploded</li>
                    <li>Data provided shall be displayed on this page as review</li>
                </ul>		
		    </div>

            <div className='flex flex-col md:flex-row gap-2 mt-5 '>
                <div className='md:w-2/4 p-2 bg-gray-900 rounded'>
                    <form encType="multipart/form-data" className='space-y-5' onSubmit={handleSubmit}>
                        <div className='space-y-2'>
                            <label className='block text-sm text-slate-400'>Wallet address</label>
                            <input type="text" name='wallet_address' value={inputValue.wallet_address} className='form-input w-full bg-transparent border dark:border-slate-600' placeholder='wallet address' onChange={handleInputChange}/>
                        </div>
                        <div className='space-y-2'>
                            <label className='block text-sm text-slate-400'>Upload QRcode</label>
                            <input type="file" name='file' className='form-input w-full bg-transparent border dark:border-slate-600'
                            onChange={handleFileSelect}/>
                        </div>
                        <div>
                            <button className='text-center form-input text-slate-600 w-full p-2 rounded-lg' style={{backgroundColor:currentColor}}>Setup</button>
                        </div>
                    </form>
                </div>
                <div className='md:w-2/4 relative flex-1'>
                    {cryptoPayment?.image?.length ? (<div className='w-4/5 mx-auto space-y-5'>
                        <img src={`/uploads/${cryptoPayment.image}`} 
                            className="w-full"
                            alt="bitcoin address qrcode" />				
                        <div className=''>
                            <h1 className='text-xs font-bold dark:text-slate-500'>Wallet address</h1>
                            <span className='text-xs dark:text-slate-400'>{cryptoPayment.wallet_address}</span>
                        </div>			
                    </div>) : ( <div>
                    <div className='w-full text-gray-800 font-bold dark:text-gray-200 text-center '>
                        <div className='w-20 h-20 rounded-full bg-slate-500 dark:bg-slate-800 flex justify-center items-center text-5xl mx-auto'>
                            <BsCashCoin/>
                        </div>
                        <div className='mt-3 space-y-1'>
                            <p className='text-sm'>Empty crypto data</p>
                            <p className='text-sm font-semibold'>uploaded and updated crypto Payment method is displayed here</p>
                        </div>       
                    </div>
            </div>)}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default CryptoSetup