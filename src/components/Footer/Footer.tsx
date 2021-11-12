import React from "react";
import { Box, Container } from "@chakra-ui/layout";
const Footer = () => {
  return (
    <Box py={10}>
      <Container color="senary" fontSize="12px" align="center">
        Built By: Samuel Lee
      </Container>
      <Container color="senary" fontSize="12px" align="center">
        Design Inspired By: Takuya Matsuyama
      </Container>
    </Box>
  );
};

export default Footer;
