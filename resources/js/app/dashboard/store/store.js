import {configureStore,} from '@reduxjs/toolkit'
import mainReducer from './mainSlice'
import assetsReducer from './assetsSlice'
import portfolioReducer from "./portfolioSlice"
import accountReducer from "./accountSlice"
import activityReducer from './activitySlice'
import chartReducer from "./chartSlice"


const store = configureStore({

    reducer:{
        main: mainReducer,
        assets:assetsReducer,
        portfolio:portfolioReducer,
        account:accountReducer,
        activities:activityReducer,
        charts:chartReducer,
    }
})


export default store
