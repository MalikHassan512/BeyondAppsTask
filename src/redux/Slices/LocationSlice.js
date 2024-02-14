import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import env from "../../config/env";

export const fetchLocations = createAsyncThunk("location/fetchLocations", async (name) => {
    try {
        const response = await axios.get(`${env.LOCATION_API}/${name}`);
        return response?.data[0]?.capitalInfo?.latlng;
    } catch (error) {
        console.error(error);
    }
}
);


const initialState = {
    latlng: [],
    loading: false,
    error: false,
    };

const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(fetchLocations.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchLocations.fulfilled, (state, action) => {
            state.latlng = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchLocations.rejected, (state) => {
            state.loading = false;
            state.error = true;
        });
    }

});

export default locationSlice.reducer;

