export type Link = {
  ref: string;
  label: string;
  subLinks?: Link[];
};

export const links: Link[] = [
  { ref: "/", label: "Accueil" },
  {
    ref: "/formations",
    label: "Nos Formations",
    subLinks: [
      {
        ref: "/bts",
        label: "bts",
        subLinks: [
          { ref: "/gestion", label: "gestion" },
          { ref: "/sante", label: "santé" },
          { ref: "/industriel", label: "industriel" },
        ],
      },
      {
        ref: "/hnd",
        label: "hnd",
      },
      {
        ref: "/licence-pro",
        label: "licence pro",
        subLinks: [
          { ref: "/gestion", label: "gestion" },
          { ref: "/sante", label: "santé" },
          { ref: "/industriel", label: "industriel" },
        ],
      },
      {
        ref: "/bachelor",
        label: "bachelo's degree",
        subLinks: [
          { ref: "/gestion", label: "gestion" },
          { ref: "/sante", label: "santé" },
          { ref: "/industriel", label: "industriel" },
        ],
      },
      {
        ref: "/master-pro",
        label: "Master pro",
        subLinks: [
          { ref: "/gestion", label: "gestion" },
          { ref: "/sante", label: "santé" },
          { ref: "/industriel", label: "industriel" },
        ],
      },
      {
        ref: "/master-degree",
        label: "Master Degree",
        subLinks: [
          { ref: "/gestion", label: "gestion" },
          { ref: "/sante", label: "santé" },
          { ref: "/industriel", label: "industriel" },
        ],
      },
    ],
  },
  { ref: "/parcours", label: "Parcours" },
  { ref: "/a-propos", label: "Á Propos" },
  { ref: "/inscription", label: "Inscriptions" },
  { ref: "/bourse", label: "Bourses d'Études" },
  { ref: "/portes-ouverte", label: "Portes Ouvertes" },
  { ref: "/contact", label: "Contacts" },
];
