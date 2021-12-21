import { primary, neutral, background, shadows, green } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: primary[100],
  primaryHoverColor: primary[200],
  primaryActiveColor: primary[300],
  backgroundColor: background[100],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  boxShadow: shadows[100],
  primaryFont: primaryFont,
  color: neutral[100],
  outline: neutral[600]
};

export const darkTheme = {
  primaryColor: primary[100],
  primaryHoverColor: primary[200],
  primaryActiveColor: primary[300],
  backgroundColor: neutral[600],
  textColorOnPrimary: neutral[100],
  textColor: neutral[100],
  textColorInverted: neutral[100],
  boxShadow: shadows[200],
  primaryFont: primaryFont,
  color: neutral[700],
  outline: green[400]
};
