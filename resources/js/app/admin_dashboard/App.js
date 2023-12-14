import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { getAdminData } from './store/accountSlice';
import { setActiveMenu_screenSize } from './store/mainSlice';

import {Navbar, SideBar,AccountModal} from "./components"
import { AllAdmin,AdminOverview, AdminUsers, AllCredit, InvestmentHistory 
} from './features/adms/index';

import {
    Portfolio,Trades,Dashboard,User,Users,Reports,
    CreateUsers,UserSettings,Tasks, ModalContent,
    TopPortfolios,TopTasks,VerifyUsers,CryptoSetup,TransferSetup,EditUser,
    UpdateAssets} from "./pages/index"

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

        let screenSize = window.innerWidth
        if(screenSize >900){
            dispatch(setActiveMenu_screenSize({active:true}))
        }

        dispatch(getAdminData())
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
            !$(el).parents('#account-modal').length && $('#acct-modal-btn:hover').length == 0 ){
                $('#account-modal').hide();

               // alert($('#account-modal').is(':visible'))
            }

            if ($('#credit-user-container:hover').length == 0 && $('#credit-user-btn:hover').length == 0){
                $('#credit-user-container').hide();

               // alert($('#account-modal').is(':visible'))
            }
        });
    },[])


    return (
        <div className={`${currentMode}`}>
            <BrowserRouter>
                <div className='flex w-screen h-screen relative dark:bg-main-dark-bg'>
                    <AccountModal/>

                    {activeMenu && (
                        <div className='w-20 sidebar dark:bg-secondary-dark-bg bg-white'>
                            <SideBar/>
                        </div>
                     )}

                    <div id='spinner' className='fixed left-0 w-screen h-screen z-[9999] hidden' style={{backgroundColor:'rgba(0,0,0,0.1)'}}>
                        <div className='absolute bottom-2 right-5'>
                            <div className='w-10 h-10 md:w-16 md:h-16 rounded-full border-4 border-blue-600 border-l-white animate-spin '>
                            </div>
                        </div>               
                    </div> 

                    <div className={
                        `dark:bg-main-dark-bg md:h-screen flex flex-col gap-1 bg-main-bg
                        md:max-h-screen overflow-hidden flex-1 h-full`}>

                      <div className={`flex z-[100] bg-white dark:bg-secondary-dark-bg h-16`}>
                            <Navbar/>
                        </div>

                        <div className='flex-1 md:ml-1 overflow-auto'>
                             <Routes>
                        {/* Dashbord */}
                                <Route path='/admin' element={<Dashboard/>}/>
                                <Route path='/admin/dashboard' element={<Dashboard/>}>
                                    <Route index element={<VerifyUsers/>}/>
                                    <Route path='top-tasks' element={<TopTasks/>}/>
                                    <Route path='top-portfolios' element={<TopPortfolios/>}/>
                                    <Route path='verify-users' element={<VerifyUsers/>}/>
                                    <Route path='crypto-setup' element={<CryptoSetup/>}/>
                                    <Route path='update-assets' element={<UpdateAssets/>}/>
                                    <Route path='transfer-setup' element={<TransferSetup/>}/>
                                </Route>
                                <Route path='/admin/users' element={<Users/>}/>
                                <Route path='/admin/all-admin' element={<AllAdmin/>}/>
                                <Route path='/admin/all-admin/:admin_id' element={<AdminOverview/>}>
                                     <Route index element={<AdminUsers/>}/>
                                     <Route path='users' element={<AdminUsers/>}/>
                                     <Route path='credit-list' element={<AllCredit/>}/>
                                </Route>

                                <Route path='/admin/create-users' element={<CreateUsers/>}/>
                                <Route path='/admin/tasks' element={<Tasks/>}/>
                                <Route path='/admin/modal'element={<ModalContent/>}>
                                    <Route path='settings' element={<Settings/>}>
                                        <Route path='change-password' element={<ChangePassword/>}/>
                                        <Route path='customize' element={<ThemeSettings/>}/>
                                        <Route path='personal-details' element={<PersonalDetails/>}/>
                                        <Route path='account' element={<PersonalDetails/>}/>     
                                    </Route>
                                </Route>
                                <Route path="/admin/user/:id" element={<User/>}>
                                    <Route index element={<Trades/>}/>
                                    <Route path='trade' element={<Trades/>}/>
                                    <Route path='edit' element={<EditUser/>}/>
                                    <Route path='user-settings' element={<UserSettings/>}/>
                                    <Route path='tasks' element={<Tasks/>}/>
                                    <Route path='portfolio' element={<Portfolio/>}/>
                                    <Route path='history' element={<Reports/>}/>  
                                    <Route path='generate-profit-loss' element={<GenerateProfitLoss/>}/>

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
