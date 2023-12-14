import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

import axios from "axios";

export const getActivities = createAsyncThunk('activities/getActivities', async ()=>{
    const response = await axios.get('/fetch-activities');
    return response.data
})


const initialState = {

    activities : []
}

const ActivitySlice = createSlice({

    name:"activites",
    initialState,
    reducers : {
        updateActivities(state,action){
            state.activities = action.payload
        }
    },
    extraReducers :(builder)=>{
        builder
        .addCase(getActivities.fulfilled, (state,action)=>{

            state.activities = action.payload.data
           
         })
    }
})


export const {updateActivities} = ActivitySlice.actions

export default ActivitySlice.reducer