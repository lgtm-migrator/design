/** @jsx jsx */
import { jsx, Global } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import Typography from "typography";

export const defaultTheme = {
  colors: {
    brand: `#a31f34`,
    white: `#ffffff`,
    whiteText: `rgba(255, 255, 255, 0.9)`,
    gray: `#6d6e70`,
    dark: `#000c`,
    darkText: `rgba(0, 0, 0, 0.8)`,
    light: `#e3e3e3`,
    green: `#1f7d1f`,
  },
  spacing: {
    unit: 16,
  },
  breakpoints: {
    header: `725px`,
  },
  maxWidth: `960px`,
};

export const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  headerWeight: 600,
  headerFontFamily: [
    "Open Sans",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
  googleFonts: [
    {
      name: "Open Sans",
      styles: ["600"],
    },
    {
      name: "Roboto",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
});

export const typographyJSON = typography.toJSON();

export const Theme = ({ theme = defaultTheme, children }) => (
  <ThemeProvider theme={theme}>
    <Global
      styles={{
        body: { background: theme.colors.light },
        "a:hover, a:active, a:focus": {
          color: theme.colors.brand,
        },
      }}
    />
    {children}
  </ThemeProvider>
);
