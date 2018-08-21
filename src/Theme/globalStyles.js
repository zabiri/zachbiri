export const theme = {
  fontHeader: "Cormorant",
  fontParagraph: "Montserrat",

  palette0: "#f1f0eb",
  palette1: "#d79922",
  palette2: "hsl(45, 62%, 83%)",
  palette3: "#040136",
  palette4: "#421093",
  palette5: "#c5cbe3",

  navWidth: "15rem",

  borderThickness: "1rem",
  borderPadding: "2rem",
  borderWidth: `calc(100% - (2 * ${this.borderPadding}))`,
  borderWidthBottom: `calc((50% - (2 * ${this.borderPadding})) - (${this.navWidth} / 3))`,
  borderHeight: `calc(100vh - (2 * ${this.borderPadding}))`,
  borderZIndex: 200,
  navZIndex: this.borderZIndex + 1,

  colorBackgroundPage: 'white',
  colorBorder: this.palette4,

  contentMargin: `calc(${this.borderPadding} * 2 + ${this.borderThickness})`,
  contentHeight: `calc(100vh - (${this.contentMargin} * 2) )`,

  borderBumperDisplacement: `unquote(
    "calc(${this.borderWidthBottom} + ${this.borderPadding} - ${this.borderThickness})"
  )`,

  shadow: ".2rem .1rem .1rem rgba(0, 0, 0, .2)"
};
