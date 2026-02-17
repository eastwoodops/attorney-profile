# Layout Philosophy: Alderman Law Firm

**Goal:** Avoid "clutter" and "flash." Create a rhythm that feels like a well-structured legal argument.

## 1. The Grid & Container

*   **Max Width:** `max-w-7xl` (1280px). We do not use full-bleed layouts for text content. Legal reading requires bounded containers to maintain focus.
*   **Text Width:** `max-w-prose` (65ch). Strictly enforced for all long-form content to ensure optimal reading velocity.

## 2. Whitespace Strategy ("Expensive Air")

In luxury design, density implies commoditization. Whitespace implies value.

*   **Section Spacing:** Minimum `py-24` (6rem) between major sections.
*   **Internal Padding:** Generous `p-8` or `p-12` within cards.
*   **The "Breath" Rule:** If a user has to scroll immediately to see the next element, that is good. We want them to finish the thought before moving on.

## 3. Density vs. Air

*   **Low Density:** Homepage, Practice Area Landing Pages. High impact, few elements, massive whitespace.
*   **High Density:** Footer, Data Tables. Where utility is primary, density increases, but contrast decreases (using greys) to reduce visual noise.

## 4. Visual Rhythm & Scan Behavior

Legal clients are anxious. They scan for:
1.  **"Can you help me?"** (Headings)
2.  **"Do you know what you're doing?"** (Social Proof / Credentials)
3.  **"How do I contact you?"** (CTA)

**Pattern:**
*   **F-Pattern Support:** Headings are heavy and left-aligned.
*   **Z-Pattern Breaks:** We use asymmetric layouts (image left, text right) to break the monotony of text-heavy pages, forcing the eye to pause.

## 5. Trust Mechanics

*   **Symmetry:** Used for "Verdict" moments (Hero sections, Mission statements). Symmetry implies stability and order.
*   **Asymmetry:** Used for "Evidence" moments (Practice areas, Bio details). Asymmetry implies movement and nuance.
*   **No "Trendy" Interactions:** No scroll-jacking, no parallax, no aggressive motion. The site should feel solid, static, and permanent.
