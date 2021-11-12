import {
  Box,
  Container,
  Stack,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import { IoLogoGithub } from "react-icons/io5";
import { HamburgerIcon } from "@chakra-ui/icons";

import Logo from "./Logo";

const Navbar = () => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg="gray.alpha"
      css={{ backdropFilter: "blur(5px)" }}
      zIndex={1}
    >
      <Container
        display="flex"
        p={3}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        {/* Logo */}
        <Logo />
        {/* Navbar items */}
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 200, md: 0 }}
          color="white"
        >
          <Link href="/videos" variant="nav-link">
            videos
          </Link>
          <Link href="/contact" variant="nav-link">
            contact
          </Link>
          <Link
            href="https://github.com/samkyuseo"
            display="flex"
            style={{ gap: 4 }}
            alignItems="center"
            variant="nav-link"
          >
            <IoLogoGithub />
            source
          </Link>
        </Stack>
        {/* Subnavbar items */}
        <Box flex={1} align="right">
          <Box display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                boxSize={10}
                as={IconButton}
                icon={<HamburgerIcon color="white" />}
                bg="gray.alpha"
                _hover={{ bg: "gray.foreground" }}
                _active={{ bg: "gray.foreground" }}
                _focus={{ boxShadow: "none" }}
              />
              <MenuList
                bg="gray.background"
                color="white"
                borderColor="gray.foreground"
              >
                <MenuItem
                  _hover={{ bg: "gray.foreground" }}
                  _focus={{ bg: "gray.foreground" }}
                >
                  Videos
                </MenuItem>
                <MenuItem _hover={{ bg: "gray.foreground" }}>Contact</MenuItem>
                <MenuItem isDisabled={true}>Tech Blog</MenuItem>
                <MenuDivider color="gray.foreground" />
                <MenuItem style={{ gap: 5 }} _hover={{ bg: "gray.foreground" }}>
                  <IoLogoGithub />
                  Github
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
