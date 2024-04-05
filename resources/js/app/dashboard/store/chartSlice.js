import {createSlice} from "@reduxjs/toolkit"

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
   
})


export const {updateCharts} = ChartSlice.actions

export default ChartSlice.reducer