import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import About from "./pages/about";
import { Curriculum } from "./pages/curriculum.tsx";
import { HomePage } from "./pages/home-page";
import { Projects } from "./pages/projects.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "curriculum",
        element: <Curriculum />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
