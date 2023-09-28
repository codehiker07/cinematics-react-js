import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <PagesNotFound></PagesNotFound>,
    children: [
      {
        path: "/",
        element: <MovieList></MovieList>,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail></MovieDetail>,
      },
      {
        path: "/movies/popular",
        element: <MovieList></MovieList>,
      },
      {
        path: "/movies/top",
        element: <MovieList></MovieList>,
      },
      {
        path: "/movies/upcoming",
        element: <MovieList></MovieList>,
      },
      {
        path: "/search",
        element: <search></search>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
