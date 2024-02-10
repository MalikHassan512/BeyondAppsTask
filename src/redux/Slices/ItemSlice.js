import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import env from "../../config/env";

export const fetchItems = createAsyncThunk("item/fetchItems", async () => {
    try {
        const response = await axios.get(`${env.API_BASE_URL}images/search?has_breeds=true&limit=20`,
        {
            headers: {
                "x-api-key": env.API_KEY,
            }
        });
        return response?.data;
    } catch (error) {
        console.error(error);
    }
}
);


const initialState = {
    items: [],
    loading: false,
    };

const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(fetchItems.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchItems.fulfilled, (state, action) => {
            state.items = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchItems.rejected, (state) => {
            state.loading = false;
        });
    }


});


export default itemSlice.reducer;

