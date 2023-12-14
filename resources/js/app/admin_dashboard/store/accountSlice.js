import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

//gets details for users(not admin) data includes()
export const getUserAccountDetails = createAsyncThunk('account/getAccount', async (id)=>{
    const response = await axios.get('/user-account',{params:{user_id:id}})
    return response.data
})

export const getPaymentsMethods = createAsyncThunk('paymentMethods/getPaymentsMethods', async ()=>{
    const response = await axios.get('/admin/crypto-setup')
    return response.data
})

export const getAdminData = createAsyncThunk('admin-users/getAdminUsers', async ()=>{
    const response = await axios.get('/admin/admin-users')
    return response.data
})

const initialState = {

    account : {
        funds:0,
        available:0,
        margin:0,
        profit_loss:0
    },
    users:[],
    user:{},
    usersTasks:[],
    usersPortfolio:[],
    adminProfile:{},
    userConfig:{},
    adminConfig:{}, 
    superAdminConfig:{},
    appFeatures:{},
    paymentMethods:{crypto:{},transfer:{}}  
}

const accountSlice = createSlice({

    name:'account',
    initialState,
    reducers:{
        updateAccountBalance(state,action){
            state.account.funds = action.payload.funds ? action.payload.funds : state.account.funds
            state.account.available = action.payload.available ? action.payload.available : state.account.available
            state.account.margin = action.payload.margin ? action.payload.margin : 0
            state.account.profit_loss = action.payload.profit_loss ? action.payload.profit_loss : 0
        },
        updateUsers(state,action){
            state.users = action.payload
        },
        updateUserConfig(state,action){
            state.userConfig = action.payload
        },
        updatePaymentMethods(state,action){
            state.paymentMethods.crypto = action.payload
        },
        updateSuperAdminConfig(state,action){
            state.superAdminConfig = action.payload
        }

    },

    extraReducers : (builder)=>{
        builder
            .addCase(getUserAccountDetails.fulfilled, (state,action)=>{

                state.account.funds = +action.payload.data.account.funds
                state.account.available = +action.payload.data.account.available

                state.user = action.payload.data.user
                state.userConfig = action.payload.data.config
            })
            .addCase(getUserAccountDetails.rejected, (state,action)=>{
                state.status = 'failed'
                state.error = action.error.message
            })

            .addCase(getAdminData.fulfilled, (state,action)=>{

                state.users = action.payload.data.users
                state.admin = action.payload.data.admin
                state.appFeatures = action.payload.data.features
                state.superAdminConfig = action.payload.data.admin_config
              
            })
            .addCase(getPaymentsMethods.fulfilled, (state,action)=>{

                state.paymentMethods.crypto = action.payload.data
              
            })

    }
})

export const {updateAccountBalance,updatePaymentMethods,updateUsers,
updateUserConfig,updateSuperAdminConfig} = accountSlice.actions;

export default accountSlice.reducer
