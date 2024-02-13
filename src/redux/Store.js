import { combineReducers, configureStore, } from "@reduxjs/toolkit";
import itemSlice from "./Slices/ItemSlice";
import LocationSlice from "./Slices/LocationSlice";

const rootReducer = combineReducers({
    item: itemSlice,
    location: LocationSlice,
});


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            // serializableCheck: false,
        })

});
