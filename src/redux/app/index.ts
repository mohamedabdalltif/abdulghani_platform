import { createSlice } from "@reduxjs/toolkit";
import { EntityKeys } from "src/redux/keys";
import { RootState } from "../store";
import { initialState } from "./types";
import thunks from "./thunks";



const slice = createSlice({
    name: EntityKeys.APP,
    initialState: {},
    reducers: {
       
        
    },
    extraReducers(builder) {
       

    },
})


const AppSlice = {
    thunks,
    slice,
   
    
}
export default AppSlice