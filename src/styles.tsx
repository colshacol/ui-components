export const COLORS = {
  indigo: "#24124d",
  i80: "#4f4270",
  i60: "#7b7194",
  i40: "#a7a0b8",
  i20: "#d3d0db",
  i12: "#e4e2e9",
  i08: "#eeecf1",
  i04: "#f4f3f6",
  i02: "#fbfafc",
  /**
   * @deprecated Use indigo instead
   */
  darkpurple: "#140b2f",
  /**
   * @deprecated Use i80 instead
   */
  dp80: "#433c59",
  /**
   * @deprecated Use i60 instead
   */
  dp60: "#726d82",
  /**
   * @deprecated Use i40 instead
   */
  dp40: "#a19dac",
  /**
   * @deprecated Use i20 instead
   */
  dp20: "#d0ced5",
  /**
   * @deprecated Use i12 instead
   */
  dp12: "#edecef",
  /**
   * @deprecated Use i08 instead
   */
  dp08: "#edecef",
  /**
   * @deprecated Use i04 instead
   */
  dp04: "#f6f5f7",
  /**
   * @deprecated Use i02 instead
   */
  dp02: "#fafafb",
  magenta: "#f84f77",
  m80: "#f97292",
  m60: "#fb95ad",
  m40: "#fcb9c9",
  m20: "#fedce4",
  m12: "#fee9ee",
  m08: "#fff1f5",
  m04: "#fff8fa",
  m02: "#fffcfc",
  purple: "#512da8",
  p80: "#7457b9",
  p60: "#9781cb",
  p40: "#b9abdc",
  p20: "#dcd5ee",
  p12: "#eae5f4",
  p08: "#f1eff8",
  p04: "#f8f7fc",
  p02: "#fcfbfd",
  blue: "#5182f8",
  b80: "#749bf9",
  b60: "#97b4fb",
  b40: "#b9cdfc",
  b20: "#dce6fe",
  b12: "#eaf0fe",
  b08: "#f1f5ff",
  b04: "#f8faff",
  b02: "#fcfdff",
  teal: "#1eb8c1",
  t80: "#4bc6cd",
  t60: "#78d4da",
  t40: "#a5e3e6",
  t20: "#d2f1f3",
  t12: "#e4f6f7",
  t08: "#edfafa",
  t04: "#f6fcfd",
  t02: "#fbfefe",
  green: "#009688",
  g80: "#33aba0",
  g60: "#66c0b8",
  g40: "#99d5cf",
  g20: "#cceae7",
  g12: "#e0f2f0",
  g08: "#ebf7f6",
  g04: "#f5fbfa",
  g02: "#fafdfd",
  lime: "#91bb54",
  l80: "#a7c876",
  l60: "#bdd698",
  l40: "#d3e4ba",
  l20: "#e9f1dd",
  l12: "#f1f6ea",
  l08: "#f7faf2",
  l04: "#fbfcf8",
  l02: "#fdfefc",
  yellow: "#ffb300",
  y80: "#ffc233",
  y60: "#ffd166",
  y40: "#ffe199",
  y20: "#fff0cc",
  y12: "#fff5e0",
  y08: "#fff9eb",
  y04: "#fffcf5",
  y02: "#fffefa",
  chocolate: "#bf6e33",
  c80: "#cb8b5c",
  c60: "#d8a885",
  c40: "#e5c5ad",
  c20: "#f2e2d6",
  c12: "#f7ede6",
  c08: "#faf4ef",
  c04: "#fdf9f7",
  c02: "#fefcfb",
  orange: "#e45735",
  o80: "#e9795d",
  o60: "#ef9a86",
  o40: "#f4bcae",
  o20: "#faddd7",
  o12: "#fbeae6",
  o08: "#fdf2ef",
  o04: "#fef8f7",
  o02: "#fffcfb",
  white: "#ffffff",
  focus: "rgba(91, 147, 255, .25)"
};

// Border radius for rounded rectangles
export const BORDER_RADIUS = "4px";

// Indigo as an rgb value
export const indigoRgb = "36, 18, 77";

// Purple as an rgb value
export const purpleRgb = "81, 45, 168";

// Depth level 1 (sitting on background)
export const BOX_SHADOW_BORDER_LIGHTER = `0 0 0 1px rgba(${indigoRgb}, .05)`;
export const BOX_SHADOW_BORDER = `0 0 0 1px rgba(${indigoRgb}, .1)`;
export const BOX_SHADOW_BORDER_DARKER = `0 0 0 1px rgba(${indigoRgb}, .2)`;
export const BOX_SHADOW_SITTING = `0 2px 4px -2px rgba(${indigoRgb}, .2)`;

// Depth level 2 (sticky scrolling headers)
export const BOX_SHADOW_STICKY = `0 1px 0 0 rgba(${indigoRgb}, .05), 0 2px 16px -2px rgba(${indigoRgb}, .1)`;

// Depth level 3 (dropdowns, dialogs, draggables when lifted)
export const BOX_SHADOW_LIFTED = `0 12px 24px -8px rgba(${indigoRgb}, .3)`;

// Focus style
export const BOX_SHADOW_FOCUS = `0 0 0 4px ${COLORS.focus}`;

// Z index
export const Z_INDEX_HIGHEST = 1000;
export const Z_INDEX_HIGH = 750;
export const Z_INDEX_MID = 500;
export const Z_INDEX_LOW = 250;
export const Z_INDEX_LOWEST = 0;

// Breakpoints
export const BREAKPOINT_PHONE = 440;
export const BREAKPOINT_PHABLET = 512;
export const BREAKPOINT_TABLET = 768;
