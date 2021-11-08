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
  useColorModeValue,
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
      bg="#4A556890"
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
        >
          <Link href="/videos" pl={2}>
            Videos
          </Link>
          <Link href="/contact" pl={2}>
            Contact
          </Link>

          <Link
            href="https://github.com/samkyuseo"
            display="flex"
            style={{ gap: 4 }}
            pl={2}
            alignItems="center"
          >
            <IoLogoGithub />
            Github
          </Link>
        </Stack>
        {/* Subnavbar items */}
        <Box flex={1} align="right">
          <Box display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                boxSize={10}
                as={IconButton}
                icon={<HamburgerIcon />}
                bg="whiteAlpha.90"
              />
              <MenuList>
                <MenuItem>Videos</MenuItem>
                <MenuItem>Contact</MenuItem>
                <MenuItem isDisabled={true}>Tech Blog</MenuItem>
                <MenuDivider />
                <MenuItem style={{ gap: 5 }}>
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
