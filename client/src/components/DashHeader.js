import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useSendLogoutMutation } from "../features/auth/authApiSlice";

// Regular expressions to match specific dashboard paths
const DASH_REGEX = /^\/dash(\/)?$/;
const NOTES_REGEX = /^\/dash\/notes(\/)?$/;
const USERS_REGEX = /^\/dash\/users(\/)?$/;

const DashHeader = () => {
  const navigate = useNavigate(); // For programmatic navigation
  const { pathname } = useLocation(); // Get the current route path

  // Hook from RTK Query to handle logout API call
  const [sendLogout, { isLoading, isError, error }] = useSendLogoutMutation();

  // Explicit logout handler
  const handleLogout = async () => {
    try {
      await sendLogout().unwrap(); // Send logout request and unwrap the result
      navigate("/"); // Navigate to the homepage after successful logout
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  // Show loading or error messages if logout fails
  if (isLoading) return <p>Logging Out...</p>;
  if (isError) return <p>Error: {error?.data?.message}</p>;

  // Apply a smaller header class for pages that are not main dashboards
  let dashClass = null;
  if (
    !DASH_REGEX.test(pathname) &&
    !NOTES_REGEX.test(pathname) &&
    !USERS_REGEX.test(pathname)
  ) {
    dashClass = "dash-header__container--small";
  }

  // Logout button with icon
  const logoutButton = (
    <button className="icon-button" title="Logout" onClick={handleLogout}>
      <FontAwesomeIcon icon={faRightFromBracket} />
    </button>
  );

  // Header structure
  const content = (
    <header className="dash-header">
      <div className={`dash-header__container ${dashClass}`}>
        <Link to="/dash">
          <h1 className="dash-header__title">techNotes</h1>
        </Link>
        <nav className="dash-header__nav">{logoutButton}</nav>
      </div>
    </header>
  );

  return content;
};

export default DashHeader;
