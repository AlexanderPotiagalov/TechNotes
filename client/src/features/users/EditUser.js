import { useParams } from "react-router-dom";
import EditUserForm from "./EditUserForm";
import { useGetUsersQuery } from "./UsersApiSlice";
import PulseLoader from "react-spinners/PulseLoader";
import useTitle from "../../hooks/useTitle";

// EditUser component to handle the editing of a user
const EditUser = () => {
  useTitle("techNotes: Edit User");
  const { id } = useParams();
  const { user } = useGetUsersQuery("usersList", {
    selectFromResult: ({ data }) => ({
      user: data?.entities[id],
    }),
  });
  if (!user) return <PulseLoader color={"#FFF"} />;
  const content = <EditUserForm user={user} />;
  return content;
};
export default EditUser;
