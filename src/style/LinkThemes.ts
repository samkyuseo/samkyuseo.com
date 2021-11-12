export const LinkThemes = {
  sizes: {},
  variants: {
    "nav-logo": {
      fontFamily: "brand.heading",
      _focus: { textDecoration: "none" },
      _hover: {
        color: "primary",
        textDecoration: "none",
        img: { transform: "rotate(5deg)" },
      },
      img: {
        transition: "200ms ease",
        transform: "rotate(-20deg)",
      },
      py: "5px",
      px: "10px",
      mr: "30px",
      borderRadius: "5px",
      display: "flex",
    },
    "nav-link": {
      fontFamily: "brand.regular",
      _hover: { bg: "gray.foreground", textDecoration: "none" },
      _focus: { bg: "gray.foreground", textDecoration: "none" },
      py: "5px",
      px: "10px",
      borderRadius: "5px",
    },
  },
};
