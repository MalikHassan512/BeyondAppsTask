import { configureStore, } from "@reduxjs/toolkit";
import itemSlice from "./Slices/ItemSlice";
import LocationSlice from "./Slices/LocationSlice";



export const store = configureStore({
    reducer: {
        item: itemSlice,
        location: LocationSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            // serializableCheck: false,
        })

});
