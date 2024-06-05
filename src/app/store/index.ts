import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { api } from "../../entities/table/api/api";
import cabinetsSlice from "../../entities/table/lib/cabinetsSlice";
import intervalSlice from "../../entities/table/lib/intervalSlice";

const reducers = combineReducers({
    [api.reducerPath]: api.reducer,
    cabinets: cabinetsSlice,
    intervals: intervalSlice,
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
}) 

