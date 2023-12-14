import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const getAccount = createAsyncThunk('accountBalance/getAccount', async ()=>{
    const response = await axios.get('/user-account')
    return response.data
})

const initialState = {

    account : {
        funds:0,
        available:0,
        margin:0,
        profit_loss:0,
    },
    accountBackup :{},
    user:{},
    config:{}    
}

const accountSlice = createSlice({

    name:'accountBalance',
    initialState,
    reducers:{
        updateAccount(state,action){
            state.account.funds = action.payload.funds ? action.payload.funds : state.account.funds
            state.account.available = action.payload.available ? action.payload.available : state.account.available
            state.account.margin = action.payload.margin ? action.payload.margin : 0
            state.account.profit_loss = action.payload.profit_loss ? action.payload.profit_loss : 0

            state.accountBackup.funds = action.payload.funds ? action.payload.funds : state.account.funds
            state.accountBackup.available = action.payload.available ? action.payload.available : state.account.available
            state.accountBackup.margin = action.payload.margin ? action.payload.margin : 0
            state.accountBackup.profit_loss = action.payload.profit_loss ? action.payload.profit_loss : 0
        },

        /**
         * this would only affect changes on the accout state and not on backup account
         * @param {} state 
         * @param {*} action 
         */
        updateAccountWithOutBackup(state,action){
            state.account.funds = action.payload.funds ? action.payload.funds : state.account.funds
            state.account.available = action.payload.available ? action.payload.available : state.account.available
            state.account.margin = action.payload.margin ? action.payload.margin : 0
            state.account.profit_loss = action.payload.profit_loss ? action.payload.profit_loss : 0
            state.account.highlight = action.payload.highlight
        },

        updateUser(state,action){
            state.user = action.payload
        },
        updateConfig(state,action){
            state.config = action.payload
        }
    },

    extraReducers : (builder)=>{
        builder
            .addCase(getAccount.fulfilled, (state,action)=>{

                state.account.funds = +action.payload.data.account.funds
                state.account.available = +action.payload.data.account.available

                state.user = action.payload.data.user
                state.config = action.payload.data.config
            })
            .addCase(getAccount.rejected, (state,action)=>{
                state.status = 'failed'
                state.error = action.error.message
            })

    }
})

export const {updateAccount,updateAccountWithOutBackup} = accountSlice.actions;

export default accountSlice.reducer
