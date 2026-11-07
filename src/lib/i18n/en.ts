// English dictionary — must mirror the structure of fr.ts exactly
// (the Dictionary type is derived from the French reference file).

import type { LegalSection } from "./fr";

export const en = {
  meta: {
    siteName: "NetherGear",
    tagline: "Consulting, training & certification for SMEs",
    siteDescription:
      "NetherGear equips SMEs that want to move forward: audits, planning workshops, certifications and ready-to-use templates, at published prices. Orders by email, refunds within 14 days.",
  },

  nav: {
    home: "Home",
    services: "Disciplines",
    pricing: "Pricing",
    payment: "Order",
    about: "About",
    contact: "Contact",
    cta: "Get in touch",
    menu: "Menu",
    close: "Close",
  },

  localeSwitcher: { label: "Change language" },

  footer: {
    tagline:
      "Consulting, training and certification: practical tools, documented decisions and teams that genuinely level up.",
    servicesTitle: "Our disciplines",
    navTitle: "Navigation",
    legalTitle: "Legal information",
    contactTitle: "Contact",
    addressLabel: "Address",
    paymentsNote: "Orders by email.",
    legalLine: "",
    rights: "All rights reserved.",
  },

  cart: {
    menuLabel: "Cart",
    title: "Your cart",
    empty: "Your cart is empty. Add an offer to get started.",
    add: "Add to cart",
    added: "Added to cart",
    quantity: "Quantity",
    decrease: "Decrease quantity",
    increase: "Increase quantity",
    remove: "Remove from cart",
    clear: "Empty the cart",
    total: "Total",
    checkout: "Order by email",
    checkingOut: "Opening your mail app…",
    orderSubject: "Order — NetherGear",
    orderGreeting: "Hello,",
    orderIntro: "I would like to order the following offers:",
    orderTotalLabel: "Order total",
    orderOutro: "Please confirm availability and payment details.",
  },

  whatsapp: {
    label: "Chat on WhatsApp",
    message: "Hello NetherGear! I would like to discuss a project.",
  },

  notFound: {
    title: "Page not found",
    text: "This page does not exist or has been moved.",
    back: "Back to home",
  },

  // ——— Catalogue (shared: home, pricing, payment) ———
  packages: {
    // Tools & templates
    "pack-modeles-administratifs": {
      name: "Administrative templates pack",
      tagline: "Invoices, quotes, reminders and client tracking: five ready-to-fill templates.",
    },
    "diagnostic-swot": {
      name: "SWOT express diagnosis",
      tagline: "A guided analysis grid to position your business in under an hour.",
    },

    // Training
    "atelier-planification": {
      name: "Strategic planning workshop",
      tagline: "Two hours online to turn your goals into a dated plan.",
    },

    // Certification
    "certification-okr": {
      name: "OKR Method certification",
      tagline: "A structured programme and a final exam to master OKRs.",
    },

    // Consulting & support
    "audit-conformite-donnees": {
      name: "Data compliance audit",
      tagline: "A review of your data processing, with a prioritised action plan.",
    },
  },

  home: {
    meta: {
      title: "NetherGear — Consulting, training & certification",
      description:
        "Audits, workshops, certifications and ready-to-use templates for SMEs. Published prices, written scope, orders by email.",
    },
    hero: {
      eyebrow: "Consulting · Training · Certification",
      titleA: "The gear",
      titleAccent: "that keeps business",
      titleB: "moving forward.",
      subtitle:
        "NetherGear builds the tools, training and support that take an SME from intuition to an executable plan: focused audits, planning workshops, certifications and reusable templates. Published prices, a written scope, no grey areas.",
      ctaPrimary: "Browse the catalogue",
      ctaSecondary: "Contact us",
      badges: ["Orders by email", "14-day refund"],
    },
    chipsTitle: "What we cover",
    chips: [
      "Audit & diagnosis",
      "Strategic planning",
      "OKR method",
      "Data compliance",
      "Team workshops",
      "Certification",
      "Templates & frameworks",
      "Project steering",
    ],
    services: {
      eyebrow: "Our disciplines",
      title: "Four disciplines, one point of contact.",
      subtitle:
        "From the first assessment to certification, we cover the whole path: understand, structure, train and support.",
      cta: "See the disciplines in detail",
    },
    why: {
      eyebrow: "Why NetherGear",
      title: "A direct practice, without layers.",
      items: [
        {
          title: "Public, fixed prices",
          desc: "Every offer is published with its price: you know what you pay before you even write to us.",
        },
        {
          title: "Written deliverables",
          desc: "Grids, reports, frameworks: everything we produce is documented and reusable by your team.",
        },
        {
          title: "One point of contact",
          desc: "From first contact to follow-up, you speak directly to the person doing the work.",
        },
        {
          title: "14-day commitment",
          desc: "Every offer is covered by our full-refund policy within 14 days.",
        },
      ],
    },
    process: {
      eyebrow: "Method",
      title: "How we work",
      steps: [
        {
          title: "Scoping",
          desc: "You write to us, we discuss your context and check that the offer actually fits.",
        },
        {
          title: "Order",
          desc: "You pick your offers: published prices, listed deliverables, no surprises.",
        },
        {
          title: "Delivery",
          desc: "Audit, workshop or training: we move forward with checkpoints and shared documents.",
        },
        {
          title: "Handover & follow-up",
          desc: "Deliverables handed over, your team onboarded, and answers to your questions after the mission.",
        },
      ],
    },
    pricingTeaser: {
      eyebrow: "Catalogue",
      title: "Published prices, no floating quotes.",
      subtitle:
        "Ready-to-use tools, a workshop, a certification and an audit: five offers, from €29 to €109, each with its exact deliverables.",
      cta: "See the full catalogue",
    },
    cta: {
      title: "A specific need in mind?",
      text: "Describe your situation: we point you to the right offer — or tell you plainly if it is not our area.",
      button: "Get in touch",
    },
  },

  services: {
    meta: {
      title: "Disciplines — Audit, training, certification, support",
      description:
        "NetherGear's four disciplines: audit and diagnosis, training and workshops, certification and assessment, consulting and support.",
    },
    hero: {
      eyebrow: "Our disciplines",
      title: "What we actually do.",
      subtitle:
        "Four ways to step in, from the first assessment to long-term support.",
    },
    items: {
      audit: {
        title: "Audit & diagnosis",
        tagline: "See clearly before you act.",
        description:
          "Before changing anything, you need to know where you stand. We review your processes, your organisation and your obligations, then put the findings in writing: what works, what costs time, what exposes the business. The report always ends with actions ranked by effort and impact.",
        bullets: [
          "Short interviews with the people involved",
          "Analysis grid suited to your company size",
          "Written findings, no jargon and no flattery",
          "Action plan prioritised by effort and impact",
          "Online debrief and answers to your questions",
        ],
        packageRef: "See the catalogue and pricing",
      },
      formation: {
        title: "Training & workshops",
        tagline: "Level up without leaving the office.",
        description:
          "A method is useless if nobody can apply it. Our workshops are short, concrete and capped in size: we work on your own files, not generic examples. You leave with a written handout and a framework you can reuse the following week.",
        bullets: [
          "Small-group online sessions",
          "Exercises built on your real files",
          "Written handout and reusable frameworks",
          "Recording or minutes on request",
          "Open Q&A session after the workshop",
        ],
        packageRef: "See the catalogue and pricing",
      },
      certification: {
        title: "Certification & assessment",
        tagline: "A proven skill, not a claimed one.",
        description:
          "Our certification paths combine guided reading, graded exercises and a final exam. The point is not to collect a badge, but to verify that a method is genuinely mastered — by you or by a member of your team. Successful candidates receive a named certificate and detailed feedback on what to consolidate.",
        bullets: [
          "Structured reading and exercise programme",
          "Graded exams with personalised feedback",
          "Named certificate at the end of the path",
          "Access to handout updates",
          "One free resit of the assessment",
        ],
        packageRef: "See the catalogue and pricing",
      },
      accompagnement: {
        title: "Consulting & support",
        tagline: "A partner who stays until results land.",
        description:
          "Some decisions cannot be made in a single meeting. That is when we work alongside you: structuring priorities, arbitrating resources, tracking the actions agreed. We do not produce another report — we stay until decisions are applied and measurable.",
        bullets: [
          "Framing goals and real constraints",
          "Prioritising workstreams over a defined horizon",
          "Regular checkpoints and shared documents",
          "Decision support, with no conflict of interest",
          "End-of-mission review and recommendations",
        ],
        packageRef: "See the catalogue and pricing",
      },
    },
    cta: { text: "A need that fits no box?", button: "Let's talk" },
  },

  pricing: {
    meta: {
      title: "Pricing — Five offers, published rates",
      description:
        "The NetherGear catalogue: administrative templates and diagnosis from €29, a planning workshop, OKR certification and a compliance audit up to €109. Prices shown in euros.",
    },
    hero: {
      eyebrow: "Pricing",
      title: "A short catalogue, published prices.",
      subtitle:
        "No opaque quotes, no blind hourly billing: every offer has a public price and a written scope. You order by email, we confirm, we start.",
    },
    included: "What's included",
    choose: "Order",
    fromPrice: "from",
    categories: {
      guides: {
        name: "Tools & templates",
        tagline: "Ready-to-fill frameworks you can use this week.",
      },
      formations: {
        name: "Training",
        tagline: "Short online workshops run on your own files.",
      },
      certifications: {
        name: "Certifications",
        tagline: "Assessed paths, with a named certificate at the end.",
      },
      conseil: {
        name: "Consulting & support",
        tagline: "Tailored assignments, from diagnosis to tracking actions.",
      },
    },
    guarantee: {
      title: "Money-back guarantee — 14 days",
      text: "Every payment is covered by our refund policy: a simple email request within 14 days is enough; the refund is full and issued to your original payment method.",
      link: "Read the refund policy",
    },
    paymentNote:
      "All prices are shown in euros (EUR, €). No subscription, no hidden fees.",
    cta: { text: "Unsure between two offers?", button: "Ask us" },
  },

  payment: {
    meta: {
      title: "Order — Tools, training, certifications and consulting",
      description:
        "Build your cart and send your order by email. Prices in euros (EUR); payment details sent after confirmation.",
    },
    hero: {
      eyebrow: "Order",
      title: "Three steps, no surprises.",
      subtitle:
        "Add your offers to the cart, then send your order by email: we confirm availability and payment details, then we start.",
    },
    steps: ["Choose your offers", "Send your order by email", "We confirm and start"],
    emailNote:
      "Your order opens in your mail app: send the email to pass it on, and we reply with the payment details.",
    securityNote:
      "Never send banking details by email. Payment details will be sent to you after confirmation.",
    vatNote: "Net prices in euros (EUR).",
  },

  contact: {
    meta: {
      title: "Contact — Let's talk about your situation",
      description:
        "Contact NetherGear: contact form and email contact@nethegear.com. We answer every enquiry.",
    },
    hero: {
      eyebrow: "Contact",
      title: "Let's talk about your situation.",
      subtitle:
        "Describe your context in a few lines: what you do, what you want to achieve and your deadline. We come back to you with a clear answer.",
    },
    form: {
      name: "Your name",
      namePlaceholder: "Jane Doe",
      email: "Your email",
      emailPlaceholder: "jane@company.com",
      message: "Your message",
      messagePlaceholder: "I would like to structure my team's planning for…",
      submit: "Send message",
      sending: "Sending…",
      success: "Message sent! We will reply to the address you provided.",
      error: "Sending failed. Try again in a moment or email us directly.",
      required: "Required field",
      invalidEmail: "Invalid email address",
      messageMin: "Message too short (10 characters minimum)",
      honeypot: "Do not fill in this field",
    },
    info: {
      title: "Contact details",
      emailLabel: "Email",
      addressLabel: "Address",
      legalLabel: "Publisher",
      legalValue: "NetherGear",
      note: "We answer every message.",
    },
  },

  about: {
    meta: {
      title: "About — NetherGear",
      description:
        "NetherGear supports SMEs across four disciplines: audit and diagnosis, training, certification and consulting.",
    },
    hero: {
      eyebrow: "About",
      title: "The practice that delivers.",
      subtitle:
        "NetherGear brings tools, training and consulting assignments together in one place: enough to equip a company that must decide fast, with solid documents.",
    },
    mission: {
      eyebrow: "Our mission",
      title: "Making documented decisions accessible to SMEs.",
      text: "Small companies cannot always afford a permanent consulting function. Our role is to give them access to the same methods and the same rigour as larger firms — with fixed published prices and a direct relationship, without intermediaries.",
    },
    axes: {
      eyebrow: "Our lines of work",
      title: "Four disciplines, one standard.",
      items: [
        {
          title: "Understand",
          desc: "Written findings, without flattery, before any decision.",
        },
        {
          title: "Structure",
          desc: "Ranked priorities, a realistic calendar and clear responsibilities.",
        },
        {
          title: "Transfer",
          desc: "Short workshops and handouts your team can reuse on its own.",
        },
        {
          title: "Support",
          desc: "Follow-up until decisions are applied and measurable.",
        },
      ],
    },
    principles: {
      eyebrow: "Our principles",
      title: "What you can expect.",
      items: [
        { title: "Transparency", desc: "Public prices, written scope, no surprise costs along the way." },
        { title: "Rigour", desc: "Reviewed, documented deliverables — not improvised slides." },
        { title: "Closeness", desc: "Direct communication with the person actually doing the work." },
        { title: "Accountability", desc: "One simple commitment: 14 days to change your mind, fully refunded." },
      ],
    },
    identity: {
      eyebrow: "The business",
      title: "NetherGear at a glance",
      items: [
        { label: "Legal name", value: "NetherGear" },
        { label: "Contact", value: "contact@nethegear.com" },
        { label: "Activity", value: "Consulting, training and certification" },
        { label: "Orders", value: "By email" },
      ],
    },
    cta: { title: "Let's work together.", button: "Contact us" },
  },

  legal: {
    meta: {
      title: "Legal notice & Terms of sale",
      description:
        "Legal notice and terms of sale for NetherGear: publisher, hosting, orders, prices, payment and refunds.",
    },
    pageTitle: "Legal notice & Terms of sale",
    updated: "Last updated: 7 November 2026",
    sections: [
      {
        heading: "Site publisher",
        blocks: [
          {
            type: "p" as const,
            text: "This website is published by NetherGear. Contact: contact@nethegear.com.",
          },
          {
            type: "p" as const,
            text: "Publication director: NetherGear. Postal details and registration references are provided on written request to contact@nethegear.com.",
          },
        ],
      },
      {
        heading: "Activity",
        blocks: [
          {
            type: "p" as const,
            text: "NetherGear provides consulting, training and certification services to businesses. Its activity covers organisational audit and diagnosis, the design and facilitation of training workshops, professional certification programmes, and consulting and support assignments.",
          },
        ],
      },
      {
        heading: "Hosting",
        blocks: [
          {
            type: "p" as const,
            text: "The site is hosted by a professional web hosting provider. Communications with the site are encrypted (HTTPS).",
          },
        ],
      },
      {
        heading: "Orders and prices (terms of sale)",
        blocks: [
          {
            type: "p" as const,
            text: "The offers are sold at fixed prices, displayed in euros (EUR, €) on the “Pricing” page of this site. The catalogue covers four families: tools and templates (from €29), training (€99), certifications (€95) and consulting and support (from €109). All prices are net, in euros; the final amount payable is confirmed before payment.",
          },
          {
            type: "p" as const,
            text: "Orders are placed from the “Order” page: you build your cart and then send your order by email. Payment is arranged securely after written confirmation of the order; NetherGear has no access to your banking details. Full payment constitutes acceptance of these terms of sale and triggers the start of the ordered service.",
          },
          {
            type: "p" as const,
            text: "The detailed content of each offer is specified on the “Pricing” page. Any need outside the scope is subject to a prior discussion and a written agreement between the parties.",
          },
        ],
      },
      {
        heading: "Performance of services",
        blocks: [
          {
            type: "p" as const,
            text: "Services are performed remotely and delivered digitally (audit documents, training materials, frameworks, certificates, reports). They start after validation and full payment of the order. An indicative schedule and the list of deliverables are confirmed in writing (email) before work begins; deliverables are sent electronically as the assignment progresses.",
          },
        ],
      },
      {
        heading: "Payment, security and receipts",
        blocks: [
          {
            type: "p" as const,
            text: "Orders are sent by email. Payment details are provided after the order is confirmed. No banking details should ever be sent by email.",
          },
        ],
      },
      {
        heading: "Cancelling an order",
        blocks: [
          {
            type: "p" as const,
            text: "You may cancel an order and obtain a full refund under the conditions of the refund policy (14 days). After that period, cancellation requests are reviewed case by case, depending on how far the work has progressed; where applicable, only steps already completed and agreed in writing may remain payable.",
          },
        ],
      },
      {
        heading: "Restrictions and eligibility",
        blocks: [
          {
            type: "p" as const,
            text: "The services offered (consulting, training, certification, audit) do not fall under any restricted or prohibited category of goods or services. They are provided remotely, with no particular geographic restriction; clients are responsible for checking any legal restrictions that apply to their own business.",
          },
        ],
      },
      {
        heading: "Right of withdrawal and refunds",
        blocks: [
          {
            type: "p" as const,
            text: "Any payment can be fully refunded on simple request sent by email within 14 days of the payment date. Practical details are described on the “Refund policy” page.",
          },
        ],
      },
      {
        heading: "Intellectual property",
        blocks: [
          {
            type: "p" as const,
            text: "All content on this website (texts, graphic elements, logo, structure) is the property of NetherGear and may not be reproduced without written permission.",
          },
          {
            type: "p" as const,
            text: "Deliverables provided under an order (documents, materials, frameworks, certificates) are assigned to the client for the operation of its business, upon receipt of full payment.",
          },
        ],
      },
      {
        heading: "Liability",
        blocks: [
          {
            type: "p" as const,
            text: "NetherGear implements the means required for the proper performance of its services, but cannot be held liable for interruptions or failures of third-party services (hosting providers, video conferencing platforms, email tools) nor for the use made of the deliverables by the client after delivery.",
          },
        ],
      },
      {
        heading: "Governing law and complaints",
        blocks: [
          {
            type: "p" as const,
            text: "These terms are governed by the law applicable at the publisher's place of establishment. Any complaint must first be sent by email to contact@nethegear.com: we review and handle every request.",
          },
        ],
      },
    ] as LegalSection[],
  },

  privacy: {
    meta: {
      title: "Privacy policy",
      description:
        "NetherGear privacy policy: data collected through the contact form and orders, purposes, retention and your rights.",
    },
    pageTitle: "Privacy policy",
    updated: "Last updated: 7 November 2026",
    sections: [
      {
        heading: "Data controller",
        blocks: [
          {
            type: "p" as const,
            text: "Personal data collected on this site is processed under the responsibility of NetherGear — contact@nethegear.com.",
          },
        ],
      },
      {
        heading: "Data collected",
        blocks: [
          {
            type: "ul" as const,
            items: [
              "Contact form: your name, your email address and the content of your message.",
              "Orders: order information is sent by email. Never send banking details by email.",
              "Email communication: the history of our exchanges with you.",
            ],
          },
        ],
      },
      {
        heading: "Purposes",
        blocks: [
          {
            type: "p" as const,
            text: "Your data is used only to: answer your requests, perform the services you order, handle invoicing and client follow-up, and meet any legal obligations.",
          },
          {
            type: "p" as const,
            text: "Your data is never sold, rented or shared for advertising purposes.",
          },
        ],
      },
      {
        heading: "Cookies and trackers",
        blocks: [
          {
            type: "p" as const,
            text: "This site uses no advertising cookies and no third-party analytics. Only technical cookies strictly necessary for the site to work may be set.",
          },
        ],
      },
      {
        heading: "Recipients and processors",
        blocks: [
          {
            type: "ul" as const,
            items: [
              "Email service: handling contact requests and orders by email.",
              "Hosting provider: technical hosting and page delivery.",
            ],
          },
        ],
      },
      {
        heading: "Retention",
        blocks: [
          {
            type: "p" as const,
            text: "Contact requests are kept for as long as needed to handle them. Order and invoicing data is kept in accordance with applicable accounting obligations.",
          },
        ],
      },
      {
        heading: "Data security",
        blocks: [
          {
            type: "p" as const,
            text: "We apply reasonable technical and organisational measures to protect your data. The site does not collect banking data. Access to the data we hold (contact emails, order confirmations) is limited to the people who need it to handle your requests.",
          },
        ],
      },
      {
        heading: "International transfers",
        blocks: [
          {
            type: "p" as const,
            text: "Information about international transfers depends on the providers used. For any question, contact us by email.",
          },
        ],
      },
      {
        heading: "Your rights",
        blocks: [
          {
            type: "p" as const,
            text: "You have rights of access, rectification, deletion and portability of your personal data, as well as the right to object to its processing. To exercise them, write to contact@nethegear.com: we handle every request. Depending on your country of residence, you may also lodge a complaint with the competent data protection authority.",
          },
        ],
      },
    ] as LegalSection[],
  },

  refund: {
    meta: {
      title: "Refund policy — 14 days",
      description:
        "NetherGear refund policy: full refund on request within 14 days of payment, issued to your original payment method.",
    },
    pageTitle: "Refund policy",
    updated: "Last updated: 7 November 2026",
    sections: [
      {
        heading: "Refund window: 14 days",
        blocks: [
          {
            type: "p" as const,
            text: "Every payment made on this site is covered by a 14-day guarantee: you can obtain a full refund on simple request within 14 days of the payment date, without having to justify your decision.",
          },
        ],
      },
      {
        heading: "How to request a refund",
        blocks: [
          {
            type: "p" as const,
            text: "Send us an email at contact@nethegear.com stating:",
          },
          {
            type: "ul" as const,
            items: [
              "your name and the email address used for the payment;",
              "the offer concerned and the payment date;",
              "if you wish, the reason for your request — it helps us improve.",
            ],
          },
          {
            type: "p" as const,
            text: "We confirm receipt of your request and its processing.",
          },
        ],
      },
      {
        heading: "How refunds are issued",
        blocks: [
          {
            type: "p" as const,
            text: "Refunds are issued to the payment method used for the purchase. Depending on your bank, the amount appears on your account within a few business days after the request is processed.",
          },
        ],
      },
      {
        heading: "After the 14-day window",
        blocks: [
          {
            type: "p" as const,
            text: "Beyond the 14-day window, write to us anyway: we review each situation with you and look for the most suitable solution (progress of the assignment, scope adjustment, goodwill gesture).",
          },
        ],
      },
    ] as LegalSection[],
  },
};
