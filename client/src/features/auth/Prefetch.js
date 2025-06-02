// This component fetches users and notes before they're needed to speed up your app, and unsubscribes when the component unmounts to clean up memory.

import { store } from "../../app/store";
import { notesApiSlice } from "../notes/notesApiSlice";
import { usersApiSlice } from "../users/UsersApiSlice";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

// Prefetch component to initiate API calls for notes and users
const Prefetch = () => {
  // This component is used to prefetch data for notes and users when the application starts
  useEffect(() => {
    store.dispatch(
      notesApiSlice.util.prefetch("getNotes", "notesList", { force: true })
    );
    store.dispatch(
      usersApiSlice.util.prefetch("getUsers", "usersList", { force: true })
    );
  }, []);

  return <Outlet />; // Render the Outlet component to allow nested routes to render their components
};

export default Prefetch;
