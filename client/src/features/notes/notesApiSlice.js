import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const notesAdapter = createEntityAdapter({}); // Create an entity adapter for notes
const initialState = notesAdapter.getInitialState(); // Get the initial state for notes

export const notesApiSlice = apiSlice.injectEndpoints({
  // Inject endpoints into the API slice
  endpoints: (builder) => ({
    getNotes: builder.query({
      // Define a query to get notes
      query: () => "/notes", // Set the endpoint to fetch notes
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError; // Validate the response status
      },
      keepUnusedDataFor: 5, // Keep unused data for 5 seconds
      transformResponse: (responseData) => {
        const loadedNotes = responseData.map((note) => {
          note.id = note._id; // Map the _id field to id for consistency
          return note;
        });
        return notesAdapter.setAll(initialState, loadedNotes); // Set all notes in the state
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Note", id: "LIST" }, // Provide a tag for the list of notes
            ...result.ids.map((id) => ({ type: "Note", id })), // Provide tags for each note
          ];
        } else return [{ type: "Note", id: "LIST" }]; // Fallback tag if no notes are found
      },
    }),
  }),
});

export const { useGetNotesQuery } = notesApiSlice; // Export the hook to use the getNotes query
export const selectNotesResult = notesApiSlice.endpoints.getNotes.select(); // Select the result of the getNotes query
// create memoized selector to get the notes result
export const selectNotesData = createSelector(
  selectNotesResult,
  (notesResult) => notesResult.data // Create a selector to get the notes data
);

export const {
  selectAll: selectAllNotes,
  selectById: selectNoteById,
  selectIds: selectNoteIds,
} = notesAdapter.getSelectors(
  (state) => selectNotesData(state) ?? initialState
); // Get selectors for notes data
