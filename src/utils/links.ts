export type Link = {
  ref: string;
  label: string;
};

export const links: Link[] = [
  { ref: "/", label: "Accueil" },
  { ref: "/formation", label: "Nos Formations" },
  { ref: "/parcours", label: "Parcours" },
  { ref: "/a-propos", label: "Á Propos" },
  { ref: "/inscription", label: "Inscriptions" },
  { ref: "/bourse", label: "Bourses d'Études" },
  { ref: "/portes-ouverte", label: "Portes Ouvertes" },
  { ref: "/contact", label: "Contacts" },
];
