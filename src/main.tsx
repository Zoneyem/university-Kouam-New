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
  GestionPage,
  HndPage,
  HomeLayout,
  IndustrielPage,
  Inscriptions,
  Landing,
  LicencePro,
  MasterDegree,
  MasterPro,
  Parcours,
  PortesOuvertes,
  SantePage,
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
        // ["gestion", "industriel", "santé"]
        children: [
          {
            path: "bts",
            element: <BtsPage />,
            children: [
              { path: "gestion", element: <GestionPage /> },
              { path: "industriel", element: <IndustrielPage /> },
              { path: "sante", element: <SantePage /> },
            ],
          },
          {
            path: "hnd",
            element: <HndPage />,
            children: [
              { path: "gestion", element: <GestionPage /> },
              { path: "industriel", element: <IndustrielPage /> },
              { path: "sante", element: <SantePage /> },
            ],
          },
          {
            path: "licence-pro",
            element: <LicencePro />,
            children: [
              { path: "gestion", element: <GestionPage /> },
              { path: "industriel", element: <IndustrielPage /> },
              { path: "sante", element: <SantePage /> },
            ],
          },
          {
            path: "bachelor",
            element: <BachelorDegree />,
            children: [
              { path: "gestion", element: <GestionPage /> },
              { path: "industriel", element: <IndustrielPage /> },
              { path: "sante", element: <SantePage /> },
            ],
          },
          {
            path: "master-pro",
            element: <MasterPro />,
            children: [
              { path: "gestion", element: <GestionPage /> },
              { path: "industriel", element: <IndustrielPage /> },
              { path: "sante", element: <SantePage /> },
            ],
          },
          {
            path: "master-degree",
            element: <MasterDegree />,
            children: [
              { path: "gestion", element: <GestionPage /> },
              { path: "industriel", element: <IndustrielPage /> },
              { path: "sante", element: <SantePage /> },
            ],
          },
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
