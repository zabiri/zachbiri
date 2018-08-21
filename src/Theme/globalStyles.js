export const varBase = {
  palette0: "#f1f0eb",
  palette1: "#d79922",
  palette2: "hsl(45, 62%, 83%)",
  palette3: "#040136",
  palette4: "#421093",
  palette5: "#c5cbe3",
  borderPadding: `2rem`,
  navWidth: `15rem`,
  borderThickness: "1rem",
  borderZIndex: 200,
}
export const varMid = {
  borderWidthBottom: `calc((50% - (2 * ${varBase.borderPadding})) - (${varBase.navWidth} / 3))`,
  contentMargin: `calc(${varBase.borderPadding} * 2 + ${varBase.borderThickness})`,
}
export const theme = {
  ...varBase,
  fontHeader: "Cormorant",
  fontParagraph: "Montserrat",
  navWidth: "15rem",
  borderPadding: "2rem",
  borderWidth: `calc(100% - (2 * ${varBase.borderPadding}))`,
  borderHeight: `calc(100vh - (2 * ${varBase.borderPadding}))`,
  navZIndex: varBase.borderZIndex + 1,
  colorBackgroundPage: 'white',
  colorBorder: varBase.palette4,
  contentHeight: `calc(100vh - (${varMid.contentMargin} * 2) )`,
  contentMargin: varMid.contentMargin,
  borderWidthBottom: varMid.borderWidthBottom,
  borderBumperDisplacement: `unquote(
    "calc(${varMid.borderWidthBottom} + ${varBase.borderPadding} - ${varBase.borderThickness})"
  )`,

  shadow: ".2rem .1rem .1rem rgba(0, 0, 0, .2)"
};
