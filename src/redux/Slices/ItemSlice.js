import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; 
import env from "../../config/env"; // Importing environment configuration

//// Creating an async thunk for fetching items from the API
export const fetchItems = createAsyncThunk("item/fetchItems", async () => {
    try {
        // Making an API request to fetch items with breeds information
        const response = await axios.get(`${env.API_BASE_URL}images/search?has_breeds=true&limit=20`,
        {
            headers: {
                "x-api-key": env.API_KEY, // API key for authorization
            }
        });
        return response?.data;
    } catch (error) {
        console.error(error);
    }
}
);

// Initial state for the item slice
const initialState = {
    items: [],
    loading: false,
    error: false,
    };

    // Creating a slice for the item state management
const itemSlice = createSlice({
    name: "item", // name of the slice
    initialState, // initial state
    reducers: {}, // reducers for the slice
    // extra reducers for handling the async thunk actions
    extraReducers:(builder) => {
        // pending action for fetching items
        builder.addCase(fetchItems.pending, (state) => {
            state.loading = true;
        });
        // fulfilled action for fetching items
        builder.addCase(fetchItems.fulfilled, (state, action) => {
            state.items = action.payload;
            state.loading = false;
        });
        // rejected action for fetching items
        builder.addCase(fetchItems.rejected, (state) => {
            state.loading = false;
            state.error = true;
        });
    }


});

// Exporting the reducer for the item slice
export default itemSlice.reducer;

