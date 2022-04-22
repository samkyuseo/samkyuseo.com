import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";
const Hero = () => {
  return (
    <Box>
      <Image src="/hi.png" boxSize="210px" mb="20px" marginX="auto" />
      <Box
        bg="gray.foreground"
        borderRadius="5px"
        fontFamily="brand.regular"
        fontSize="sm"
        letterSpacing="wide"
        py="18px"
        px={{ base: "10px", md: 0 }}
      >
        <Text>Hi! I'm a Software Engineer based in the Bay Area.</Text>
      </Box>
    </Box>
  );
};

export default Hero;
