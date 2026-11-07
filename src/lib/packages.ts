// Catalogue produits — prix publics fixes en centimes d'euro.
// 4 catégories : outils & modèles, formations, certifications, conseil.
// La commande s'effectue par email (voir CartDrawer) en attendant l'intégration
// du processeur de paiement.

export type CategoryId = "guides" | "formations" | "certifications" | "conseil";

export const CATEGORY_ORDER: readonly CategoryId[] = [
  "guides",
  "formations",
  "certifications",
  "conseil",
];

export const PACKAGES: {
  id: PackageId;
  amount: number; // centimes d'euro
  category: CategoryId;
}[] = [
  // ——— Outils & modèles ———
  { id: "pack-modeles-administratifs", amount: 2900, category: "guides" },
  { id: "diagnostic-swot", amount: 4900, category: "guides" },

  // ——— Formations ———
  { id: "atelier-planification", amount: 9900, category: "formations" },

  // ——— Certifications ———
  { id: "certification-okr", amount: 9500, category: "certifications" },

  // ——— Conseil & accompagnement ———
  { id: "audit-conformite-donnees", amount: 10900, category: "conseil" },
];

export type PackageId = keyof typeof import("@/lib/i18n/fr").fr.packages;

export const PACKAGE_IDS = PACKAGES.map((p) => p.id);

export function findPackage(id: string) {
  return PACKAGES.find((p) => p.id === id);
}

// Prix le plus bas d'une catégorie — utilisé pour les cartes « dès X € ».
export function categoryMinAmount(category: CategoryId): number {
  return Math.min(
    ...PACKAGES.filter((p) => p.category === category).map((p) => p.amount),
  );
}
