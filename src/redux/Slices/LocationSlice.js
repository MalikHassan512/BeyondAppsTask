import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import env from "../../config/env"; // Importing environment configuration

// Creating an async thunk for fetching locations from the API
export const fetchLocations = createAsyncThunk("location/fetchLocations", async (name) => {
    try {
        // Making an API request to fetch location information  
        const response = await axios.get(`${env.LOCATION_API}/${name}`);
        return response?.data[0]?.capitalInfo?.latlng;
    } catch (error) {
        console.error("error in fetching location api::>>",error);
    }
}
);

// Initial state for the location slice
const initialState = {
    latlng: [],
    loading: false,
    error: false,
    };

// Creating a slice for the location state management
const locationSlice = createSlice({
    name: "location", // name of the slice
    initialState, // initial state
    reducers: {}, // reducers for the slice
    // extra reducers for handling the async thunk actions
    extraReducers:(builder) => {
        // pending action for fetching locations
        builder.addCase(fetchLocations.pending, (state) => {
            state.loading = true;
        });
        // fulfilled action for fetching locations
        builder.addCase(fetchLocations.fulfilled, (state, action) => {
            state.latlng = action.payload;
            state.loading = false;
        });
        // rejected action for fetching locations
        builder.addCase(fetchLocations.rejected, (state) => {
            state.loading = false;
            state.error = true;
        });
    }

});

// Exporting the reducer for the location slice
export default locationSlice.reducer;

