import { ComponentType } from "react";

// ----------------------------------------------------------------------------
// Type Definitions: Section / Component Taxonomy
// Goal: Premium, Authoritative, Restrained
// ----------------------------------------------------------------------------

export type SectionType = 
  | "HERO"
  | "AUTHORITY_STATEMENT"
  | "PRACTICE_AREA_GRID"
  | "ATTORNEY_PROFILE"
  | "CONTENT_ARTICLE"
  | "FAQ_ACCORDION"
  | "CONTACT_INTAKE"
  | "TRUST_SIGNALS";

export interface SectionSchema {
  type: SectionType;
  id: string;
  props: Record<string, any>;
  content: {
    heading?: string;
    subheading?: string;
    body?: string;
    items?: any[];
    cta?: { label: string; href: string; type: "primary" | "secondary" };
  };
  config: {
    background: "paper" | "white" | "navy" | "charcoal";
    padding: "standard" | "large" | "compact";
    container: "prose" | "wide" | "split";
  };
}

// ----------------------------------------------------------------------------
// Component Taxonomy Definitions
// ----------------------------------------------------------------------------

export const TAXONOMY_DEFINITIONS = {
  HERO: {
    purpose: "The Opening Statement. Establish the premise of the engagement immediately.",
    psychology: "Primacy Effect. If the first screen is cluttered, the lawyer is cluttered. If it is clear, the lawyer is clear.",
    structure: {
      headline: "The Verdict (H1)",
      subhead: "The Evidence (Body Lg)",
      visual: "Texture or Abstract Architecture (No literal gavels)",
      interaction: "Static. No sliders."
    }
  },

  AUTHORITY_STATEMENT: {
    purpose: "Define the firm's philosophy and 'Why Us' without using generic marketing copy.",
    psychology: "Social Proof + Competence. Demonstrates deep thinking, not just service listing.",
    structure: {
      headline: "The Philosophy (H2)",
      columns: "2-3 column grid of core tenets (e.g., 'Appellate Focus', 'Flat Fees')",
      style: "High whitespace, icon-supported (outline style)."
    }
  },

  PRACTICE_AREA_GRID: {
    purpose: "Direct the user to their specific problem. Navigation, not selling.",
    psychology: "Categorization. Helps the anxious user find 'their' box quickly.",
    structure: {
      layout: "Grid of Cards",
      card: {
        eyebrow: "Category (H4)",
        title: "Practice Area (H3)",
        summary: "1-sentence scope definition",
        action: "Text link 'View Details'"
      }
    }
  },

  ATTORNEY_PROFILE: {
    purpose: "Humanize the authority. Show the person behind the brief.",
    psychology: "Trust Transfer. Clients hire people, not logos. The photo must be direct eye contact.",
    structure: {
      image: "Portrait (Black & White / Desaturated)",
      bio: "Narrative flow, not just a resume list.",
      credentials: "Sidebar list of admissions, clerkships, education."
    }
  },

  CONTENT_ARTICLE: {
    purpose: "Demonstrate subject matter expertise through long-form writing.",
    psychology: "Authority by Association. If you write the book on it, you must know it.",
    structure: {
      meta: "Date, Reading Time, Area of Law",
      body: "Prose-width container (65ch). Pull quotes for scanability.",
      footnotes: "Academic citations (signals rigor)."
    }
  },

  FAQ_ACCORDION: {
    purpose: "Pre-empt objections and reduce anxiety about the process.",
    psychology: "Cognitive Ease. Breaking complex info into bite-sized toggles reduces overwhelm.",
    structure: {
      item: "Question (H3 style) -> Answer (Body)",
      behavior: "One open at a time (Accordion)."
    }
  },

  CONTACT_INTAKE: {
    purpose: "Conversion. The specific call to action.",
    psychology: "The Closing Argument. Use 'Review Your Case' instead of 'Submit'.",
    structure: {
      layout: "Split: Contact Details (Left) / Form (Right)",
      tone: "Secure, confidential, direct."
    }
  },

  TRUST_SIGNALS: {
    purpose: "Validation via third parties.",
    psychology: "Bandwagon Effect. 'Others trust them, so I can too.'",
    structure: {
      type: "Bar of logos (Bar Associations, Court Admissions) or Quote Slider",
      style: "Monochrome opacity (don't let colorful logos break the palette)."
    }
  }
};
