import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {useNavigate} from "react-router-dom"

import {MdOutlineClose} from "react-icons/md"

import {FaWhatsapp,FaFacebookF,FaTelegramPlane,FaTwitter} from "react-icons/fa"



import { modalContentDisply } from '../store/mainSlice'

//IMAGE
import referralBg from "../data/referral-bg.png"
import referralGift from "../data/referral-gift.svg"

import howtowork1 from "../data/how-works-1.svg"
import howtowork2 from "../data/how-works-2.svg"
import howtowork3 from "../data/how-works-3.svg"


const InviteLink = ()=>{

	return (
		<div className='space-y-5'>
			<h1 className='text-blue-500 cursor-pointer font-bold text-center'>Copy Referral Link</h1>
			<div className='flex justify-between mt-5 pb-8'>
				<div className='w-36 p-2 text-center bg-gray-400 dark:bg-slate-700 rounded'>
					
					<span className='h-7 w-7 block mx-auto rounded-full bg-white flex items-center justify-center'><FaFacebookF className='text-blue-600'/></span>
					<span className='text-xs font-extrabold'>Post on facebook</span>
				</div>
				<div className='w-36 p-2 text-center bg-gray-400 dark:bg-slate-700 rounded'>
					<span className='h-7 w-7 block mx-auto rounded-full bg-green-700 flex items-center justify-center'><FaWhatsapp  className='text-white text-xl'/></span>
					<span className='text-xs font-extrabold'>Send via Whatsapp</span>
				</div>
				<div className='w-36 p-2 text-center bg-gray-400 dark:bg-slate-700 rounded'>
					<span className='h-7 w-7 block mx-auto rounded-full bg-blue-500 flex items-center justify-center'><FaTelegramPlane/></span>
					<span className='text-xs font-extrabold'>Send via Telegram</span> 
				</div>
				<div className='w-36 p-2 text-center bg-gray-400 dark:bg-slate-700 rounded'>
					<span className='h-7 w-7 block mx-auto rounded-full bg-blue-500 flex items-center justify-center'><FaTwitter/></span>
					<span className='text-xs font-extrabold'>Tweet</span>
				</div>
			</div>
		</div>
	)
}

const HowItWorks = ()=>{
	return (
	<ul className='mx-auto bg-slate-700 p-5 text-xs font-bold rounded text-white'>
		<li>
			<div className='flex'>
				<img src={howtowork1} alt="" />
				<div className='pl-5'>
					<h1 className='text-sm'>Share your referral link</h1>
					<p>Your referrl link is the fastest way for friends to create an account with us.</p>
				</div>
			</div>
		</li>
		<li className='mt-4'>
			<div className='flex'>
				<img src={howtowork2} alt="" />
				<div className='pl-5'>
					<h1 className='text-sm'>They open an account</h1>
					<p>After your friends deposit they will receive a personal account manager</p>
				</div>
			</div>
		</li>
		<li className='mt-4'>
			<div className='flex'>
				<img src={howtowork3} alt="" className='-m-3' />
				<div className='pl-5'>
					<h1 className='text-sm'>Earn your reward</h1>
					<p>Once your friend make a deposit (at least $200) and places three trades we will credit your account with a cash reward</p>
				</div>
			</div>
		</li>
	</ul>
	)
}


const inviteContent = (value)=>{

	switch (value) {
		case 1:
			
			return <InviteLink/>;
		case 2:
			return <HowItWorks/>
	
		default:
			break;
	}
}


const InviteFriends = () => {

	const [content, setContent] = useState(1)
	const navigate = useNavigate()
  	const dispatch = useDispatch()
	const currentColor = useSelector(state=>state.main.currentColor)
  return (
    <div className='text-slate-800  dark:text-gray-300 rounded-xl relative'>
        <div 
			style={{backgroundImage:`url(${referralBg})`,backgroundSize:"100% 100%" }} 
			className='w-full flex items-center justify-center bg-no-repeat h-32 text-gray-50'>

            <span className='text-2xl absolute top-3 right-3 cursor-pointer' onClick={()=>{navigate(-1)}}><MdOutlineClose/></span>
			
			<h1 className='text-lg mdtext-2xl font-bold'>Invite Friends, Earn up to $100</h1>
			
			

			<div className='absolute -top-[50px] z-[800]'>
				<img src={referralGift} alt="Gift image" />
			</div>
		</div>
		<div className='flex justify-center text-sm font-bold space-x-3 w-full bottom-0'>
			<span className='border-b-1 border-transparent cursor-pointer'
			style={content === 1 ? {borderBottomColor:currentColor,borderBottomWidth:"2px"}:{}}
			onClick={()=>{setContent(1)}}>

				Invite friends</span>
			<spans className="border-b-1 border-transparent cursor-pointer"
			style={content === 2 ? {borderBottomColor:currentColor,borderBottomWidth:"2px"}:{}}
			onClick={()=>{setContent(2)}}>
				How it works</spans>
		</div>
        <div className='bg-gray-200 dark:bg-secondary-dark-bg p-8'>
			{inviteContent(content)}
        </div>
    </div>
  )
}

export default InviteFriends