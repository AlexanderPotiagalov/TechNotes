import { createSlice } from "@reduxjs/toolkit";

// Create slice for authentication state
const authSlice = createSlice({
  name: "auth", // slice name for redux
  initialState: { token: null }, // initial state with null token
  // reducer to set credentials (after login)
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload;
      state.token = accessToken;
    },
    // reducer to clear credentials (on logout)
    logOut: (state, action) => {
      state.token = null;
    },
  },
});

// export the actions, reducer and current token for dispatching in components
export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentToken = (state) => state.auth.token;
