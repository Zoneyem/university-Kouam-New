import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HomeLayout } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/about",
    element: <h1>À propos</h1>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
