You are modifying an existing Figma Make project called “Tradie Welcome 1 fully edited Copy”.

First, inspect and understand every existing screen, route, component, interaction, form, button, navigation item, card, modal, drawer, table, chart, dropdown, toast, validation state, and data relationship in the entire project. Treat the current desktop design as the source of truth.

Your task is to reconstruct the complete application as a functional mobile-first responsive product for Android and iOS. Do not create a new concept and do not redesign the product logic. Preserve the existing information architecture, user journeys, screen sequence, labels, terminology, icons, colors, data, actions, validations, and interaction flow exactly as they are.

Use the attached image as a visual reference for the existing Tradie Producer dashboard style, spacing, cards, colors, typography, and content hierarchy.

## Primary requirement

Convert all screens from desktop layout to a practical mobile layout, approximately 360–430 px wide. Every screen must fit within the mobile viewport without horizontal scrolling, clipped content, overlapping elements, hidden controls, or unreadable text.

All visual content must remain accessible and visible through appropriate mobile patterns:

- Convert horizontal desktop navigation into a top app bar plus a bottom navigation bar or compact navigation drawer.
- Keep the active section clearly highlighted.
- Convert multi-column card grids into one-column or two-column mobile grids only when the content remains readable.
- Stack related fields vertically.
- Convert wide tables into mobile cards, expandable rows, or horizontally scrollable tables only when absolutely necessary.
- Convert side panels into full-width sections, bottom sheets, or full-screen modal views.
- Convert desktop popovers and menus into mobile bottom sheets or centered dialogs.
- Keep important primary actions visible and easy to reach.
- Use sticky headers or sticky bottom action bars where useful.
- Preserve all content; never remove information merely to make the layout fit.
- Allow natural vertical scrolling for long screens, but never allow horizontal overflow.
- Ensure long labels, crop names, batch names, transaction details, and status text wrap correctly.
- Maintain adequate touch targets of at least 44 × 44 px.
- Respect safe areas around device notches, status bars, and bottom gesture areas.

## Dashboard conversion

Rebuild the Tradie Producer dashboard shown in the reference image as a mobile dashboard:

- Keep the Tradie Producer branding and welcome message.
- Keep the summary metrics: Total Batches, Quality Checks, Tokens Issued, and Total Revenue.
- Display summary metrics as a readable vertical stack or compact two-column arrangement.
- Preserve Quick Actions such as Post Requirement, Crop Lifecycle, Batch Tracking, Quality Check, Input Costs, Finance, Services, Crop Health, Inventory, Activities, AI Insights, and QR Scanner.
- Use clear icons, concise labels, and readable supporting text.
- Keep Registered Crops, Activity Timeline, Grok AI Insights & Fraud Detection, Demand & Supply Forecast, Best Time to Sell, Ask Grok AI Assistant, NFT Tokenization, Create Grok-Verified NFT, and Generate QR Code.
- On mobile, stack these sections vertically in a logical order.
- Do not remove charts or AI insights. Resize charts responsively and ensure legends, labels, and key values remain visible.
- Keep the Begin Producer Flow action accessible, preferably as a full-width sticky bottom button or a clearly visible section action.
- Preserve all buttons and their original destinations and actions.

## Responsive behavior

Implement responsive behavior rather than making separate static mockups:

- Desktop layouts must remain usable at larger widths.
- Mobile layouts must activate below approximately 768 px.
- Tablet layouts may use an intermediate two-column arrangement.
- Use flexible width, max-width, auto-layout, wrapping, and responsive constraints.
- Avoid fixed desktop widths that cause overflow.
- Use a consistent mobile horizontal padding of approximately 16 px.
- Use an 8 px spacing system and consistent vertical rhythm.
- Use responsive typography with readable mobile sizes.
- Maintain sufficient contrast and clear visual hierarchy.
- Keep cards visually consistent with the current product: rounded corners, subtle borders or shadows, light background surfaces, and the existing color palette.

## Functional behavior

The prototype must be functional, not merely visual:

- Preserve all existing navigation and routes.
- Preserve back navigation and browser/device back behavior.
- Preserve all existing forms, input fields, dropdowns, filters, search, tabs, toggles, checkboxes, upload controls, QR actions, payment actions, tokenization actions, and confirmation flows.
- Preserve validation messages and error states.
- Preserve loading, empty, success, warning, and failure states wherever they already exist.
- Preserve existing sample data and realistic content.
- Ensure every button has a working interaction or navigates to its existing destination.
- Ensure modal dialogs and bottom sheets can be opened and closed.
- Ensure dropdowns and menus do not render outside the viewport.
- Ensure keyboard input does not hide the active field or primary action.
- Ensure all interactive elements have visible pressed, selected, disabled, hover, and focus states where appropriate.
- Do not replace functional interactions with static decorative elements.

## Visual consistency

Do not alter the established design direction. Retain:

- Existing brand identity and Tradie Producer styling.
- Existing colors and semantic status colors.
- Existing icon meaning and icon placement wherever practical.
- Existing copy and labels.
- Existing card hierarchy.
- Existing visual relationship between data, actions, and navigation.

Only change layout, sizing, spacing, alignment, wrapping, and responsive interaction patterns when necessary for mobile usability.

## Quality checks

After rebuilding, inspect every screen at these viewport sizes:

- 360 × 800 px
- 390 × 844 px
- 412 × 915 px
- 430 × 932 px
- 768 × 1024 px
- Desktop width

For each screen verify:

- No horizontal scrolling.
- No clipped text or buttons.
- No overlapping cards, icons, labels, charts, dialogs, or navigation.
- All content is reachable by vertical scrolling.
- All primary actions are visible or accessible within one additional interaction.
- Text remains readable.
- Touch targets are large enough.
- Bottom navigation and sticky actions do not cover page content.
- Dialogs and bottom sheets fit within the viewport.
- Charts and tables remain understandable.
- All original flows still work exactly as before.

Make the smallest possible structural changes needed to achieve a polished responsive mobile application. Do not add unnecessary new screens, features, animations, illustrations, or decorative elements. Prioritize functional completeness, responsive behavior, information visibility, and low implementation complexity.