# JAS Logistics Platform: Design System Audit Checklist

## 1. Color Token Compliance
- [ ] **No Hardcoded Hex:** Verify no hex codes are used directly in Tailwind classes (e.g., `text-[#ffffff]`).
- [ ] **Layered Backgrounds:**
    - `background.base` (#0F0F1A) for app background.
    - `surface.1` (#13131F) for cards.
    - `surface.2` (#18182A) for hover/elevated states.
    - `surface.3` (#1E1E35) for inputs.
- [ ] **Text Hierarchy:**
    - `text.primary` (rgba 93% white) for main content.
    - `text.secondary` (rgba 55% white) for labels/subtext.
    - `text.tertiary` (rgba 25% white) for captions/disabled.
- [ ] **Portal Accents:** Portal colors applied only to sidebar accents, headers, and specific status chips.
- [ ] **Semantic Accuracy:** Green for success, Amber for warnings, Red for errors.
- [ ] **Regulatory Colors:** TGA Blue (#3B82F6) and Payment Violet (#8B5CF6) restricted to their respective modules.

## 2. Typography
- [ ] **Headings:** Poppins (700-900) for all screen and section titles.
- [ ] **Body:** Inter (400-600) for UI text and descriptions.
- [ ] **Technical Data:** JetBrains Mono for IDs, codes, numbers, and badges.
- [ ] **Multilingual:** Tajawal or IBM Plex Arabic for all Arabic strings.

## 3. Spacing & Layout
- [ ] **4px Grid:** All margins, paddings, and gaps must be multiples of 4.
- [ ] **Main Content Padding:** 24px (top), 36px (sides), 60px (bottom).
- [ ] **Card Density:** 16px (compact) or 24px (standard).

## 4. Components & Borders
- [ ] **Borders:** Always `1px solid rgba(255,255,255,X)`. No solid hex borders.
- [ ] **Radii:** 16px for large cards/modals; 10-12px for standard cards/inputs; 8px for buttons.
- [ ] **Shadows:** Dark mode RGBA shadows only.
- [ ] **Interactive States:** Hover, Focus (purple glow), and Loading states present.

## 5. Module Specifics
- [ ] **TGA Documents:** Green accent for Op. Cards, Amber for Permits.
- [ ] **Payment:** Violet (#8B5CF6) used for selection states and wallet balances.
- [ ] **COD:** Orange (#F97316) prominent for cash collection actions.
