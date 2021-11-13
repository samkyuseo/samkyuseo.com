import React from "react";
import { Box, Container, Link } from "@chakra-ui/layout";
import { Divider } from "@chakra-ui/layout";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <Divider borderColor="gray.foreground" mt="30px" />
      <Box py={5}>
        <Container color="senary" fontSize="12px" align="center">
          Built with 💜 by Samuel Kyuseo Lee
        </Container>
        <Container color="senary" fontSize="12px" align="center">
          Design inspo 💛 devaslife
        </Container>
        <Container align="center" mt="10px">
          <Link
            href="https://www.linkedin.com/in/samkyuseo/"
            target="_blank"
            marginRight="10px"
          >
            <BsLinkedin style={{ display: "inline-block" }} />
          </Link>
          <Link href="https://github.com/samkyuseo" target="_blank">
            <IoLogoGithub style={{ display: "inline-block" }} />
          </Link>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
