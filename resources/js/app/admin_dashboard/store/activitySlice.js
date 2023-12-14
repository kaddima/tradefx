import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

import axios from "axios";

export const getActivities = createAsyncThunk('activities/getActivities', async (user_id)=>{
    const response = await axios.get('/fetch-activities',{params:{user_id:user_id}});
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