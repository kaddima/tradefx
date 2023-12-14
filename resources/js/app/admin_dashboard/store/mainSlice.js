import {createSlice } from "@reduxjs/toolkit";

const initialState = {
    navMenu:{
        activeMenu :false,
       // accountModal:false
    },
    screenSize:'',
    currentColor:'#03c9d7',
    themeSettings:false,
    currentMode:'dark',
   
}

const mainSlice = createSlice({
    name:'main',
    initialState,
    reducers:{
        toggleActiveMenu:(state, action)=>{
            state.navMenu.activeMenu = !state.navMenu.activeMenu
        
        },

        setActiveMenu_screenSize: (state,action)=>{
            state.navMenu.activeMenu = action.payload.active

            if(action.payload.screenSize){
                state.screenSize = action.payload.screenSize
            }
            
        },
      
        toggleAccountModal: (state,action)=>{
            
           state.navMenu.accountModal = !state.navMenu.accountModal
        },
        setThemeSettings:(state, action)=>{
        
            state.themeSettings = action.payload.display
            
        },
        setColor: (state,action)=>{
            state.currentColor = action.payload
        },
        setTheme:(state, action)=>{
            state.currentMode = action.payload
        }
    }
})

export const {toggleActiveMenu, setThemeSettings,
     setActiveMenu_screenSize,
setColor, setTheme,toggleAccountModal} = mainSlice.actions

export default mainSlice.reducer