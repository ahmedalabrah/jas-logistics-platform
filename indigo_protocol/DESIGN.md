# Design System Specification: The Sentinel Protocol

## 1. Overview & Creative North Star
### Creative North Star: "The Sovereign Intelligence"
This design system rejects the "SaaS-standard" look in favor of a high-fidelity, sovereign interface. It is designed for elite operators managing complex AI deployments. The aesthetic is **High-Density Fintech Noir**: a workspace that feels like a pressurized, high-stakes environment. 

We move beyond the template by utilizing **Tonal Architecture**. Instead of relying on lines to organize data, we use "Atmospheric Depth"—a method where information is carved out of the darkness using light, blur, and color-shifting surfaces. It is technical, authoritative, and unapologetically dense.

---

## 2. Colors & Surface Philosophy
The palette is rooted in deep obsidian tones, punctuated by the high-energy Indigo AI accent.

### Surface Hierarchy & Nesting
We do not use grids; we use **Tessellation**.
- **Base Layer:** `surface` (#0b1326) – The infinite void.
- **Structural Sections:** `surface-container-low` (#131b2e) – Used for primary sidebars or secondary navigation planes.
- **Active Workspace:** `surface-container` (#171f33) – The main stage for data lists.
- **Interactive Objects:** `surface-container-high` (#222a3d) – Floating panels or high-priority cards.

### The "No-Line" Rule
**Borders are a design failure.** To separate a list item from a background, use a shift from `surface-container` to `surface-container-high`. If a hard break is required, use a 1px gap to let the `surface-container-lowest` (#060e20) "under-glow" peak through, creating a negative-space divider.

### The "Glass & Gradient" Rule
- **AI Accents:** Use the `primary` (#c0c1ff) and the Indigo (#6366F1) in subtle linear gradients (top-left to bottom-right) for primary action buttons to give them "mass."
- **Glassmorphism:** For modals and overlays, use `surface-container-highest` at 70% opacity with a `24px` backdrop blur. This ensures the technical data underneath remains a ghostly presence, maintaining the user's mental map.

---

## 3. Typography: Technical Authority
We employ a dual-font strategy to balance editorial elegance with machine-level precision.

*   **Display & Headlines (Poppins/PlusJakartaSans):** Used for structural headers. These should be tracked slightly tight (-2%) to feel "engineered."
    *   `headline-lg`: 2rem, Medium weight. The anchor for dashboard views.
*   **Body & Titles (Inter):** The workhorse for metadata and general reading. High legibility, neutral tone.
*   **Status & Labels (JetBrains Mono/SpaceGrotesk):** *This is the heart of the system.* All AI outputs, logs, and system statuses must use the monospace scale.
    *   `label-md`: 0.75rem. Used for uptime, token counts, and JSON keys.

---

## 4. Elevation & Depth
Depth is signaled through **Luminance**, not shadows.

*   **The Layering Principle:** A `surface-container-highest` object is perceived as "closer" to the user than a `surface-dim` object. Stack these to create a natural focus hierarchy.
*   **Ambient Shadows:** Traditional black shadows are forbidden. If an element must float, use a 12% opacity shadow tinted with `surface-tint` (#c0c1ff) with a 40px blur. It should look like the component is emitting a faint glow onto the surface below.
*   **The Ghost Border:** When accessibility demands a container edge, use `outline-variant` (#464554) at **15% opacity**. It should be felt, not seen.

---

## 5. Components: Precision Instrumentation

### Status Indicators
Do not use simple circles. Status indicators in this system are **Data-Rich Micro-signals**.
- **Active:** A pulsing `primary` dot with a `surface-tint` outer glow.
- **Error:** `error` (#ffb4ab) text in JetBrains Mono with a `10% error_container` background tint.

### Toggle Switches (The "Reactor" Toggle)
Standard toggles are too soft. Our switches use `DEFAULT` (0.25rem) roundedness. 
- **Off:** `surface-container-highest` track with an `outline` thumb.
- **On:** `primary_container` (#8083ff) track. The thumb should glow with a `primary` drop shadow.

### Detailed Data Lists (Density First)
- **Zero-Divider Policy:** Rows are separated by an 8px vertical margin. On hover, the row background shifts to `surface-container-highest`.
- **Leading Elements:** Use Monospace font for "Model IDs" or "Timestamp" columns to ensure vertical alignment across high volumes of data.
- **Trailing Elements:** Action buttons in lists should be "Ghost" style (no background) until hover to reduce visual noise.

### Buttons
- **Primary:** `primary` background with `on_primary` text. No border. Subtle 5% Indigo gradient.
- **Secondary:** `secondary_container` background. 
- **Tertiary/AI Action:** Indigo #6366F1 background with a high-glow `surface-tint` shadow to signify an "AI-augmented" action.

---

## 6. Do's and Don'ts

### Do
- **DO** use asymmetry. A sidebar might be 240px while a right-hand "Inspector" panel is 320px to reflect different data priorities.
- **DO** use "Mono" fonts for any number that changes frequently (Live data). This prevents the UI from "jumping" as numbers change width.
- **DO** lean into the "Indigo Glow." Use it sparingly as a high-value signal for AI-driven insights.

### Don't
- **DON'T** use pure white (#FFFFFF). Use `on_surface` (#dae2fd) to prevent eye strain in high-density dark mode.
- **DON'T** use standard 8px padding for everything. Use "Information Grouping"—keep related data tight (4px) and separate functional blocks wide (24px+).
- **DON'T** use icons without labels for technical actions. In an enterprise AI context, clarity beats minimalism. Use `label-sm` monospace tags.