// API Slice in Redux Toolkit is designed to simplify data flow, optimize caching, and streamline API requests. It automatically fetches and stores data efficiently, reducing unnecessary network calls and improving app performance.
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  // Create an API slice using RTK Query
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }), // Set the base URL for API requests
  tagTypes: ["Note", "User"], // Define tag types for cache management
  endpoints: (builder) => ({}), // Define endpoints using the builder pattern
});
