# Design System Guardrails: Alderman Law Firm

**Goal:** Prevent entropy. Maintain the "Premium" illusion through rigid consistency.

## 1. The "Expensive Air" Spacing Scale

In premium design, inconsistency is the primary signal of low quality. We use a strict spacing scale.

*   **Micro (4px - 16px):** Component internals (padding inside buttons, gap between icon and text).
*   **Macro (64px - 128px):** Section separation.
    *   **Rule:** Minimum `py-24` (6rem) between distinct sections.
    *   **Rule:** `mb-12` (3rem) between Heading and Content.

**Why:** Luxury retail stores have empty floors. Discount stores have crowded racks. We emulate the former.

## 2. The Grid & Container Philosophy

*   **The Text Limit:** Body text NEVER exceeds `65ch` (characters).
    *   *Implementation:* `max-w-prose` or `max-w-2xl`.
    *   *Reasoning:* Long lines cause eye fatigue and look "unformatted."
*   **The 12-Column Rhythm:**
    *   **Hero/Mission:** Centered, 8-10 cols.
    *   **Details/Bio:** Split 50/50 (6 cols each).
    *   **Grid Items:** 3 or 4 cols.
    *   *Prohibition:* Never use 5 columns. Even numbers imply stability.

## 3. Component Behavior (The "Solid Object" Rule)

Elements should feel like physical stationery, not video game UI.

*   **Hover States:**
    *   **Allowed:** Text color shift (Navy -> Gold), Border color shift, Underline appear.
    *   **Banned:** Scaling up (`scale-105`), Drop shadow expansion, 3D rotation.
*   **Transitions:**
    *   **Speed:** Slow (`duration-300` or `duration-500`).
    *   **Easing:** `ease-out`.

## 4. Visual Rhythm (Density Control)

To maintain attention, we alternate density.

*   **A - Low Density:** Hero (Image + Headline).
*   **B - High Density:** Trust Bar (Logos).
*   **A - Low Density:** Philosophy (Headline + Paragraph).
*   **B - High Density:** Practice Grid (Cards).

**Why:** Continuous high density creates cognitive overload. Continuous low density feels empty. The A-B pattern keeps the user scrolling.

## 5. CTA Styling Philosophy

Calls to Action are "The Ask." They must be earned.

*   **Primary (The Commitment):** Solid Navy Background, White Text. Sharp corners.
    *   *Usage:* One per view (Hero, Footer).
    *   *Label:* "Review Your Case" (Value-based).
*   **Secondary (The Exploration):** Transparent, Navy Border.
    *   *Usage:* Navigation, "Read More".
    *   *Label:* "Practice Areas" (Navigation-based).
*   **Tertiary (The Link):** Text only, Gold Underline (on hover).
    *   *Usage:* Inline links.

## 6. Implementation Checklist (Anti-Drift)

Before shipping a view, verify:
1.  [ ] Are margins between sections at least `py-24`?
2.  [ ] Is body text constrained to `max-w-prose`?
3.  [ ] Are buttons sharp (0px radius)?
4.  [ ] Are shadows removed (or replaced with borders)?
5.  [ ] Is the primary color Navy (not black)?
