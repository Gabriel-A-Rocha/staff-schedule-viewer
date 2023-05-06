import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Cooks } from "./pages/Cooks";
import { Waiters } from "./pages/Waiters";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cooks />,
  },
  {
    path: "/Cooks",
    element: <Cooks />,
  },
  {
    path: "/Waiters",
    element: <Waiters />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
