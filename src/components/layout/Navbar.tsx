import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
import { ImBooks } from "react-icons/im";
import { IoLogoGithub } from "react-icons/io5";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <>
      <Box
        position="fixed"
        as="nav"
        w="100%"
        css={{ backdropFilter: "blur(10px)" }}
        zIndex={1}
        bg="gray.100"
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
          <Flex alignItems="center" mr={10} pl={{ base: 4, md: 0 }}>
            <ImBooks size="30px" />
            <Heading size="md" letterSpacing={"tighter"}>
              Sam Lee
            </Heading>
          </Flex>
          {/* Navbar items */}
          <Stack
            direction={{ base: "column", md: "row" }}
            display={{ base: "none", md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 200, md: 0 }}
          >
            <Link href="/posts">Posts</Link>
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
          {/* Subnavbar */}
          <Box flex={1} align="right">
            <Box display={{ base: "inline-block", md: "none" }}>
              <Menu>
                <MenuButton as={IconButton} icon={<HamburgerIcon />} />
                <MenuList>
                  <MenuItem command="⌘T">Posts</MenuItem>
                  <MenuItem command="⌘N">Github</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
