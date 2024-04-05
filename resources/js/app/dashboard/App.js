import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {getAssets} from "./store/assetsSlice"
import {fetchPortfolio} from "./store/portfolioSlice";
import { getAccount, updateAccount } from './store/accountSlice';
import { getActivities } from './store/activitySlice';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {Navbar, SideBar,AccountModal} from "./components"
import {Portfolio,Chart,Reports,Discover,ModalContent} from "./pages/index"

//import account settings and all its components
import Settings from "./pages/settings/settings"
import ChangePassword from './pages/settings/ChangePassword';
import MyAccounts from './pages/settings/MyAccounts';
import Notifications from './pages/settings/Notifications';
import PersonalDetails from './pages/settings/PersonalDetails';
import ThemeSettings from './pages/settings/ThemeSettings';

import FailedWithdrawal from './pages/FailedWithdrawal';

// import payments methods and alal its components
import DepositFunds from './pages/depositFunds/DepositFunds'
import BankCards from './pages/depositFunds/BankCards';
import BankTransfer from './pages/depositFunds/BankTransfer';
import CryptoPayment from './pages/depositFunds/CryptoPayment';

import MyRequests from "./pages/MyRequest"
import InviteFriends from './pages/InviteFriends'
import TradingOptions from './pages/TradingOptions'

import './App.css';
import TradingView from './pages/trades/TradingView';

import $ from 'jquery'


function App() {
    const currentMode = useSelector(state=>state.main.currentMode)

    const dispatch = useDispatch()

    useEffect(()=>{

        dispatch(getAccount())
        dispatch(getAssets())
        dispatch(fetchPortfolio()).unwrap().then(data=>{

            let margin = 0, profit_loss = 0
            let portfolios = data.data.portfolios
            let equity = data.data.equity

            portfolios.map((portfolio,key)=>{
                margin += Number(portfolio.margin);
                profit_loss += Number(portfolio.profit_loss)
                equity = +equity + Number(portfolio.profit_loss)
            })
            dispatch(updateAccount({margin,profit_loss,equity}))
        })
        dispatch(getActivities())

    },[])

    useEffect(()=>{

        $('#acct-modal-btn').on('click',(e)=>{
            $('#account-modal').fadeIn(200);
        })

        $('.acct-modal-link').on('click',(e)=>{
            $('#account-modal').fadeOut(100);
        })

        $(document).on('click',function(e){
           let el = e.target;
            if ($(el).attr("id") != "acct-modal-btn" && $(el).attr("id") != "account-modal" &&
            !$(el).parents('#account-modal').length && $('#acct-modal-btn:hover').length == 0){
                $('#account-modal').hide();

               // alert($('#account-modal').is(':visible'))
            }
        });
    },[])

    return (
        <div className={`${currentMode}`}>
            <BrowserRouter>
                <div className='w-screen h-screen relative dark:bg-main-dark-bg'>

                    <div className={`z-[100] bg-white dark:bg-secondary-dark-bg h-12 mb-[1px]`}>
                        <Navbar/>
                    </div>

                    {<AccountModal/>}

                
                    <div className={`flex dark:bg-main-dark-bg h-[calc(100%-49px)] md:overflow-hidden `}>

                        <div id='sidebar' className='h-full md:block hidden mr-2 w-16 sidebar dark:bg-secondary-dark-bg bg-white'>
                            <SideBar/>
                        </div>

                        <div className={`overflow-auto h-full pt-2 flex-1`}>
                            <Routes>
                                 {/* Dashbord */}
                                <Route path='/dashboard' element={<TradingView/>}/>
                                <Route path='/dashboard/trades' element={<TradingView/>}/>
                                <Route path='/dashboard/portfolio' element={<Portfolio/>}/>
                                <Route path='/dashboard/charts' element={<Chart/>}/>
                                <Route path='/dashboard/history' element={<Reports/>}/>
                                <Route path='/dashboard/discover' element={<Discover/>}/>
                                <Route path='/dashboard/modal'element={<ModalContent/>}>
                                    {/* <Route index element={<Settings/>}/> */}
                                    <Route path="invite-friends" element={<InviteFriends/>}/>
                                    <Route path='trading-options' element={<TradingOptions/>}/>
                                    <Route path="my-requests" element={<MyRequests/>}/>
                                    <Route path='deposit-funds' element={<DepositFunds/>}>
                                        <Route index element={<CryptoPayment/>}/>
                                        <Route path='card' element={<BankCards/>}/>
                                        <Route path='transfer' element={<BankTransfer/>}/>
                                        <Route path='crypto' element={<CryptoPayment/>}/>
                                    </Route>
                                    <Route path='settings' element={<Settings/>}>
                                        <Route index element={<MyAccounts/>}/>
                                        <Route path='change-password' element={<ChangePassword/>}/>
                                        <Route path='customize-theme' element={<ThemeSettings/>}/>
                                        <Route path='personal-details' element={<PersonalDetails/>}/>
                                        <Route path='notifications' element={<Notifications/>}/>
                                        <Route path='my-accounts' element={<MyAccounts/>}/>
                                    </Route>
                                    <Route path='failed-withdrawal' element={<FailedWithdrawal/>}/>
                                </Route>
                            </Routes>
                            <ToastContainer/>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
