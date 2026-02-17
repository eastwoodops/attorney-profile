# Typography Strategy: Alderman Law Firm

**Goal:** Drive perceived credibility and trust through typographic authority. Avoid "startup" aesthetics.

## 1. The Philosophy: "The Verdict & The Evidence"

The system mimics the structure of a persuasive legal brief:
*   **The Verdict (Headings):** Authoritative, decisive, high-contrast.
*   **The Evidence (Body):** Clear, legible, utilitarian, invisible.

## 2. Typeface Selection

### Headings: `Playfair Display` (Serif)
*   **Why:** A transitional serif with high contrast between thick and thin strokes. It evokes the mastheads of established journals and the tradition of law without feeling dusty or "Old West."
*   **Tone:** Editorial, Premium, Decisive.
*   **Usage:** Only for H1-H3. Never for body text.

### Body: `Source Sans 3` (Sans-Serif)
*   **Why:** Designed by Adobe for user interfaces and long-form reading. It is a "humanist" sans—it has warmth and calligraphic roots, unlike the mechanical "grotesque" nature of Inter or Helvetica.
*   **Distinction:** It prevents the "Generic SaaS" look (Inter/Roboto) while maintaining perfect legibility.
*   **Tone:** Competent, Modern, Approachable.

## 3. Visual Hierarchy & Scale

We use a **Major Third (1.25)** modular scale to create distinct but harmonious steps.

| Role | Element | Characteristics | Purpose |
| :--- | :--- | :--- | :--- |
| **The Hook** | `H1` | 6xl / Semibold / Tight Tracking | Arresting authority. The primary claim. |
| **The Argument** | `H2` | 4xl / Semibold | Section anchors. Guiding the narrative. |
| **The Point** | `H3` | 2xl / Medium | Specific claims within sections. |
| **The Label** | `H4` | sm / Bold / Uppercase / Wide Tracking | Navigation aids (Eyebrows, Tabs). |
| **The Evidence** | `Body` | base or lg / Regular / Loose Leading | The substance. Optimized for cognitive ease. |

## 4. Spacing & Rhythm (Cognitive Ease)

Legal concepts are complex; reading them shouldn't be.

*   **Line Height:** 1.6 to 1.7 (Loose). Mimics double-spaced legal filings but optimized for screen.
*   **Line Length:** Max 65-75 characters (`max-w-prose`). Prevents eye fatigue.
*   **Vertical Rhythm:** "Expensive" white space. Sections are separated by significant gaps (4rem+), signaling that we are not rushing the viewer.

## 5. Trust Signaling

*   **No Italics in Body:** Avoids looking "messy" or overly emphatic.
*   **Dark Grey, Not Black:** `#1E293B` (Charcoal) instead of `#000000`. reduces eye strain while maintaining high contrast authority.
