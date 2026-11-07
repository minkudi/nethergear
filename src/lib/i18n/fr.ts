// Dictionnaire français — fichier de référence : la structure de ce fichier
// définit le type Dictionary que en.ts doit respecter à l'identique.

// Blocs des pages légales : paragraphe ou liste à puces.
export type LegalBlock = { type: "p"; text: string } | { type: "ul"; items: string[] };
export type LegalSection = { heading: string; blocks: LegalBlock[] };

export const fr = {
  meta: {
    siteName: "NetherGear",
    tagline: "Conseil, formation & certification pour PME",
    siteDescription:
      "NetherGear équipe les PME qui veulent avancer : audits, ateliers de planification, certifications et modèles prêts à l'emploi, à prix affichés. Commande par email, remboursement sous 14 jours.",
  },

  nav: {
    home: "Accueil",
    services: "Disciplines",
    pricing: "Tarifs",
    payment: "Commander",
    about: "À propos",
    contact: "Contact",
    cta: "Nous écrire",
    menu: "Menu",
    close: "Fermer",
  },

  localeSwitcher: { label: "Changer de langue" },

  footer: {
    tagline:
      "Conseil, formation et certification : des outils concrets, des décisions documentées et des équipes qui montent en compétence.",
    servicesTitle: "Nos disciplines",
    navTitle: "Navigation",
    legalTitle: "Informations légales",
    contactTitle: "Contact",
    addressLabel: "Adresse",
    paymentsNote: "Commandes par email.",
    // Ligne légale optionnelle en footer (vide = non affichée).
    legalLine: "",
    rights: "Tous droits réservés.",
  },

  cart: {
    menuLabel: "Panier",
    title: "Votre panier",
    empty: "Votre panier est vide. Ajoutez une offre pour commencer.",
    add: "Ajouter au panier",
    added: "Ajouté au panier",
    quantity: "Quantité",
    decrease: "Réduire la quantité",
    increase: "Augmenter la quantité",
    remove: "Retirer du panier",
    clear: "Vider le panier",
    total: "Total",
    checkout: "Commander par email",
    checkingOut: "Ouverture de votre messagerie…",
    orderSubject: "Commande — NetherGear",
    orderGreeting: "Bonjour,",
    orderIntro: "Je souhaite commander les offres suivantes :",
    orderTotalLabel: "Total de la commande",
    orderOutro:
      "Merci de me confirmer la disponibilité ainsi que les modalités de paiement.",
  },

  whatsapp: {
    label: "Discuter sur WhatsApp",
    message: "Bonjour NetherGear ! Je souhaite discuter d'un projet.",
  },

  notFound: {
    title: "Page introuvable",
    text: "Cette page n'existe pas ou a été déplacée.",
    back: "Retour à l'accueil",
  },

  // ——— Catalogue (partagé : accueil, tarifs, paiement) ———
  packages: {
    // Outils & modèles
    "pack-modeles-administratifs": {
      name: "Pack de modèles administratifs",
      tagline: "Factures, devis, relances et suivi client : cinq modèles prêts à remplir.",
    },
    "diagnostic-swot": {
      name: "Diagnostic express SWOT",
      tagline: "Une grille d'analyse guidée pour situer votre activité en une heure.",
    },

    // Formations
    "atelier-planification": {
      name: "Atelier de planification stratégique",
      tagline: "Deux heures en visio pour transformer vos objectifs en plan daté.",
    },

    // Certifications
    "certification-okr": {
      name: "Certification Méthode OKR",
      tagline: "Un parcours structuré et un examen final pour maîtriser les OKR.",
    },

    // Conseil & accompagnement
    "audit-conformite-donnees": {
      name: "Audit de conformité des données",
      tagline: "Un état des lieux de vos traitements, avec un plan d'action priorisé.",
    },
  },

  home: {
    meta: {
      title: "NetherGear — Conseil, formation & certification",
      description:
        "Audits, ateliers, certifications et modèles prêts à l'emploi pour les PME. Prix affichés, périmètre écrit, commande par email.",
    },
    hero: {
      eyebrow: "Conseil · Formation · Certification",
      titleA: "L'équipement",
      titleAccent: "des entreprises",
      titleB: "qui avancent.",
      subtitle:
        "NetherGear conçoit les outils, les formations et les accompagnements qui font passer une PME de l'intuition au plan exécutable : audits ciblés, ateliers de planification, certifications et modèles réutilisables. Des prix affichés, un périmètre écrit, aucune zone d'ombre.",
      ctaPrimary: "Découvrir le catalogue",
      ctaSecondary: "Nous contacter",
      badges: ["Commande par email", "Remboursement sous 14 jours"],
    },
    chipsTitle: "Ce que nous couvrons",
    chips: [
      "Audit & diagnostic",
      "Planification stratégique",
      "Méthode OKR",
      "Conformité des données",
      "Ateliers d'équipe",
      "Certification",
      "Modèles & trames",
      "Pilotage de projet",
    ],
    services: {
      eyebrow: "Nos disciplines",
      title: "Quatre disciplines, un seul interlocuteur.",
      subtitle:
        "De la première analyse au passage de certification, nous couvrons l'ensemble du parcours : comprendre, structurer, former puis accompagner.",
      cta: "Voir le détail des disciplines",
    },
    why: {
      eyebrow: "Pourquoi NetherGear",
      title: "Un cabinet direct, sans couches.",
      items: [
        {
          title: "Prix publics et fermes",
          desc: "Chaque offre est affichée avec son tarif : vous savez ce que vous payez avant même de nous écrire.",
        },
        {
          title: "Livrables écrits",
          desc: "Grilles, rapports, trames : tout ce que nous produisons est documenté et réutilisable par votre équipe.",
        },
        {
          title: "Un seul interlocuteur",
          desc: "De la première prise de contact au suivi, vous parlez directement à la personne qui réalise la mission.",
        },
        {
          title: "Engagement 14 jours",
          desc: "Chaque offre est couverte par notre politique de remboursement intégral de 14 jours.",
        },
      ],
    },
    process: {
      eyebrow: "Méthode",
      title: "Comment nous travaillons",
      steps: [
        {
          title: "Cadrage",
          desc: "Vous nous écrivez, nous échangeons sur votre contexte et nous vérifions que l'offre correspond.",
        },
        {
          title: "Commande",
          desc: "Vous choisissez vos offres : prix affichés, livrables listés, aucune mauvaise surprise.",
        },
        {
          title: "Réalisation",
          desc: "Audit, atelier ou formation : nous avançons avec des points d'étape et des documents partagés.",
        },
        {
          title: "Transmission & suivi",
          desc: "Remise des livrables, prise en main par votre équipe et réponses à vos questions après la mission.",
        },
      ],
    },
    pricingTeaser: {
      eyebrow: "Catalogue",
      title: "Des prix affichés, pas de devis flottant.",
      subtitle:
        "Outils prêts à l'emploi, atelier, certification et audit : cinq offres, de 29 € à 109 €, avec le contenu exact de chaque livrable.",
      cta: "Voir tout le catalogue",
    },
    cta: {
      title: "Un besoin précis en tête ?",
      text: "Décrivez-nous votre situation : nous vous indiquons l'offre adaptée, ou nous vous le disons franchement si ce n'est pas de notre ressort.",
      button: "Nous écrire",
    },
  },

  services: {
    meta: {
      title: "Disciplines — Audit, formation, certification, accompagnement",
      description:
        "Les quatre disciplines de NetherGear : audit et diagnostic, formation et ateliers, certification et évaluation, conseil et accompagnement.",
    },
    hero: {
      eyebrow: "Nos disciplines",
      title: "Ce que nous faisons, concrètement.",
      subtitle:
        "Quatre manières d'intervenir, du premier état des lieux jusqu'à l'accompagnement dans la durée.",
    },
    items: {
      audit: {
        title: "Audit & diagnostic",
        tagline: "Voir clair avant d'agir.",
        description:
          "Avant de changer quoi que ce soit, il faut savoir où l'on se trouve. Nous examinons vos processus, votre organisation et vos obligations, puis nous en tirons un constat écrit : ce qui fonctionne, ce qui coûte du temps, ce qui expose votre entreprise. Le rapport se termine toujours par des actions classées par effort et par impact.",
        bullets: [
          "Entretiens courts avec les personnes concernées",
          "Grille d'analyse adaptée à votre taille d'entreprise",
          "Constat écrit, sans jargon et sans complaisance",
          "Plan d'action priorisé par effort et par impact",
          "Restitution en visio et réponses aux questions",
        ],
        packageRef: "Voir le catalogue et les tarifs",
      },
      formation: {
        title: "Formation & ateliers",
        tagline: "Monter en compétence sans quitter le bureau.",
        description:
          "Une méthode ne sert à rien si personne ne sait l'appliquer. Nos ateliers sont courts, concrets et limités en nombre de participants : on y travaille sur vos propres dossiers, pas sur des exemples génériques. Vous repartez avec un support écrit et une trame réutilisable dès la semaine suivante.",
        bullets: [
          "Sessions en visio, en petit comité",
          "Exercices construits sur vos dossiers réels",
          "Support écrit et trames réutilisables",
          "Enregistrement ou compte rendu sur demande",
          "Séance de questions ouvertes après l'atelier",
        ],
        packageRef: "Voir le catalogue et les tarifs",
      },
      certification: {
        title: "Certification & évaluation",
        tagline: "Une compétence prouvée, pas déclarée.",
        description:
          "Nos parcours de certification combinent lecture guidée, exercices notés et examen final. L'objectif n'est pas de collectionner un badge, mais de vérifier qu'une méthode est réellement maîtrisée — par vous ou par un membre de votre équipe. Le résultat donne lieu à une attestation nominative et à un retour détaillé sur les points à consolider.",
        bullets: [
          "Programme de lecture et d'exercices structuré",
          "Examens corrigés avec retour personnalisé",
          "Attestation nominative à l'issue du parcours",
          "Accès aux mises à jour du support",
          "Possibilité de repasser l'évaluation une fois",
        ],
        packageRef: "Voir le catalogue et les tarifs",
      },
      accompagnement: {
        title: "Conseil & accompagnement",
        tagline: "Un binôme qui reste jusqu'au résultat.",
        description:
          "Certaines décisions ne se prennent pas en une réunion. Nous intervenons alors en accompagnement : structuration des priorités, arbitrage des moyens, suivi des actions décidées. Nous ne produisons pas de rapport de plus — nous restons à vos côtés jusqu'à ce que les décisions soient appliquées et mesurables.",
        bullets: [
          "Cadrage des objectifs et des contraintes réelles",
          "Priorisation des chantiers sur un horizon défini",
          "Points de suivi réguliers et documents partagés",
          "Aide à la décision, sans conflit d'intérêts",
          "Bilan de fin de mission et recommandations",
        ],
        packageRef: "Voir le catalogue et les tarifs",
      },
    },
    cta: { text: "Un besoin qui ne rentre dans aucune case ?", button: "Discutons-en" },
  },

  pricing: {
    meta: {
      title: "Tarifs — Cinq offres, prix affichés",
      description:
        "Le catalogue NetherGear : modèles administratifs et diagnostic dès 29 €, atelier de planification, certification OKR et audit de conformité jusqu'à 109 €. Prix affichés en euros.",
    },
    hero: {
      eyebrow: "Tarifs",
      title: "Un catalogue court, des prix affichés.",
      subtitle:
        "Pas de devis opaque ni d'heures facturées à l'aveugle : chaque offre a un prix public et un contenu écrit. Vous commandez par email, nous confirmons et nous démarrons.",
    },
    included: "Ce qui est inclus",
    choose: "Commander",
    fromPrice: "dès",
    categories: {
      guides: {
        name: "Outils & modèles",
        tagline: "Des trames prêtes à remplir, utilisables dès cette semaine.",
      },
      formations: {
        name: "Formations",
        tagline: "Des ateliers courts, animés en visio sur vos propres dossiers.",
      },
      certifications: {
        name: "Certifications",
        tagline: "Des parcours évalués, avec attestation nominative à la clé.",
      },
      conseil: {
        name: "Conseil & accompagnement",
        tagline: "Des missions sur mesure, du diagnostic au suivi des actions.",
      },
    },
    guarantee: {
      title: "Satisfait ou remboursé — 14 jours",
      text: "Chaque paiement est couvert par notre politique de remboursement : une demande par simple email dans les 14 jours suffit, le remboursement est intégral et traité sur votre moyen de paiement d'origine.",
      link: "Lire la politique de remboursement",
    },
    paymentNote:
      "Tous les prix sont affichés en euros (EUR, €). Aucun abonnement, aucun frais caché.",
    cta: { text: "Vous hésitez entre deux offres ?", button: "Demandez-nous" },
  },

  payment: {
    meta: {
      title: "Commander — Outils, formations, certifications et conseil",
      description:
        "Constituez votre panier et envoyez votre commande par email. Prix en euros (EUR) ; modalités de paiement communiquées après confirmation.",
    },
    hero: {
      eyebrow: "Commander",
      title: "Trois étapes, aucune surprise.",
      subtitle:
        "Ajoutez vos offres au panier puis envoyez votre commande par email : nous confirmons la disponibilité et les modalités de paiement, puis nous démarrons.",
    },
    steps: [
      "Choisissez vos offres",
      "Envoyez votre commande par email",
      "Nous confirmons et démarrons",
    ],
    emailNote:
      "Votre commande s'ouvre dans votre messagerie : envoyez l'email pour nous la transmettre, nous répondons avec les modalités de paiement.",
    securityNote:
      "N'envoyez aucune donnée bancaire par email. Les modalités de paiement vous seront communiquées après confirmation.",
    vatNote: "Prix nets en euros (EUR).",
  },

  contact: {
    meta: {
      title: "Contact — Parlons de votre situation",
      description:
        "Contactez NetherGear : formulaire de contact et email contact@nethegear.com. Nous répondons à toutes les demandes de renseignement.",
    },
    hero: {
      eyebrow: "Contact",
      title: "Parlons de votre situation.",
      subtitle:
        "Décrivez votre contexte en quelques lignes : ce que vous faites, ce que vous voulez obtenir et votre échéance. Nous revenons vers vous avec une réponse claire.",
    },
    form: {
      name: "Votre nom",
      namePlaceholder: "Marie Dupont",
      email: "Votre email",
      emailPlaceholder: "marie@entreprise.com",
      message: "Votre message",
      messagePlaceholder: "Je souhaite structurer la planification de mon équipe pour…",
      submit: "Envoyer le message",
      sending: "Envoi en cours…",
      success: "Message envoyé ! Nous vous répondrons à l'adresse indiquée.",
      error: "L'envoi a échoué. Réessayez dans un instant ou écrivez-nous directement par email.",
      required: "Champ obligatoire",
      invalidEmail: "Adresse email invalide",
      messageMin: "Message trop court (10 caractères minimum)",
      honeypot: "Ne pas remplir ce champ",
    },
    info: {
      title: "Coordonnées",
      emailLabel: "Email",
      addressLabel: "Adresse",
      legalLabel: "Éditeur",
      legalValue: "NetherGear",
      note: "Nous répondons à tous les messages.",
    },
  },

  about: {
    meta: {
      title: "À propos — NetherGear",
      description:
        "NetherGear accompagne les PME sur quatre disciplines : audit et diagnostic, formation, certification et conseil.",
    },
    hero: {
      eyebrow: "À propos",
      title: "Le cabinet qui livre.",
      subtitle:
        "NetherGear réunit des outils, des formations et des missions de conseil au même endroit : de quoi équiper une entreprise qui doit décider vite, avec des documents solides.",
    },
    mission: {
      eyebrow: "Notre mission",
      title: "Rendre la décision documentée accessible aux PME.",
      text: "Les petites structures n'ont pas toujours les moyens de s'offrir un service de conseil permanent. Notre rôle : leur donner accès aux mêmes méthodes et à la même rigueur que les grandes — avec des prix fixes affichés et une relation directe, sans couches d'intermédiaires.",
    },
    axes: {
      eyebrow: "Nos axes de travail",
      title: "Quatre disciplines, une même exigence.",
      items: [
        {
          title: "Comprendre",
          desc: "Un état des lieux écrit, sans complaisance, avant toute décision.",
        },
        {
          title: "Structurer",
          desc: "Des priorités classées, un calendrier tenable et des responsabilités claires.",
        },
        {
          title: "Transmettre",
          desc: "Des ateliers courts et des supports que votre équipe peut réutiliser seule.",
        },
        {
          title: "Accompagner",
          desc: "Un suivi jusqu'à ce que les décisions soient appliquées et mesurables.",
        },
      ],
    },
    principles: {
      eyebrow: "Nos principes",
      title: "Ce à quoi vous pouvez vous attendre.",
      items: [
        { title: "Transparence", desc: "Prix publics, périmètre écrit, pas de frais surprise en cours de route." },
        { title: "Rigueur", desc: "Des livrables relus et documentés, pas des slides de circonstance." },
        { title: "Proximité", desc: "Une communication directe avec la personne qui réalise réellement la mission." },
        { title: "Responsabilité", desc: "Un engagement simple : 14 jours pour changer d'avis, remboursé intégralement." },
      ],
    },
    identity: {
      eyebrow: "L'entreprise",
      title: "NetherGear en bref",
      items: [
        { label: "Dénomination", value: "NetherGear" },
        { label: "Contact", value: "contact@nethegear.com" },
        { label: "Activité", value: "Conseil, formation et certification" },
        { label: "Commande", value: "Par email" },
      ],
    },
    cta: { title: "Travaillons ensemble.", button: "Nous contacter" },
  },

  legal: {
    meta: {
      title: "Mentions légales & Conditions générales de vente",
      description:
        "Mentions légales et conditions générales de vente de NetherGear : éditeur, hébergement, commandes, prix, paiement et remboursement.",
    },
    pageTitle: "Mentions légales & CGV",
    updated: "Dernière mise à jour : 7 novembre 2026",
    sections: [
      {
        heading: "Éditeur du site",
        blocks: [
          {
            type: "p" as const,
            text: "Le présent site est édité par NetherGear. Contact : contact@nethegear.com.",
          },
          {
            type: "p" as const,
            text: "Directeur de la publication : NetherGear. Les coordonnées postales et les références d'immatriculation sont communiquées sur demande écrite à contact@nethegear.com.",
          },
        ],
      },
      {
        heading: "Activité",
        blocks: [
          {
            type: "p" as const,
            text: "NetherGear exerce une activité de conseil, de formation et de certification à destination des entreprises. Elle couvre l'audit et le diagnostic d'organisation, la conception et l'animation d'ateliers de formation, les parcours de certification professionnelle, ainsi que les missions de conseil et d'accompagnement.",
          },
        ],
      },
      {
        heading: "Hébergement",
        blocks: [
          {
            type: "p" as const,
            text: "Le site est hébergé par un prestataire d'hébergement web professionnel. Les communications avec le site sont chiffrées (HTTPS).",
          },
        ],
      },
      {
        heading: "Commandes et prix (conditions générales de vente)",
        blocks: [
          {
            type: "p" as const,
            text: "Les offres sont commercialisées à prix fixes, affichés en euros (EUR, €) sur la page « Tarifs » du présent site. Le catalogue couvre quatre familles : outils et modèles (dès 29 €), formations (99 €), certifications (95 €) et conseil et accompagnement (dès 109 €). Tous les prix sont nets, en euros ; le montant final à payer est confirmé avant le paiement.",
          },
          {
            type: "p" as const,
            text: "La commande s'effectue depuis la page « Commander » : vous constituez votre panier puis transmettez votre commande par email. Le paiement est organisé de manière sécurisée après confirmation écrite de la commande ; NetherGear n'a pas accès à vos données bancaires. Le paiement intégral vaut acceptation des présentes conditions générales de vente et déclenche le démarrage de la prestation commandée.",
          },
          {
            type: "p" as const,
            text: "Le contenu détaillé de chaque offre est précisé sur la page « Tarifs ». Tout besoin hors périmètre fait l'objet d'un échange préalable et d'un accord écrit entre les parties.",
          },
        ],
      },
      {
        heading: "Exécution des prestations",
        blocks: [
          {
            type: "p" as const,
            text: "Les prestations sont exécutées à distance et livrées sous forme numérique (documents d'audit, supports de formation, trames, attestations, rapports). Elles démarrent après validation et paiement intégral de la commande. Un calendrier indicatif et le détail des livrables sont confirmés par écrit (email) avant le démarrage ; les livrables sont remis par voie électronique au fur et à mesure de l'avancement.",
          },
        ],
      },
      {
        heading: "Paiement, sécurité et reçus",
        blocks: [
          {
            type: "p" as const,
            text: "La commande est transmise par email. Les modalités de paiement sont communiquées après confirmation de la commande. Aucune donnée bancaire ne doit être envoyée par email.",
          },
        ],
      },
      {
        heading: "Annulation d'une commande",
        blocks: [
          {
            type: "p" as const,
            text: "Vous pouvez annuler une commande et obtenir un remboursement intégral dans les conditions de la politique de remboursement (14 jours). Passé ce délai, une demande d'annulation est étudiée au cas par cas, en fonction de l'avancement de la prestation ; le cas échéant, seules les étapes déjà réalisées et convenues par écrit peuvent rester acquises.",
          },
        ],
      },
      {
        heading: "Restrictions et éligibilité",
        blocks: [
          {
            type: "p" as const,
            text: "Les prestations proposées (conseil, formation, certification, audit) ne relèvent d'aucune catégorie de produits ou services restreinte ou interdite. Elles sont fournies à distance, sans restriction géographique particulière ; il appartient au client de vérifier les éventuelles restrictions légales applicables à sa propre activité.",
          },
        ],
      },
      {
        heading: "Droit de rétractation et remboursement",
        blocks: [
          {
            type: "p" as const,
            text: "Tout paiement peut être intégralement remboursé sur simple demande formulée par email dans un délai de 14 jours suivant la date du paiement. Les modalités pratiques sont décrites sur la page « Politique de remboursement ».",
          },
        ],
      },
      {
        heading: "Propriété intellectuelle",
        blocks: [
          {
            type: "p" as const,
            text: "L'ensemble des contenus du présent site (textes, éléments graphiques, logo, structure) est la propriété de NetherGear et ne peut être reproduit sans autorisation écrite.",
          },
          {
            type: "p" as const,
            text: "Les livrables remis dans le cadre d'une commande (documents, supports, trames, attestations) sont cédés au client pour l'exploitation de son activité, à réception du paiement intégral.",
          },
        ],
      },
      {
        heading: "Responsabilité",
        blocks: [
          {
            type: "p" as const,
            text: "NetherGear met en œuvre les moyens nécessaires à la bonne exécution des prestations, mais ne saurait être tenue responsable des interruptions ou défaillances de services tiers (hébergeurs, plateformes de visioconférence, outils de messagerie) ni de l'usage fait des livrables par le client après livraison.",
          },
        ],
      },
      {
        heading: "Droit applicable et réclamations",
        blocks: [
          {
            type: "p" as const,
            text: "Les présentes conditions sont régies par le droit applicable au lieu d'établissement de l'éditeur. Toute réclamation doit d'abord être adressée par email à contact@nethegear.com : nous étudions et traitons chaque demande.",
          },
        ],
      },
    ] as LegalSection[],
  },

  privacy: {
    meta: {
      title: "Politique de confidentialité",
      description:
        "Politique de confidentialité de NetherGear : données collectées via le formulaire de contact et les commandes, finalités, conservation et vos droits.",
    },
    pageTitle: "Politique de confidentialité",
    updated: "Dernière mise à jour : 7 novembre 2026",
    sections: [
      {
        heading: "Responsable du traitement",
        blocks: [
          {
            type: "p" as const,
            text: "Les données personnelles collectées sur ce site sont traitées sous la responsabilité de NetherGear — contact@nethegear.com.",
          },
        ],
      },
      {
        heading: "Données collectées",
        blocks: [
          {
            type: "ul" as const,
            items: [
              "Formulaire de contact : votre nom, votre adresse email et le contenu de votre message.",
              "Commande : les informations de commande sont transmises par email. N'envoyez aucune donnée bancaire par email.",
              "Communication par email : l'historique de nos échanges avec vous.",
            ],
          },
        ],
      },
      {
        heading: "Finalités",
        blocks: [
          {
            type: "p" as const,
            text: "Vos données sont utilisées uniquement pour : répondre à vos demandes, exécuter les prestations que vous commandez, assurer la facturation et le suivi client, et remplir nos obligations légales éventuelles.",
          },
          {
            type: "p" as const,
            text: "Vos données ne sont ni vendues, ni louées, ni transmises à des fins publicitaires.",
          },
        ],
      },
      {
        heading: "Cookies et traceurs",
        blocks: [
          {
            type: "p" as const,
            text: "Ce site n'utilise pas de cookies publicitaires ni d'outils statistiques tiers. Seuls les cookies techniques strictement nécessaires au bon fonctionnement du site peuvent être déposés.",
          },
        ],
      },
      {
        heading: "Destinataires et sous-traitants",
        blocks: [
          {
            type: "ul" as const,
            items: [
              "Messagerie : traitement des demandes de contact et de commande par email.",
              "Hébergeur du site : hébergement technique et diffusion des pages.",
            ],
          },
        ],
      },
      {
        heading: "Conservation",
        blocks: [
          {
            type: "p" as const,
            text: "Les demandes de contact sont conservées le temps nécessaire à leur traitement. Les données liées à une commande et à la facturation sont conservées conformément aux obligations comptables applicables.",
          },
        ],
      },
      {
        heading: "Sécurité des données",
        blocks: [
          {
            type: "p" as const,
            text: "Nous appliquons des mesures techniques et organisationnelles raisonnables pour protéger vos données. Le site ne collecte pas de données bancaires. L'accès aux données que nous détenons (emails de contact, confirmations de commande) est limité aux personnes qui en ont besoin pour traiter vos demandes.",
          },
        ],
      },
      {
        heading: "Transferts internationaux",
        blocks: [
          {
            type: "p" as const,
            text: "Les informations relatives aux transferts internationaux dépendent des prestataires utilisés. Pour toute question, contactez-nous par email.",
          },
        ],
      },
      {
        heading: "Vos droits",
        blocks: [
          {
            type: "p" as const,
            text: "Vous disposez de droits d'accès, de rectification, de suppression et de portabilité de vos données personnelles, ainsi que du droit de vous opposer à leur traitement. Pour les exercer, écrivez-nous à contact@nethegear.com : nous traitons chaque demande. Selon votre pays de résidence, vous pouvez également introduire une réclamation auprès de l'autorité de protection des données compétente.",
          },
        ],
      },
    ] as LegalSection[],
  },

  refund: {
    meta: {
      title: "Politique de remboursement — 14 jours",
      description:
        "Politique de remboursement de NetherGear : remboursement intégral sur demande dans les 14 jours suivant le paiement, traité sur votre moyen de paiement d'origine.",
    },
    pageTitle: "Politique de remboursement",
    updated: "Dernière mise à jour : 7 novembre 2026",
    sections: [
      {
        heading: "Délai de remboursement : 14 jours",
        blocks: [
          {
            type: "p" as const,
            text: "Tout paiement effectué sur ce site est couvert par une garantie de 14 jours : vous pouvez obtenir un remboursement intégral sur simple demande formulée dans les 14 jours suivant la date du paiement, sans avoir à justifier votre décision.",
          },
        ],
      },
      {
        heading: "Comment demander un remboursement",
        blocks: [
          {
            type: "p" as const,
            text: "Adressez-nous un email à contact@nethegear.com en précisant :",
          },
          {
            type: "ul" as const,
            items: [
              "votre nom et l'adresse email utilisée lors du paiement ;",
              "l'offre concernée et la date du paiement ;",
              "si vous le souhaitez, la raison de votre demande — elle nous aide à nous améliorer.",
            ],
          },
          {
            type: "p" as const,
            text: "Nous confirmons la réception de votre demande et son traitement.",
          },
        ],
      },
      {
        heading: "Modalités de remboursement",
        blocks: [
          {
            type: "p" as const,
            text: "Le remboursement est effectué sur le moyen de paiement utilisé lors de l'achat. Selon votre banque, le montant apparaît sur votre compte sous quelques jours ouvrés après le traitement de la demande.",
          },
        ],
      },
      {
        heading: "Passé le délai de 14 jours",
        blocks: [
          {
            type: "p" as const,
            text: "Au-delà du délai de 14 jours, écrivez-nous néanmoins : nous étudions chaque situation avec vous et cherchons la solution la plus adaptée (avancement de la mission, ajustement du périmètre, geste commercial).",
          },
        ],
      },
    ] as LegalSection[],
  },
};

export type Dictionary = typeof fr;
