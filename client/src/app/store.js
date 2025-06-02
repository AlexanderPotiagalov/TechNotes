import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, // Register the API slice reducer
    auth: authReducer, // Register the auth slice reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // Add the API slice middleware
  devTools: false,
});

setupListeners(store.dispatch); // Set up listeners for the store to handle query lifecycle events
