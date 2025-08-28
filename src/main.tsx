import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  Apropos,
  Bourses,
  Contact,
  Formations,
  HomeLayout,
  Inscriptions,
  Landing,
  Parcours,
  PortesOuvertes,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "formation", element: <Formations /> },
      { path: "parcours", element: <Parcours /> },
      { path: "a-propos", element: <Apropos /> },
      { path: "inscription", element: <Inscriptions /> },
      { path: "bourse", element: <Bourses /> },
      { path: "portes-ouverte", element: <PortesOuvertes /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
