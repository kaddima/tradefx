import {configureStore,} from '@reduxjs/toolkit'
import mainReducer from './mainSlice'
import assetsReducer from './assetsSlice'
import portfolioReducer from "./portfolioSlice"
import accountReducer from "./accountSlice"
import activityReducer from './activitySlice'

const store = configureStore({

    reducer:{
        main: mainReducer,
        assets:assetsReducer,
        portfolio:portfolioReducer,
        account:accountReducer,
        activities:activityReducer,
    }
})

export default store