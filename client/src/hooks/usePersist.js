import { useState, useEffect } from "react";

// Custom hook to manage persistence state using localStorage
const usePersist = () => {
  // Initialize 'persist' state with value from localStorage, defaulting to false
  const [persist, setPersist] = useState(
    JSON.parse(localStorage.getItem("persist")) || false
  );

  // Update localStorage whenever 'persist' state changes
  useEffect(() => {
    localStorage.setItem("persist", JSON.stringify(persist));
  }, [persist]);

  // Return current persist state and function to update it
  return [persist, setPersist];
};
export default usePersist;
