# NetherGear

Site officiel de **NetherGear** — conseil, formation et certification pour PME.
Bilingue **français / anglais**, construit avec Next.js (App Router, TypeScript) et
Tailwind CSS v4.

- Contact : contact@nethegear.com (`src/lib/site.ts`)
- Domaine cible : https://nethergear.com *(surchargé par `NEXT_PUBLIC_SITE_URL`)*

## Stack

- **Next.js 16** (App Router, TypeScript) + **Tailwind CSS v4**
- **i18n maison** : dictionnaires FR/EN dans `src/lib/i18n/`, URLs localisées
  (`/fr/tarifs`, `/en/pricing`…), détection de langue par cookie + `Accept-Language`
- **Catalogue de 5 offres** : panier persistant qui prépare un email de commande
  (`src/lib/packages.ts` pour les prix, dictionnaires pour les textes)
- **Nodemailer** (SMTP) pour le formulaire de contact
- **Docker** fourni (`Dockerfile`, port 8080) — déployable sur n'importe quel hôte Node

## Démarrage local

```bash
npm install
# créez un .env.local et renseignez les variables ci-dessous
npm run dev                  # http://localhost:3000 → redirection vers /fr ou /en
```

Build de production : `npm run build && npm run start`.
Vérification des types : `npx tsc --noEmit`.

## Variables d'environnement

Aucune clé n'est codée en dur ; en local les variables vont dans `.env.local`
(jamais committé), en production dans les réglages de la plateforme.

| Variable | Rôle |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL canonique (`https://nethergear.com` en prod) |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` / `SMTP_SECURE` | SMTP du formulaire de contact |
| `SMTP_FROM` / `CONTACT_TO` | Optionnels (expéditeur / destinataire, défaut : `SMTP_USER`) |

> Sans SMTP configuré, les soumissions du formulaire sont journalisées côté serveur.

## Déploiement

**Docker** : `docker build -t nethergear .` puis `docker run -p 8080:8080 nethergear`.

**Vercel ou équivalent** :

1. Importer ce dépôt dans la plateforme.
2. Renseigner les variables d'environnement (cf. tableau) pour Production et Preview.
3. Ajouter le domaine `nethergear.com` (+ `www`) puis créer chez le registrar les
   enregistrements DNS indiqués par la plateforme.
4. Une fois le domaine actif, fixer `NEXT_PUBLIC_SITE_URL=https://nethergear.com`.
   Le HTTPS est émis automatiquement par la plateforme.

## Structure

```
src/
├── proxy.ts                     # redirection de langue (/ → /fr ou /en)
├── app/
│   ├── [locale]/[[...slug]]/    # toutes les pages (URLs localisées FR/EN)
│   ├── api/checkout/route.ts    # endpoint checkout (actuellement désactivé)
│   ├── api/contact/route.ts     # formulaire de contact (Nodemailer)
│   ├── sitemap.ts / robots.ts / icon.svg
├── components/
│   ├── Header / Footer / Logo / LocaleSwitcher / icons
│   └── pages/                   # composants de pages + registre de routage
└── lib/
    ├── i18n/                    # config, routes localisées, dictionnaires fr/en
    ├── packages.ts              # catalogue (5 offres, montants publics)
    ├── site.ts                  # identité publique (nom, email, domaine)
    ├── smtp.ts                  # client serveur SMTP
    └── format.ts                # formatage des prix en euros
```

## Pages

Accueil · Disciplines (audit, formation, certification, accompagnement) ·
Catalogue de 5 offres · Commande par email · Contact (formulaire + coordonnées) ·
À propos · Mentions légales & CGV · Politique de confidentialité ·
Politique de remboursement (14 jours).

## Catalogue

| Offre | Catégorie | Prix |
|---|---|---|
| Pack de modèles administratifs | Outils & modèles | 29 € |
| Diagnostic express SWOT | Outils & modèles | 49 € |
| Atelier de planification stratégique | Formations | 99 € |
| Certification Méthode OKR | Certifications | 95 € |
| Audit de conformité des données | Conseil & accompagnement | 109 € |

Les prix se modifient dans `src/lib/packages.ts` (montants en centimes) ; les noms et
descriptions dans `src/lib/i18n/fr.ts` et `src/lib/i18n/en.ts`.

## Conformité — récapitulatif

- ✅ Tarifs publics affichés (page Tarifs, prix en euros)
- ✅ Description claire de l'activité (page Disciplines + Mentions légales)
- ✅ CGV, politique de confidentialité et politique de remboursement en pages dédiées
- ✅ HTTPS et domaine propre côté hébergeur

## À compléter plus tard

- **Email du formulaire** : configurer `CONTACT_TO=contact@nethegear.com` avec les
  variables SMTP de votre hébergeur.
- **Numéro WhatsApp** : à renseigner dans `src/lib/site.ts` (`whatsappNumber`)
  pour afficher le bouton flottant.
- **Mentions légales** : ajouter les références d'immatriculation et l'adresse de
  l'éditeur dans `src/lib/i18n/fr.ts` / `en.ts` si elles doivent figurer en ligne.
- **Processeur de paiement** : une fois choisi, mettre à jour
  `src/app/api/checkout/route.ts` et réintégrer les variables d'environnement.
