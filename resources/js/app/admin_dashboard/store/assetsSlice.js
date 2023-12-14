import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";

export const getAssets = createAsyncThunk('assets/getAssets', async (user_id)=>{
    const response = await axios.get('/assets',{params:{'user_id':user_id}});
    return response.data
})

export const addFavorite = createAsyncThunk('assets/addFavorite', async ({id,category})=>{
    const response = await axios.post('/favorite/add',{id,category})
    return response.data
})

export const removeFavorite = createAsyncThunk('assets/removeFavorite', async ({id,category})=>{
    const response = await axios.post('/favorite/remove',{id,category})
    return response.data
})


const initialState = {
    active:"cryptocurrency",
    assets:{
        cryptocurrency:[],
        forex:[],
        stocks:[],
        oil_market:[],
        commodity:[],
        favorite:[],
        most_traded:[],
        top_riser:[],
        top_fallers:[],
        most_volatile:[],
    },
    backupAssets:{
        cryptocurrency:[],
        forex:[],
        stocks:[],
        oil_market:[],
        commodity:[],
        favorite:[],
        most_traded:[],
        top_riser:[],
        top_fallers:[],
        most_volatile:[],
    },
    leverage:{
        cryptocurrency:'2:1',
        stocks:'20:1',
        forex:'30:1',
        commodity:'20:1',
        oil_market:"20:1"
    },
    selectedAsset:{}
}

const assetSlice = createSlice({

    name:'assets',
    initialState,
    reducers:{
        /**
         * this sets the state to hold which asset is displayed
         * on the assets table bases on assets state eg
         * @param {*} state
         * @param {*} action
         */
        setActiveAsset(state,action){

            state.active = action.payload

        },

        updateAsset(state,action){
            //console.log(action.payload)
            state.assets[action.payload.name] = action.payload.assets
        },

        /**
         * this programatically set up the values for 'most traded,top-risers etc',
         * @param {*} state 
         * @param {*} actions 
         */
        setCategoryAssets(state,actions){            
            state.assets[actions.payload.name] = actions.payload.data
            state.backupAssets[actions.payload.name] = actions.payload.data
            state.active = actions.payload.name
            
        },
        /**
         * this holds the assets selected to update sidebar
         * this data comprises of specific data for the particular assets
         * @param {*} state
         * @param {*} action
         */
        setSelectedAsset(state,action){

            state.selectedAsset = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getAssets.fulfilled, (state,action)=>{

            state.assets.cryptocurrency = action.payload.data.crypto
            state.assets.forex = action.payload.data.forex
            state.assets.stocks = action.payload.data.stocks
            state.assets.oil_market = action.payload.data.oilMarket,
            state.assets.commodity = action.payload.data.commodities,
            state.assets.favorite = action.payload.data.favorite

            state.backupAssets.cryptocurrency = action.payload.data.crypto
            state.backupAssets.forex = action.payload.data.forex
            state.backupAssets.stocks = action.payload.data.stocks
            state.backupAssets.oil_market = action.payload.data.oilMarket,
            state.backupAssets.commodity = action.payload.data.commodities,
            state.backupAssets.favorite = action.payload.data.favorite
        })

        .addCase(addFavorite.fulfilled, (state,action)=>{

            if(action.payload.status){
                state.assets.favorite = action.payload.data
                state.backupAssets.favorite = action.payload.data
            }

           // console.log(action.payload.data)
        })
        .addCase(removeFavorite.fulfilled, (state,action)=>{
            state.assets.favorite = action.payload.data
            state.backupAssets.favorite = action.payload.data
        })
        
    }
})


export const {updateState,setActiveAsset,setSelectedAsset,
    setCategoryAssets,updateAsset} = assetSlice.actions

export default assetSlice.reducer
