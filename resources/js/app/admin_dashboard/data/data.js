import React from 'react';

import {FiCreditCard,FiUsers} from 'react-icons/fi';
import {BsCurrencyDollar, BsShield,BsListTask} from 'react-icons/bs';

import {FaRegUserCircle,FaUserPlus,FaRegUser,FaHistory,FaChartBar,FaUserShield } from 'react-icons/fa';
import {AiFillDashboard} from "react-icons/ai"

import {HiOutlineTrendingUp, HiOutlineTrendingDown} from "react-icons/hi"
import {TbChartBar,TbArrowsMaximize} from "react-icons/tb"
import {GiBarrel,GiCubeforce} from "react-icons/gi"
import {RiLockPasswordLine} from "react-icons/ri"

import {BiCustomize} from 'react-icons/bi';
import {MdFavoriteBorder,MdOutlineSettingsInputComponent,
	MdSettingsSuggest,MdSettingsInputComposite} from 'react-icons/md';

import { TbExchange} from 'react-icons/tb';

export const SettingLists = [

	{
		title:"account",
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
		title:"Customize",
		icon : <MdOutlineSettingsInputComponent/>
	},
]


export const UserSettingsSidebarLists = [
  {
    name:"user profile",
    icon:<FaRegUser/>
  },
  {
    name:"customize",
    icon:<BiCustomize/>
  },

]

export const countries = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda",
"Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh",
"Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina",
"Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria",
"Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands",
"Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands",
"Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica",
"Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica",
"Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea",
"Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France",
"France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia",
"Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam",
"Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands",
"Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia",
"Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
"Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait",
"Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia",
"Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau",
"Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
"Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico",
"Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco",
"Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia",
"New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway",
"Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn",
"Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda",
"Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
"Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore",
"Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
"South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon",
"Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland",
"Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of",
"Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
"Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
"United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela",
"Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara",
"Yemen", "Yugoslavia", "Zambia", "Zimbabwe"];
  
export const UserSidebarList = [
  {name:'trade',
  icon:<TbArrowsMaximize/>
  },
  {name:'portfolio',
  icon:<MdSettingsInputComposite/>
  },  
  {
		name: 'tasks',
		icon: <TbExchange />,
	},
  {
		name: 'history',
		icon: <FaHistory/>,
	},
  {name:'user settings',
  icon:<MdSettingsSuggest/>
  },
]

export const DashboardQuickLinks = [

  {name:'Top tasks',icon:<BsListTask/>},
  {name:'Top Portfolios',icon:<FaChartBar/>},
  {name:'verify users',icon:<FaUserShield/>},
]

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
export const Sidebarlinks = [

  {
		name: 'Dashboard',
		icon: <AiFillDashboard/>,
	},
  {
		name: 'Users',
		icon: <FiUsers/>,
	},
  {
		name: 'Create Users',
		icon: <FaUserPlus/>,
	},
	
];


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


