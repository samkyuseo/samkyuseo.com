import { extendTheme } from "@chakra-ui/react";
import { ButtonThemes as Button } from "./ButtonThemes";
import { LinkThemes as Link } from "./LinkThemes";
import { TextThemes as Text } from "./TextThemes";

// default global styles
const styles = {
  global: {
    body: {
      bg: "#202023",
      color: "white",
    },
  },
};
const colors = {
  gray: {
    alpha: "#20202380",
    foreground: "#313134",
    background: "#202023",
  },
  primary: "#FFCDB2",
  secondary: "#FFB4A2",
  tertiary: "#E5989B",
  quaternary: "#E5989B",
  quinary: "#6D6875",
};
const components = {
  Text,
  Button,
  Link,
};
const fonts = {
  brand: {
    heading: "Lexend Deca",
    regular: "Raleway",
    mono: "mononoki",
  },
};
export const theme = extendTheme({
  colors,
  fonts,
  components,
  styles,
});
