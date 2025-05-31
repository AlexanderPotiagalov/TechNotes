import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/auth/authSlice";
import { jwtDecode } from "jwt-decode"; // // Import jwtDecode to decode the JWT and extract user info

// Custom hook to extract and interpret user authentication data from the JWT
const useAuth = () => {
  // Get the current access token from Redux state
  const token = useSelector(selectCurrentToken);
  // Default role flags and status
  let isManager = false;
  let isAdmin = false;
  let status = "Employee";

  // If a token exists, decode it to extract user info
  if (token) {
    const decoded = jwtDecode(token);
    const { username, roles } = decoded.UserInfo;

    // Determine user role
    isManager = roles.includes("Manager");
    isAdmin = roles.includes("Admin");

    // Set status string based on role
    if (isManager) status = "Manager";
    if (isAdmin) status = "Admin";

    // Return decoded info and role flags
    return { username, roles, status, isManager, isAdmin };
  }
  // If no token, return default values
  return { username: "", roles: [], isManager, isAdmin, status };
};
export default useAuth;
