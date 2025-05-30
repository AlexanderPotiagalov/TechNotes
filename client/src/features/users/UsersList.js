import { useGetUsersQuery } from "./UsersApiSlice";
import User from "./User";

const UsersList = () => {
  // Fetching users list
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery("usersList", {
    pollingInterval: 60000, // Polling every 60 seconds
    refetchOnFocus: true, // Refetch when the component gains focus
    refetchOnMountOrArgChange: true, // Refetch when the component mounts or arguments change
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
    const { ids } = users;
    const tableContent = ids?.length
      ? ids.map((userId) => <User key={userId} userId={userId} />)
      : null;

    // Render the table with user data
    content = (
      <table className="table table--users">
        <thead className="table__thead">
          <tr>
            <th scope="col" className="table_th user_username">
              Username
            </th>
            <th scope="col" className="table_th roles">
              Roles
            </th>
            <th scope="col" className="table_th edit">
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

export default UsersList;
