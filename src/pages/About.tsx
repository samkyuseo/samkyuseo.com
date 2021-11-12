// https://mantine.dev/core/timeline/
import { Box, Image, Container, Text, Heading, Flex } from "@chakra-ui/react";
const About = () => {
  return (
    <Box pt={20}>
      <Container align="center">
        <Image src="/hi.png" boxSize="210px" mb="20px" />
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
        <Box display={{ md: "flex" }} mt="20px">
          <Box flexGrow={1} textAlign="left">
            <Heading as="h2" fontFamily="brand.heading">
              Samuel Kyuseo Lee
            </Heading>
            <Text fontFamily="brand.regular" fontSize="15px">
              Fullstack Engineer ( Frontend / Backend / Design )
            </Text>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/headshot.jpg"
              alt="Profile image"
            />
          </Box>
        </Box>
        <Flex>
          <Text fontFamily="brand.regular" fontSize="20px" fontWeight="bold">
            Work
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default About;
