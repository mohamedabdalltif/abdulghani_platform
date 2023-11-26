
import { combineReducers } from "@reduxjs/toolkit";
import loadingSlice from "./_loading";
import AuthSlice from "./auth";

const combineReducer = combineReducers({
    _loading: loadingSlice.reducer,
    [AuthSlice.slice.name]: AuthSlice.slice.reducer,
})

export default combineReducer