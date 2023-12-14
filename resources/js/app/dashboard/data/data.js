import React from 'react';
import {AiOutlineStock } from 'react-icons/ai';
import {FiCreditCard, FiStar,FiUsers} from 'react-icons/fi';
import {BsCurrencyDollar, BsShield,BsGift } from 'react-icons/bs';

import { FaSuitcase,FaRegUserCircle } from 'react-icons/fa';

import {TbChartCandle} from 'react-icons/tb'
import {HiOutlineTrendingUp, HiOutlineTrendingDown} from "react-icons/hi"
import {TbChartBar} from "react-icons/tb"
import {GiBarrel,GiCubeforce} from "react-icons/gi"
import {VscNewFolder} from "react-icons/vsc"
import {GrBitcoin} from "react-icons/gr"
import {RiBriefcase5Line,RiLockPasswordLine} from "react-icons/ri"

import { BiNetworkChart, BiUserCircle} from 'react-icons/bi';
import { MdAddchart,MdFavoriteBorder,MdOutlineSwitchAccount,
	MdOutlineNotificationsActive,MdOutlineSettingsInputComponent} from 'react-icons/md';

import { TbExchange,TbReport,TbBookUpload,TbLogout } from 'react-icons/tb';

export const SettingLists = [
	{
		title:"my accounts",
    id:1,
		icon : <FiUsers/>
	},

	{
		title:"personal details",
    id:2,
		icon : <FaRegUserCircle/>
	},
	{
		title:"change password",
    id:3,
		icon : <RiLockPasswordLine/>
	},
	{
    id:5,
		title:"Customize theme",
		icon : <MdOutlineSettingsInputComponent/>
	},
]

export const AccountModalLists = [

  {
    id:2,
    title:"Deposit Funds",
    icon : <TbBookUpload/>
  },
  {
    id:3,
    title:"invite friends",
    icon : <BsGift/>
  },
  // {
  //   id:4,
  //   title:"my accounts",
  //   icon : <BiUserCircle/>
  // },
  {
    id:5,
    title:"my requests",
    icon : <VscNewFolder/>
  },
  // {
  //   id:6,
  //   title:"switch to demo",
  //   icon : <MdOutlineSwitchAccount/>
  // },
  {
    id:7,
    title:"logout",
    icon : <TbLogout/>
  },
]

// export const FlagsCurrency = [
//   {
//     name:"USD",
//     fullname:"United state dollar",
//     image:unitedstate
//   },
//   {
//     name:"EUR",
//     fullname:"Euro",
//     image:european
//   },
//   {
//     name:"JPY",
//     fullname:"Japanese Yen",
//     image:japan
//   },
//   {
//     name:"GBP",
//     fullname:"British pound sterling",
//     image:unitedKingdom
//   },
//   {
//     name:"AUD",
//     fullname:"Australian Dollar",
//     image:australia
//   },
//   {
//     name:"CAD",
//     fullname:"Canadian Dollar",
//     image:canada
//   },
  // {
  //   name:"CHF",
  //   fullname:"Swiss Franc",
  //   image:switzerland
  // },
  // {
  //   name:"CNH",
  //   fullname:"Chinese Yuan(Renminbi)",
  //   image:china
  // },
  // {
  //   name:"HKD",
  //   fullname:"Hong Kong Dollar",
  //   image:hongKong
  // },
  // {
  //   name:"SEK",
  //   fullname:"Swedish Krona",
  //   image:sweden
  // },
  // {
  //   name:"NOK",
  //   fullname:"Norwegian Krone",
  //   image:norway
  // },
  // {
  //   name:"RUB",
  //   fullname:"Russian Ruble",
  //   image:russian
  // },
  // {
  //   name:"TRY",
  //   fullname:"Turkish lira",
  //   image:turkey
  // },
  // {
  //   name:"DKK",
  //   fullname:"Danish Krone",
  //   image:denmark
  // },
  // {
  //   name:"PLN",
  //   fullname:"Poland złoty",
  //   image:poland
  // },
//]



export const watchLists = [

  {
    name:'most traded',
    icon:<MdFavoriteBorder/>
  },
  {
    name:'top riser',
    icon:<HiOutlineTrendingUp/>
  },
  {
    name:'top Fallers',
    icon:<HiOutlineTrendingDown/>
  },
  {
    name:'most volatile',
    icon:<TbChartBar/>
  },
  {
    name:'commodity',
    icon:<GiCubeforce/>
  },
  {
    name:'oil market',
    icon:<GiBarrel/>
  }
]
export const links = [

	{
		name: 'trades',
		icon: <TbExchange />,
	},
	// {
	// 	name: 'discover',
	// 	icon: <BiNetworkChart />,
	// },
	{
		name: 'charts',
		icon: <MdAddchart />,
	},
	{
		name: 'portfolio',
		icon: <FaSuitcase />,
	},
	{
		name: 'history',
		icon: <TbReport />,
	},


];

export const portfolioLinks = [{
  name:'cryptocurrency',
  icon:<GrBitcoin/>
},
  {name:'stocks',
    icon:<AiOutlineStock/>
  },
  {
    name:'forex',
    icon:<TbChartCandle/>
  }

]


export const TrendingLinks = [{
  name:"Technology",
  url:'',
  Image:''
}]

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];


