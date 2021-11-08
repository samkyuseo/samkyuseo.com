import { Link, Flex, Heading } from "@chakra-ui/react";
import { ImBooks } from "react-icons/im";
const Logo = () => {
  return (
    <Link href="/" textDecoration="none" color="white">
      <Flex alignItems="center" mr={10} pl={{ base: 4, md: 0 }}>
        <ImBooks size="30px" />
        <Heading
          size="30px"
          fontSize="18px"
          fontStyle="bold"
          letterSpacing={"tighter"}
        >
          Sam Lee
        </Heading>
      </Flex>
    </Link>
  );
};

export default Logo;