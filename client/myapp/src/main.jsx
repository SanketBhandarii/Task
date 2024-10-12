import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "./user/User.jsx";
import AllUsers from "./allusers/AllUsers.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <User />,
  },
  {
    path: "/allusers",
    element: <AllUsers />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
