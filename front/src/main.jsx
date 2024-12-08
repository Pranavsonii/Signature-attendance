import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Login from "./pages/Login.jsx";
import Mark from "./pages/Mark.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/", // Home page
    element: <App />,
  },
  { path: "/login", element: <Login /> },
  { path: "/mark/:id", element: <Mark /> },
  // { path: "/register", component: Login },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
