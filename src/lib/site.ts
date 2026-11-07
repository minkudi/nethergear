// Identité publique du site — affichée sur l'ensemble des pages.
export const SITE = {
  legalName: "NetherGear",
  email: "contact@nethegear.com",
  // URL canonique. Surchargée par NEXT_PUBLIC_SITE_URL en production.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nethergear.com",

  // ─── NUMÉRO WHATSAPP À RENSEIGNER ICI ───────────────────────────────────
  // Format international sans « + » ni espaces ni tirets : ex. "33612345678".
  // Vide = le bouton WhatsApp n'est pas affiché.
  whatsappNumber: "",
} as const;
