import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const usersAdapter = createEntityAdapter({}); // Create an entity adapter for users
const initialState = usersAdapter.getInitialState(); // Get the initial state for users

export const usersApiSlice = apiSlice.injectEndpoints({
  // Inject endpoints into the API slice
  endpoints: (builder) => ({
    getUsers: builder.query({
      // Define a query to get users
      query: () => "/users", // Set the endpoint to fetch users
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError; // Validate the response status
      },
      keepUnusedDataFor: 5, // Keep unused data for 5 seconds
      transformResponse: (responseData) => {
        const loadedUsers = responseData.map((user) => {
          user.id = user._id; // Map the _id field to id for consistency
          return user;
        });
        return usersAdapter.setAll(initialState, loadedUsers); // Set all users in the state
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "User", id: "LIST" }, // Provide a tag for the list of users
            ...result.ids.map((id) => ({ type: "User", id })), // Provide tags for each user
          ];
        } else return [{ type: "User", id: "LIST" }]; // Fallback tag if no users are found
      },
    }),
  }),
});

export const { useGetUsersQuery } = usersApiSlice; // Export the hook to use the getUsers query
export const selectUsersResult = usersApiSlice.endpoints.getUsers.select(); // Select the result of the getUsers query
// create memoized selector to get the users result
export const selectUsersData = createSelector(
  selectUsersResult,
  (usersResult) => usersResult.data // Create a selector to get the users data
);

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
} = usersAdapter.getSelectors(
  (state) => selectUsersData(state) ?? initialState
); // Get selectors for users data
