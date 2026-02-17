export const HOMEPAGE_STRATEGY = {
  philosophy: "The Homepage is the Opening Statement. It must establish competence immediately.",
  
  sections: [
    {
      order: 1,
      type: "HERO",
      id: "verdict-hero",
      reasoning: "Primacy Effect. Immediate claim of specialized authority. No 'Welcome to...' fluff. State exactly what you solve.",
      content: {
        headline: "Appellate & Complex Civil Litigation",
        subhead: "When the trial goes wrong, the record speaks. We handle the appeal.",
        cta: "Review Your Case"
      }
    },
    {
      order: 2,
      type: "TRUST_SIGNALS",
      id: "court-bar",
      reasoning: "Validation. Before we ask for anything, we prove we belong in the room. Subtle monochrome logos of Federal/State courts.",
      content: {
        logos: ["10th Circuit", "CO Supreme Court", "US Supreme Court Bar"]
      }
    },
    {
      order: 3,
      type: "AUTHORITY_STATEMENT",
      id: "firm-philosophy",
      reasoning: " DIFFERENTIATION. Why us? Not 'We care,' but 'We are rigorous.' Defines the 'Document-Driven' approach.",
      content: {
        headline: "A Practice Built on the Record.",
        points: [
          "Appellate Focus: We write for judges, not juries.",
          "Flat Fee Transparency: Predictable costs for complex work.",
          "Civil Precision: Real estate and contract disputes resolved by document analysis."
        ]
      }
    },
    {
      order: 4,
      type: "PRACTICE_AREA_GRID",
      id: "practice-navigation",
      reasoning: "Navigation & Segmentation. 'Do they handle MY problem?' Users scan for keywords here.",
      content: {
        items: [
          "Appellate Representation",
          "Promissory Note Enforcement",
          "Breach of Contract",
          "Real Estate Disputes"
        ]
      }
    },
    {
      order: 5,
      type: "ATTORNEY_PROFILE",
      id: "lead-attorney",
      reasoning: "Human Connection. High-net-worth clients hire specific humans, not firms. Show the person responsible.",
      content: {
        name: "Jerold A. Alderman",
        role: "Principal Attorney",
        hook: "300+ Briefs Filed. Former Law Clerk."
      }
    },
    {
      order: 6,
      type: "FAQ_ACCORDION",
      id: "process-objections",
      reasoning: "Objection Handling. Address 'How much?' and 'How long?' before they have to ask.",
      content: {
        questions: ["How do flat fees work?", "What is the deadline to appeal?", "Do you handle trial work?"]
      }
    },
    {
      order: 7,
      type: "CONTACT_INTAKE",
      id: "footer-cta",
      reasoning: "The Ask. After value is proven, offer the path forward. Secure, professional, direct.",
      content: {
        headline: "Discuss Your Appeal",
        subtext: "Confidential review of your judgment or dispute."
      }
    }
  ]
};

export const TRUST_SIGNALS_STRATEGY = {
  visual: {
    rule: "Restraint = Confidence.",
    elements: [
      "Serif Typography (Tradition)",
      "Dark Mode / High Contrast (Seriousness)",
      "Symmetry (Stability)",
      "No stock photos of gavels (Authenticity)"
    ]
  },
  content: {
    rule: "Specifics = Truth.",
    elements: [
      "Exact numbers ('300+ Briefs' not 'Many appeals')",
      "Specific Courts ('10th Circuit' not 'Federal Courts')",
      "Academic Tone (Citations, footnotes in articles)"
    ]
  },
  layout: {
    rule: "Whitespace = Luxury.",
    elements: [
      "Wide margins",
      "Bounded text width (65ch)",
      "No clutter or 'pop-ups'"
    ]
  },
  microcopy: {
    rule: "Directness = Respect.",
    avoid: ["We fight for you", "Passionate advocacy", "Free consultation (unless specific)"],
    prefer: ["Review your case", "Preserve your appeal", "Enforce the judgment"]
  }
};
