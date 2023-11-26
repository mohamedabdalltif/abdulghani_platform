import { createSlice } from "@reduxjs/toolkit";
import { EntityKeys } from "src/redux/keys";
import { RootState } from "../store";
import { initialState } from "./types";
import thunks from "./thunks";



const slice = createSlice({
    name: EntityKeys.AUTH,
    initialState: initialState,
    reducers: {
        logout: () => initialState,
        changeLang: (state, action) => { state.lang = action.payload },
        changeTempData: (state, action) => { state.tempData = action.payload },
        changeUserData: (state, action) => { state.userData = action.payload },
        changeUserLogin: (state, action) => { state.userLogin = action.payload },
        changeDone: (state, action) => { state.Done = action.payload },
        changeOTPDone: (state, action) => { state.DoneOTP = action.payload },
        changeSignUpSuccess: (state, action) => { state.SuccessSignUp = action.payload },
    },
    extraReducers(builder) {
        //doSignUpStep1
        builder.addCase(thunks.doSignUpStep1.fulfilled, (state, action) => {
            state.Done = true
        });
        builder.addCase(thunks.doSignUpStep1.rejected, (state, action: any) => {
            console.log(action.payload.data)
        });

        //doSignUpStep2
        builder.addCase(thunks.doSignUpStep2.fulfilled, (state, action) => {
            state.Done = true
        });
        builder.addCase(thunks.doSignUpStep2.rejected, (state, action: any) => {
            console.log(action.payload.data)
        });

        //login
        builder.addCase(thunks.login.fulfilled, (state, action:any) => {
            // console.log(action.payload)
            if(action.payload.status==="success"){
            state.userLogin = true
            state.userData = action.payload.message
        }

           
        });
        builder.addCase(thunks.login.rejected, (state, action: any) => {
            console.log(action.payload.data)
        });

    },
})
export const selectLang = (state: RootState) => state.auth.lang
export const selectDone = (state: RootState) => state.auth.Done
export const selectOTPDone = (state: RootState) => state.auth.DoneOTP
export const selectTempData = (state: RootState) => state.auth.tempData
export const selectUserData = (state: RootState) => state.auth.userData
export const selectUserLogin = (state: RootState) => state.auth.userLogin
export const selectSignUpSuccess = (state: RootState) => state.auth.SuccessSignUp


const AuthSlice = {
    thunks,
    slice,
    logout: slice.actions.logout,
    changeLang: slice.actions.changeLang,
    changeTempData: slice.actions.changeTempData,
    changeDone: slice.actions.changeDone,
    changeOTPDone: slice.actions.changeOTPDone,
    changeSignUpSuccess: slice.actions.changeSignUpSuccess,
    changeUserData:slice.actions.changeUserData,
    changeUserLogin:slice.actions.changeUserLogin,
    
}
export default AuthSlice