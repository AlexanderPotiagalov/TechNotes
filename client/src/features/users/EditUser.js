import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserById } from "./UsersApiSlice";
import EditUserForm from "./EditUserForm";

// EditUser component to handle the editing of a user
const EditUser = () => {
  const { id } = useParams();
  const user = useSelector((state) => selectUserById(state, id));
  const content = user ? <EditUserForm user={user} /> : <p>Loading...</p>;
  return content;
};
export default EditUser;
