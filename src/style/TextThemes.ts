export const TextThemes = {
  default: {},
  variants: {
    "section-title": {
      fontFamily: "brand.header",
      fontSize: "20px",
      fontWeight: "bold",
      pb: "10px",
    },
    highlight: {
      display: "inline",
      fontFamily: "mono",
      background: "senary",
      _hover: { bg: "tertiary" },
      px: "5px",
      borderRadius: "5px",
      letterSpacing: "tighter",
    },
    bubble: {
      px: "5px",
      borderRadius: "5px",
      display: "inline",
      letterSpacing: "tighter",
      fontFamily: "mono",
      bg: "gray.foreground",
    },
  },
};
