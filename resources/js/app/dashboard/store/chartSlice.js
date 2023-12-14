import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

import axios from "axios";

export const getTimeSeries = createAsyncThunk('chart/timeSeries', async ()=>{
    const response = await 1
    return response.data
})


const initialState = {

    charts : []
}

const ChartSlice = createSlice({

    name:"chart",
    initialState,
    reducers : {
        updateCharts(state,action){
            state.charts = action.payload
        }
    },
    extraReducers :(builder)=>{
        builder
        .addCase(getTimeSeries.fulfilled, (state,action)=>{

            state.charts = action.payload.data
           
         })
    }
})


export const {updateCharts} = ChartSlice.actions

export default ChartSlice.reducer