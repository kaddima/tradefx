import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPortfolio = createAsyncThunk('portfolio/fetchPortfolio', async ()=>{

    const response = await axios.get('/portfolio/fetch')
    return response.data
})

export const addPortfolio = createAsyncThunk('portfolio/addPortfolio', async (data)=>{
    const response = await axios.post('/portfolio/add',data);
    return response.data
})

export const closeAssetPosition = createAsyncThunk('portfolio/closeAssetPosition', async (portfolioId)=>{
    const response = await axios.post('/portfolio/close',{'portfolio_id':portfolioId})
    return response.data
})

const initialState = {

    portfolios:[],
    backupPortfolio:[],
    tasks:[]
}

const portfolioSlice = createSlice({

    name:'portfolio',
    initialState,
    reducers:{
        updatePortfolio(state,action){
            state.portfolios = action.payload.portfolios
        }
    },
    extraReducers : (builder)=>{

        builder
            .addCase(fetchPortfolio.fulfilled, (state,action)=>{
                state.portfolios = action.payload.data.portfolios
                state.backupPortfolio = action.payload.data.portfolios
                state.tasks = action.payload.data.tasks
            })
            .addCase(addPortfolio.fulfilled, (state,action)=>{

                if(action.payload.status == 1){
                    state.portfolios = action.payload.data.portfolios
                    state.backupPortfolio = action.payload.data.portfolios
                }

            })
            .addCase(addPortfolio.rejected, (state,action)=>{

                state.status = 'failed'
                state.error = action.error.message
            })

            .addCase(closeAssetPosition.fulfilled, (state,action)=>{
                state.portfolios = action.payload.data.portfolios
                state.backupPortfolio = action.payload.data.portfolios
            })
            .addCase(closeAssetPosition.rejected, (state,action)=>{

                state.status = 'failed'
                state.error = action.error.message

            })
    }

})

export const {updatePortfolio} = portfolioSlice.actions

export default portfolioSlice.reducer
