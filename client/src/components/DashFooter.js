import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faHouse } from "@fortawesome/free-solid-svg-icons"; // Import specific icon
import { useNavigate, useLocation } from "react-router-dom"; // Import hooks for navigation and location

const DashFooter = () => {
  // DashFooter component
  const navigate = useNavigate(); // Hook to navigate programmatically
  const { pathname } = useLocation(); // Hook to get the current path
  const onGoHomeClicked = () => navigate("/dash"); // Function to navigate to the home path

  let goHomeButton = null; // Initialize goHomeButton as null
  if (pathname !== "/dash") {
    // Check if the current path is not the home path
    goHomeButton = (
      <button
        className="dash-footer_buton icon-button"
        title="Home"
        onClick={onGoHomeClicked}
      >
        <FontAwesomeIcon icon={faHouse} />
      </button>
    );
  }

  const content = (
    <footer className="dash-footer">
      {goHomeButton}
      <p>Current User:</p>
      <p>Status: </p>
    </footer>
  );
  return content;
};
export default DashFooter;
