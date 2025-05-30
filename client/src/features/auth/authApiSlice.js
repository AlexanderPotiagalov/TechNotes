import { apiSlice } from "../../app/api/apiSlice";
import { logOut } from "./authSlice";

// Extend the base API slice with authentication-related endpoints
export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Login mutation: sends user credentials to /auth endpoint
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth", // Backend route for login
        method: "POST", // POST request to send credentials
        body: { ...credentials }, // Pass the login form data
      }),
    }),
    // Logout mutation: hits /auth/logout and clears Redux auth state
    sendLogout: builder.mutation({
      query: () => ({
        url: "/auth/logout", // Backend route for logout
        method: "POST", // POST request to logout endpoint
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          // const { data } =
          await queryFulfilled; // Wait for the logout request to complete
          // console.log(data);
          dispatch(logOut()); // Clear the token from Redux state
          dispatch(apiSlice.util.resetApiState()); // Reset the API cache/state
        } catch (err) {
          console.log(err);
        }
      },
    }),
    // refresh mutation
    refresh: builder.mutation({
      query: () => ({
        url: "/auth/refresh",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useSendLogoutMutation, useRefreshMutation } =
  authApiSlice;
