import { createAsyncThunk } from "@reduxjs/toolkit";
import AppAPI from "./api";
import { Alert } from "react-native";

const doSelect_Subject: any = createAsyncThunk<any, any, any>(
    'app/select_subject',
    async (data: any, thunkApi: any) => {
        try {
            const response = await AppAPI.select_subject(data);
            // alert(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)
const doSelect_chain: any = createAsyncThunk<any, any, any>(
    'app/select_subject',
    async (data: any, thunkApi: any) => {
        try {
            const response = await AppAPI.select_chain(data);
            // alert(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)



const AppThunks = {
    doSelect_Subject,
    doSelect_chain
   
};

export default AppThunks;

