import { combineReducers, configureStore, } from "@reduxjs/toolkit"; // import combineReducers and configureStore from redux toolkit
import itemSlice from "./Slices/ItemSlice"; // import the itemSlice
import LocationSlice from "./Slices/LocationSlice"; // import the LocationSlice

// Combining all slices (reducers) into a rootReducer
const rootReducer = combineReducers({
    item: itemSlice, // Reducer for managing state related to items
    location: LocationSlice, // Reducer for managing state related to location
});

// Creating a store with rootReducer and middleware
export const store = configureStore({
    reducer: rootReducer, // rootReducer is passed as the reducer to the store
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            // serializableCheck: false,
        })
});
