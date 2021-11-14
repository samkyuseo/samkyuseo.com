// https://mantine.dev/core/timeline/
import {
  Box,
  Image,
  Container,
  Text,
  Heading,
  Flex,
  Link,
  Button,
} from "@chakra-ui/react";
import { BioYear } from "./../components/Bio/BioYear";
import { BioSection } from "./../components/Bio/BioSection";
import Hero from "../components/Hero/Hero";
import { IoLogoGithub } from "react-icons/io5";

const About = () => {
  return (
    <Box pt={20}>
      <Container align="center">
        <Hero />
        <Box display={{ md: "flex" }} mt="20px">
          <Box flexGrow={1} textAlign="left">
            <Heading as="h2" fontFamily="brand.heading">
              Samuel Kyuseo Lee
            </Heading>
            <Text fontFamily="brand.regular" fontSize="15px">
              fullstack engineer
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
        <Flex textAlign="left">
          <Text variant="section-title">🚀about</Text>
        </Flex>
        <Box textAlign="left">
          <Text>
            &emsp; Sam is a <Text variant="highlight">software engineer</Text>{" "}
            based in the San Francisco Bay Area. He is passionate about full
            stack application development because of the diversity of tech he
            gets to learn and code.
          </Text>
          <br />
          <Text>
            &emsp; Sam works at a very early stage startup called{" "}
            <Link href="https://www.atomuscyber.com" variant="highlight">
              Atomus
            </Link>
            , where he was hired as the{" "}
            <Text variant="highlight">first employee</Text>. Thanks to this
            opportunity, he has been able to help create the company's desktop
            app and dev ops tools. Currently, he is actively working on the
            company's cloud monitoring solution.
          </Text>
        </Box>
        <br />
        <Button
          as="a"
          bg="senary"
          _hover={{ background: "secondary" }}
          _focus={{ background: "secondary", outline: "none" }}
          href="https://github.com/samkyuseo"
          target="_blank"
          style={{ gap: "3px" }}
        >
          <IoLogoGithub /> github
        </Button>
        <br />
        <br />
        <Flex textAlign="left">
          <Text variant="section-title">🌎bio</Text>
        </Flex>
        <Box textAlign="left">
          <BioSection>
            <BioYear bg="senary">2015</BioYear>
            Opened the mac terminal and felt like a cool hacker. Tried code
            academy.
          </BioSection>
          <BioSection>
            <BioYear bg="quinary">2017</BioYear>
            Enrolled at the University of Southern California as a chemical
            engineering major. Reintroduced to coding through an engineering
            seminar class.
          </BioSection>
          <BioSection>
            <BioYear bg="quaternary">2017</BioYear>Won my first hackathon!
          </BioSection>
          <BioSection>
            <BioYear bg="tertiary">2018</BioYear>Secured my first tech
            internship!
          </BioSection>
          <BioSection>
            <BioYear bg="secondary">2021</BioYear>
            Graduated with a Bachelors of Science, Computer Science. 3.72 grade
            point average.
          </BioSection>
          <BioSection>
            <BioYear bg="primary">2021</BioYear>
            Joined{" "}
            <Link href="www.atomuscyber.com" target="_blank">
              Atomus
            </Link>{" "}
            as their first official hire.
          </BioSection>
        </Box>
        <br />
        <Flex textAlign="left">
          <Text variant="section-title">📚stack</Text>
        </Flex>
        <Box textAlign="left">
          <BioSection>
            <BioYear>languages</BioYear>
            <Text variant="bubble">typescript</Text>{" "}
            <Text variant="bubble">c++</Text>{" "}
          </BioSection>
          <BioSection>
            <BioYear>frontend</BioYear>
            <Text variant="bubble" ml="11px">
              react
            </Text>{" "}
            <Text variant="bubble">react query</Text>{" "}
            <Text variant="bubble">chakra ui</Text>
          </BioSection>
          <BioSection>
            <BioYear>backend</BioYear>
            <Text variant="bubble" ml="15px">
              node
            </Text>{" "}
            <Text variant="bubble">express</Text>{" "}
            <Text variant="bubble">firebase</Text>{" "}
            <Text variant="bubble">azure</Text>{" "}
            <Text variant="bubble">mongo db</Text>
          </BioSection>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
