import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPortfolio = createAsyncThunk('portfolio/fetchPortfolio', async (id)=>{

    const response = await axios.get('/portfolio/fetch',{params:{user_id:id}})
    return response.data
})

export const fetchTasks = createAsyncThunk('portfolio/fetchTasks', async (id)=>{

    const response = await axios.get('/admin/portfolio/fetch-tasks',{params:{user_id:id}})
    return response.data
})

export const addPortfolio = createAsyncThunk('portfolio/addPortfolio', async (data)=>{
    const response = await axios.post('/portfolio/add',data);
    return response.data
})


// export const closeAssetPosition = createAsyncThunk('portfolio/closeAssetPosition', async (data)=>{
//     const response = await axios.post('/portfolio/close',{'portfolio_id':data.portfolioId,'user_id':data.user_id})
//     return response.data
// })
export const closeAssetPosition = createAsyncThunk('portfolio/closeAssetPosition', async (data)=>{
    const response = await axios.post('/portfolio/close',{'portfolio_id':data.portfolio_id,'user_id':data.user_id})

    return response.data
})
const initialState = {

    portfolios:[],
    tasks:[]
}

const portfolioSlice = createSlice({

    name:'portfolio',
    initialState,
    reducers:{
        updatePortfolio(state,action){
            state.portfolios = action.payload.portfolios
        },
        updateTasks(state,action){
            state.tasks = action.payload.tasks
        }
    },

    extraReducers : (builder)=>{

        builder
            .addCase(fetchPortfolio.fulfilled, (state,action)=>{
                state.portfolios = action.payload.data.portfolios
            })
            .addCase(addPortfolio.fulfilled, (state,action)=>{

                if(action.payload.status == 1){
                    state.portfolios = action.payload.data.portfolios
                }

            })
            .addCase(addPortfolio.rejected, (state,action)=>{

                state.status = 'failed'
                state.error = action.error.message
            })

            .addCase(closeAssetPosition.fulfilled, (state,action)=>{
                if(action.payload.status == 1){
                    state.portfolios = action.payload.data.portfolios
                }
                
            })
            .addCase(closeAssetPosition.rejected, (state,action)=>{

                state.status = 'failed'
                state.error = action.error.message

            })
            .addCase(fetchTasks.fulfilled,(state,action)=>{
                state.tasks = action.payload.data.tasks
            })
    }

})

export const {updatePortfolio,updateTasks} = portfolioSlice.actions

export default portfolioSlice.reducer
