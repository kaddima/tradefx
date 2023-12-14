import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';

import {getAssets} from "./store/assetsSlice"
import {fetchPortfolio} from "./store/portfolioSlice";
import { getAccount, updateAccount } from './store/accountSlice';
import { getActivities } from './store/activitySlice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {Navbar, SideBar,AccountModal} from "./components"
import {Portfolio, Trades,Chart,Reports,Discover,ModalContent} from "./pages/index"

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

import {GrMoney} from "react-icons/gr"

import './App.css';


function App() {

    const activeMenu = useSelector(state=> state.main.navMenu.activeMenu)
    // get the display state of account modal (true/false)
    const accountModalDisplay = useSelector(state=>state.main.navMenu.accountModal)
    const modalContentDisplay = useSelector(state=>state.main.modalContentDisplay)

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

        $('#acct-modal-btn').click((e)=>{
            $('#account-modal').fadeIn(200);
        })

        $('.acct-modal-link').click((e)=>{
            $('#account-modal').fadeOut(100);
        })

        $(document).click(function(e){
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
                <div className='flex w-screen h-screen relative dark:bg-main-dark-bg'>

                    {<AccountModal/>}

                    {activeMenu && (
                        <div className='h-full w-20 sidebar dark:bg-secondary-dark-bg bg-white'>
                            <SideBar/>
                        </div>
                     )}


                    <div className={
                        `dark:bg-main-dark-bg md:h-screen flex flex-col gap-1 bg-main-bg
                        md:max-h-screen overflow-hidden flex-1`}>

                        <div className={`flex z-[100] bg-white dark:bg-secondary-dark-bg h-16`}>
                            <Navbar/>
                        </div>

                        <div className='flex-1 overflow-auto ml-1'>
                            <Routes>
                                 {/* Dashbord */}
                                <Route path='/dashboard' element={<Trades/>}/>
                                <Route path='/dashboard/trades' element={<Trades/>}/>
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
