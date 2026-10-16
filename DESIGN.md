---
name: "Feierabend ist nicht lagermäßig"
description: "A friendly retro pixel survivor game in an industrial evening."
colors:
  night: "#091a2b"
  panel: "#10283e"
  line: "#355268"
  ink: "#f8eed8"
  muted: "#b8cad4"
  orange: "#ffad4b"
  mint: "#94e3b3"
typography:
  display:
    fontFamily: "Pixel, monospace"
    fontSize: "clamp(42px, 5.25vw, 80px)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Pixel, monospace"
    fontSize: "clamp(27px, 4vw, 40px)"
    lineHeight: 1.1
  title:
    fontFamily: "Pixel, monospace"
    fontSize: "22px"
    lineHeight: 1.1
  body:
    fontFamily: "Segoe UI, Arial, sans-serif"
    fontSize: "14px"
    lineHeight: 1.7
  label:
    fontFamily: "Segoe UI, Arial, sans-serif"
    fontSize: "11px"
rounded:
  square: "0"
  joystick: "50%"
spacing:
  compact: "8px"
  small: "12px"
  medium: "16px"
  roomy: "24px"
  dialog: "38px"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "#102133"
    rounded: "{rounded.square}"
    padding: "18px 23px"
  button-secondary:
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "13px 17px"
  duration-choice:
    textColor: "{colors.muted}"
    rounded: "{rounded.square}"
    padding: "0 0 5px"
  patience-panel:
    backgroundColor: "#0b1d2deb"
    textColor: "{colors.ink}"
    padding: "13px 16px"
    width: "250px"
  upgrade-choice:
    backgroundColor: "#0b1d30"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "21px 16px"
---

# Design System: Feierabend ist nicht lagermäßig

## Overview

**Creative North Star: "Feierabend im Pixelhof"**

The visual world is a rainy industrial evening: midnight petrol and cobalt surroundings, orange lamplight, ivory pixel lettering, and mint signals of successful help. Dennis stays friendly, capable, and affectionately portrayed; the dark setting creates atmosphere without turning customers into enemies to kill.

The user selected image 3, the detailed retro pixel world, as the art reference. It is not a complete UI composition. The shipped interface translates that world into square, readable game panels, concise German copy, tactile controls, and a viewport dominated by the yard.

**Key Characteristics:**

- Detailed retro pixel environment with crisp native-alpha character sprites.
- Dark blue panels, orange actions, and mint successful-help feedback.
- Pixel display type paired with readable system body type.
- Responsive game overlays and focused upgrade choices.

This is a scan of the shipped implementation in `public/style.css`, `public/index.html`, and `public/game.js`, with the confirmed direction in `PRODUCT.md` and `.impeccable/surface-game.md`. Frontmatter values are normative; the sidecar contains extensions and representative component previews.

## Colors

A cool industrial night supports warm, human action and clear green feedback.

### Primary

- **Lamplight Orange** (`orange`): start and resume controls, selected duration, experience bar, tool icons, and highlighted title lettering.

### Secondary

- **Helpful Mint** (`mint`): patience, positive statuses, and upgrade category labels. Canvas pickups and successful-client effects use related mint shades.

### Neutral

- **Midnight Petrol** (`night`): page background and canvas clear color.
- **Industrial Blue** (`panel`): dialogs, play background, and control hover surfaces.
- **Steel Divider** (`line`): thin structural separators.
- **Warm Ivory** (`ink`): primary text and pixel headings.
- **Mist Blue** (`muted`): explanatory copy, subordinate labels, and quiet controls.

**The Helpful Color Rule.** Orange invites action; mint marks patience and successful help. Low patience changes to a warm coral warning and retains its numeric percentage.

## Typography

**Display Font:** locally served Pixelify Sans Bold, registered as `Pixel`, with monospace fallback. The shipped file is `public/assets/pixelify-bold.ttf`; it loads with `font-display: swap`.

**Body Font:** Segoe UI, Arial, sans-serif. Keyboard caps use Segoe UI with a sans-serif fallback.

The chunky display face ties headings and numerical moments to the pixel world. System text keeps instructions, labels, and upgrade descriptions legible.

- **Display:** the frontmatter display role is the menu title; at narrow widths it changes to `clamp(38px, 9.5vw, 65px)`.
- **Headline:** dialog headings use the responsive headline role.
- **Title:** upgrade names use the title role; the dossier name is slightly larger (25px).
- **Body:** dialog paragraphs use the body role; menu premise copy uses a more open line height (1.8).
- **Label:** controls and HUD labels start at 11px. Timer and HUD quantities use tabular numerals. The clock is pixel type (35px, reducing to 29px on narrow screens).

**The Two Voices Rule.** Pixel type carries identity and short game moments; system sans-serif carries instructions and sustained reading.

## Layout

The header occupies 78px on wide screens, 68px at widths up to 1000px, and 62px at widths up to 700px. Menu and play height account for that header with small viewport units. The game viewport remains the central surface.

On desktop, menu copy sits over a darkened left portion of the title image. A compact Dennis dossier sits at the lower right. The menu uses generous perimeter space, while gameplay panels are compact: patience at upper left, clock centered, pause at upper right, tools and quotes near the lower edge.

At widths up to 1000px, text and HUD panels become narrower. At widths up to 700px, the menu becomes a single column, the dossier and footer join normal flow, and dialog padding reduces from 38px to 29px 22px. Three upgrade cards become a vertical stack with icons on the left. The play surface keeps a minimum height of 420px; the wide minimum is 460px.

Dialogs are centered, limited to 760px, and scroll within the viewport. The overlay leaves 24px perimeter space, reduced to 14px on small screens. Touch controls appear for coarse pointers or widths up to 700px: a 108px circular steering area at lower left, with tools and quotes stacked at lower right. At 1600px and above, menu margins increase to preserve composition.

## Elevation & Depth

Depth comes chiefly from the pixel scene, translucent dark panels, one-pixel borders, and a dark modal scrim. Panels do not use card shadows. The title’s shadow (`0 3px 14px #07101c`) and objective text shadow (`0 2px 4px #000`) keep lettering readable against scenery. The modal scrim is `rgba(4,14,25,.84)`; title-image gradients are compositional shading rather than glass effects.

**The Readable Night Rule.** Darken scenery beneath text and use bordered panels for information; do not rely on ambient card shadows to separate controls.

## Shapes

Panels, meters, buttons, keyboard caps, and upgrade choices have square corners and thin steel borders. Outlined SVG icons use square line caps and miter joins. The touch joystick is the functional circular exception. Progress is represented by straight horizontal tracks.

Artwork stays pixelated in CSS and canvas. The character sheet is a native-alpha sprite asset (`characters-clean.png`) arranged as three columns by two rows. The canvas draws its transparent cells directly, with image smoothing disabled; it does not key out a flat background at runtime. Keep the original alpha edges intact.

## Components

### Primary and secondary buttons

The primary control is a solid orange, square, pixel-lettered action with a right-hand icon. It lifts by 2px and brightens on hover; pressing moves it down 1px. Its base minimum height is 62px, reducing to 58px on small screens and 50px inside dialogs. Secondary controls use an outlined, transparent surface and system type; hover adds a darker blue fill.

All buttons retain the shared orange focus outline (3px, 5px offset). Disabled buttons use 60% opacity and a waiting cursor during asset loading. Sound and help use quiet text controls in the header.

### Duration choices

Two semantic buttons select the run length. Selection is shown by orange text and a thin orange underline, with `aria-pressed` exposing state. The minimum target height is 32px. Do not present these as unrelated navigation links.

### Patience and experience panel

A translucent, bordered panel presents the numeric patience percentage, a mint patience track, and an orange experience track with level and progress labels. The patience track is a named progressbar whose value updates with play. At narrow widths the panel becomes 150px wide with compact padding.

### Upgrade modal

The shared semantic dialog has a dark blue surface, thin steel border, pixel heading, and readable explanatory copy. Upgrade selection uses three button cards, each with a numbered shortcut, inline tool icon, pixel name, mint category/stage, description, and orange detail. Hover raises a card by 4px and changes its border to orange. Mobile cards form a vertical stack.

The upgrade dialog offers a deliberate choice: click a card or press 1–3. Focus remains inside the modal; selecting an upgrade restores focus to the canvas. Escape does not silently dismiss this required choice. Other dialogs reuse the same shell for instructions, introduction, pause, credits, and results.

### Game atmosphere and sprites

The yard and title are original pixel assets; Dennis and customer sprites retain native transparency. Mint resolution effects, “Danke!” feedback, and customers walking away communicate successful assistance.

Rain is a lightweight canvas overlay. A reduced-motion preference suppresses rain, sprite/pickup bobbing, and exit pulsing; CSS disables transitions and animations. This is a targeted reduction: gameplay movement and effects remain, and the low-patience border still pulses. Do not claim a fully motionless mode.

## Do's and Don'ts

### Do:

- **Do** preserve the selected retro pixel art and Dennis’ friendly character.
- **Do** use orange for actions and mint for successful help, patience, and experience pickups.
- **Do** keep body copy in the system sans-serif and pixel lettering for prominent game identity and short headings.
- **Do** retain visible keyboard focus, semantic buttons, and the upgrade modal’s focus handling.
- **Do** preserve native sprite alpha and disable image smoothing when drawing the game.
- **Do** retain reduced-motion handling for rain, bobbing, exit pulsing, and CSS transitions.

### Don't:

- **Don’t** treat image 3 as a measured web UI layout.
- **Don’t** replace square panels with rounded generic dashboard cards.
- **Don’t** use pixel lettering for every paragraph or obscure controls beneath scenery.
- **Don’t** depict Dennis negatively or make customers’ departure read as death.
- **Don’t** add opaque sprite backplates or smooth the pixel artwork.

