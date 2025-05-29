import { useGetUsersQuery } from "./UsersApiSlice";
import User from "./User";

const UsersList = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery();

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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{tableContent}</tbody>
      </table>
    );
  }
  return content;
};

export default UsersList;
