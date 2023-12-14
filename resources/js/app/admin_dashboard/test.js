import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {getAssets} from "./store/assetsSlice"
import {fetchPortfolio} from "./store/portfolioSlice";
import { getAccount, updateAccount } from './store/accountSlice';
import { getActivities } from './store/activitySlice';


import {Navbar, SideBar,AccountModal} from "./components"

import {
    Portfolio,Trades,Dashboard,User,Users,AccountSettings,
    CreateUsers,UserSettings,Tasks,ProfitLoss, ModalContent} from "./pages/index"

    //import account settings and all its components
import Settings from "./pages/settings/settings"
import ChangePassword from './pages/settings/ChangePassword';
import PersonalDetails from './pages/settings/PersonalDetails';
import ThemeSettings from './pages/settings/ThemeSettings'; 


import './App.css';
import 'react-toastify/dist/ReactToastify.css';


import { ToastContainer, toast } from 'react-toastify';
import GenerateProfitLoss from './pages/generateProfitLoss/GenerateProfitLoss';

function App() {

    const activeMenu = useSelector(state=> state.main.navMenu.activeMenu)
    const dispatch = useDispatch()
    const currentMode = useSelector(state=>state.main.currentMode)

    useEffect(()=>{

        dispatch(getAccount())
        dispatch(getAssets())
        dispatch(fetchPortfolio()).unwrap().then(data=>{
            
            let margin = 0, profit_loss = 0
            let portfolios = data.data

            portfolios.map((portfolio,key)=>{
                margin += Number(portfolio.margin);
                profit_loss += Number(portfolio.profit_loss)
            })
            dispatch(updateAccount({margin,profit_loss}))
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
            if ($(el).attr("id") != "acct-modal-btn" && $(el).attr("id") != "account-modal" && !$(el).parents('#account-modal').length){
                $('#account-modal').hide();

               // alert($('#account-modal').is(':visible'))
            }
        });
    },[])


    return (
        <div className={`${currentMode}`}>
            <BrowserRouter>
                <div className='flex w-screen h-screen relative dark:bg-main-dark-bg'>
                    <AccountModal/>
                    {activeMenu ? (
                        <div className='w-20 fixed sidebar dark:bg-secondary-dark-bg bg-white
                        h-screen'>
                            <SideBar/>
                        </div>
                     )

                    : (
                            <div className='w-0 dark:bg-secondary-dark-bg'>
                                {/* <SideBar/> */}
                            </div>
                    )}

                    <div className={`dark:bg-main-dark-bg md:h-screen flex flex-col
                    bg-main-bg md:max-h-screen
                    overflow-hidden ${activeMenu ? ' ml-20 w-full' : ' flex-1 w-full'}`
                    }>
                        <div className={`flex items-center fixed z-[100] bg-white dark:bg-secondary-dark-bg ${activeMenu ? "-fw-4rem" : "w-full"}
                         h-16 mb-2`}>
                            <Navbar/>
                        </div>

                        <div className='mt-[4.4rem] fh-4rem flex-1'>
                             <Routes>
                        {/* Dashbord */}
                                <Route path='/admin' element={<Dashboard/>}/>
                                <Route path='/admin/dashboard' element={<Dashboard/>}/>
                                <Route path='/admin/users' element={<Users/>}/>
                                <Route path='/admin/create-users' element={<CreateUsers/>}/>
                                <Route path='/admin/tasks' element={<Tasks/>}/>
                                <Route path='/admin/modal'element={<ModalContent/>}>
                                    <Route path='settings' element={<Settings/>}>
                                        <Route path='change-password' element={<ChangePassword/>}/>
                                        <Route path='customize-theme' element={<ThemeSettings/>}/>
                                        <Route path='personal-details' element={<PersonalDetails/>}/>
                                        <Route path='account' element={<PersonalDetails/>}/>     
                                    </Route>
                                </Route>
                                <Route path="/admin/user/:id" element={<User/>}>
                                    <Route index element={<Trades/>}/>
                                    <Route path='trade' element={<Trades/>}/>
                                    <Route path='user-settings' element={<UserSettings/>}/>
                                    <Route path='tasks' element={<Tasks/>}/>
                                    <Route path='portfolio' element={<Portfolio/>}/>
                                    <Route path='profit-loss' element={<ProfitLoss/>}>
                                        <Route path='generate-profit-loss' element={<GenerateProfitLoss/>}/>

                                    </Route>

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
