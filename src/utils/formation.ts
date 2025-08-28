type Code = string[];
export type Formation = {
  name: string;
  id: number;
  code?: Code;
};

export const formations: Formation[] = [
  { id: 1, name: "bts", code: ["gestion", "industriel", "santé"] },
  { id: 2, name: "hnd", code: ["gestion", "industriel", "santé"] },
  { id: 3, name: "licence pro", code: ["gestion", "industriel", "santé"] },
  { id: 4, name: "bachelor degree", code: ["gestion", "industriel", "santé"] },
  { id: 5, name: "Master Pro", code: ["gestion", "industriel", "santé"] },
  { id: 6, name: "Master degree", code: ["gestion", "industriel", "santé"] },
];
