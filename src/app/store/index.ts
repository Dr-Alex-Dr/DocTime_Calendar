import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { api } from "../../entities/table/api/api";

const reducers = combineReducers({
    [api.reducerPath]: api.reducer
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
}) 

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

