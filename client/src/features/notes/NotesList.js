import { useGetNotesQuery } from "./notesApiSlice";
import Note from "./Note";

const NotesList = () => {
  // Fetching notes list
  const {
    data: notes,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetNotesQuery("notesList", {
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  // Conditional rendering based on the query state
  // isLoading: true when the request is in progress
  // isSuccess: true when the request is successful and data is available
  // isError: true when the request fails
  let content;
  if (isLoading) content = <p>Loading...</p>;
  if (isError)
    content = (
      <p className={isError ? "errmsg" : "offscreen"}>{error?.data?.message}</p>
    );

  if (isSuccess) {
    const { ids } = notes;
    const tableContent = ids?.length
      ? ids.map((noteId) => <Note key={noteId} noteId={noteId} />)
      : null;

    // Render the table with note data
    content = (
      <table className="table table--notes">
        <thead className="table__thead">
          <tr>
            <th scope="col" className="table_th note_status">
              Username
            </th>
            <th scope="col" className="table_th note_created">
              Created
            </th>
            <th scope="col" className="table_th note_updated">
              Updated
            </th>
            <th scope="col" className="table_th note_title">
              Title
            </th>
            <th scope="col" className="table_th node_owner">
              Owner
            </th>
            <th scope="col" className="table_th note_edit">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>{tableContent}</tbody>
      </table>
    );
  }
  return content;
};

export default NotesList;
