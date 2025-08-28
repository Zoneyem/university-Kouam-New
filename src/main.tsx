import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  Apropos,
  BachelorDegree,
  Bourses,
  BtsPage,
  Contact,
  Formations,
  HndPage,
  HomeLayout,
  Inscriptions,
  Landing,
  LicencePro,
  MasterDegree,
  MasterPro,
  Parcours,
  PortesOuvertes,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Landing /> },
      {
        path: "formations",
        element: <Formations />,
        children: [
          { path: "bts", element: <BtsPage /> },
          { path: "hnd", element: <HndPage /> },
          { path: "licence-pro", element: <LicencePro /> },
          { path: "bachelor", element: <BachelorDegree /> },
          { path: "master-pro", element: <MasterPro /> },
          { path: "master-degree", element: <MasterDegree /> },
        ],
      },
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
