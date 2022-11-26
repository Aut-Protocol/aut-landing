import colors from "./colors";

export const theme = {
  breakpoints: ["320px", "768px", "1220px", "1920px"],
  space: [0, 4, 8, 16, 24, 32, 40, 48, 66, 72, 80, 88, 96],
  fontSizes: [10, 12, 14, 15, 16, 20, 24, 34, 48, 60, 96],
  fontWeights: [300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  letterSpacings: {
    normal: "normal",
    tracked: "0.1em",
    tight: "-0.05em",
    mega: "0.25em",
  },
  fonts: {
    dmsans: "'FractulRegular', sans-serif",
  },
  borders: [0, "1px solid", "2px solid", "3px solid", "4px solid"],
  radius: [0, 3, 5, 10, 15, 20, 25, 50, 60, "50%"],
  colors,
  colorStyles: {
    primary: {
      color: colors.offWhite,
      backgroundColor: colors.transparent,
      borderColor: colors.offWhite,
      "&:hover": {
        color: colors.black,
        backgroundColor: colors.offWhite,
        borderColor: colors.offWhite,
      },
    },
    secondary: {
      color: colors.secondary,
      borderColor: colors.secondary,
      "&:hover": {
        color: colors.secondaryHover,
        borderColor: colors.secondaryHover,
      },
    },
    warning: {
      color: colors.yellow,
      borderColor: colors.yellow,
      "&:hover": {
        color: colors.yellowHover,
        borderColor: colors.yellowHover,
      },
    },
    error: {
      color: colors.secondaryHover,
      borderColor: colors.secondaryHover,
      "&:hover": {
        color: colors.secondary,
        borderColor: colors.secondary,
      },
    },
    primaryWithBg: {
      color: colors.white,
      backgroundColor: colors.primary,
      borderColor: colors.primary,
      "&:hover": {
        backgroundColor: colors.primaryHover,
        borderColor: colors.primaryHover,
      },
    },
    secondaryWithBg: {
      color: colors.white,
      backgroundColor: colors.secondary,
      borderColor: colors.secondary,
      "&:hover": {
        backgroundColor: colors.secondaryHover,
        borderColor: colors.secondaryHover,
      },
    },
    warningWithBg: {
      color: colors.white,
      backgroundColor: colors.yellow,
      borderColor: colors.yellow,
      "&:hover": {
        backgroundColor: colors.yellowHover,
        borderColor: colors.yellowHover,
      },
    },
    errorWithBg: {
      color: colors.white,
      backgroundColor: colors.secondaryHover,
      borderColor: colors.secondaryHover,
      "&:hover": {
        backgroundColor: colors.secondary,
        borderColor: colors.secondary,
      },
    },
  },
  buttonStyles: {
    outlined: {
      borderWidth: "3px",
      borderStyle: "solid",
    },
    roundOutlined: {
      borderWidth: "3px",
      borderStyle: "solid",
      borderRadius: "50px",
    },
    square: {
      borderWidth: "3px",
      borderStyle: "solid",
      borderRadius: "0",
    },
    text: {
      border: 0,
      padding: 0,
      height: "auto",
    },
    link: {
      border: 0,
      padding: 0,
      height: "auto",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    linkUnderline: {
      border: 0,
      padding: 0,
      height: "auto",
      textDecoration: "underline",
      textTransform: "uppercase",
    },
  },
};
