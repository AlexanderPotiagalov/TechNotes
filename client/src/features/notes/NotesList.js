import { useGetNotesQuery } from "./notesApiSlice";
import Note from "./Note";
import useAuth from "../../hooks/useAuth";
import useTitle from "../../hooks/useTitle";
import PulseLoader from "react-spinners/PulseLoader";

const NotesList = () => {
  useTitle("techNotes: Notes List");
  const { username, isManager, isAdmin } = useAuth();
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
  if (isLoading) content = <PulseLoader color={"#FFF"} />;
  if (isError)
    content = (
      <p className={isError ? "errmsg" : "offscreen"}>{error?.data?.message}</p>
    );

  if (isSuccess) {
    const { ids, entities } = notes;
    let filteredIds;
    if (isManager || isAdmin) {
      filteredIds = [...ids];
    } else {
      filteredIds = ids.filter(
        (noteId) => entities[noteId].username === username
      );
    }

    const tableContent =
      ids?.length &&
      filteredIds.map((noteId) => <Note key={noteId} noteId={noteId} />);

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
