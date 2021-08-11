const calcRem = (size: number) => `${size / 16}rem`;

const colors = {
  white: "#FEFEFE",
  black: "#000",
  beige: {
    light: "#F8F1F1",
  },
  gray: {
    extraLight: " #f2f2f2",
    x_light: "#dfdbdb",
    light: "#cecece",
    normal: "#999999",
    dark: "#666",
  },
  skyBlue: {
    normal: "#46CDCF",
  },
  navy: {
    light: "#3D84A8",
    normal: "#11698E",
    dark: "#19456B",
  },
  purple: {
    dark: "#48466D",
  },
  mint: {
    light: "#ABEDD8",
    normal: "#16C79A",
  },
};
const fontSizes = {
  xxs: calcRem(12),
  xs: calcRem(13),
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  titleSize: calcRem(32),
};
const theme = { colors, fontSizes };

export default theme;
