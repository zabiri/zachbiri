export const varBase = {
  borderPadding: `2rem`,
  borderThickness: ".5rem",
  borderZIndex: 200,
  colorBackgroundPage: "white",
  fontHeader: "Josefin Slab",
  fontParagraph: "Play",
  navWidth: `15rem`,
  palette0: "#f1f0eb",
  palette1: "#d79922",
  palette2: "hsl(45, 62%, 83%)",
  palette3: "#040136",
  palette4: "#421093",
  palette5: "#c5cbe3",
  shadow: ".2rem .1rem .1rem rgba(0, 0, 0, .2)"
};
export const varMid = {
  borderWidthBottom: `calc((50% - (2 * ${varBase.borderPadding})) - (${
    varBase.navWidth
  } / 3))`,
  contentMargin: `calc(${varBase.borderPadding} * 2 + ${
    varBase.borderThickness
  })`
};
export const theme = {
  ...varBase,
  ...varMid,
  borderBumperDisplacement: `calc((50% - (2 * ${varBase.borderPadding})) - (${
    varBase.navWidth
  } / 3) + ${varBase.borderPadding} - ${varBase.borderThickness})`,
  borderHeight: `calc(100vh - (2 * ${varBase.borderPadding}))`,
  borderWidth: `calc(100% - (2 * ${varBase.borderPadding}))`,
  borderWidthBottom: varMid.borderWidthBottom,
  colorBorder: varBase.palette4,
  contentHeight: `calc(100vh - (${varMid.contentMargin} * 2) )`,
  contentMargin: varMid.contentMargin,
  navZIndex: varBase.borderZIndex + 1
};
