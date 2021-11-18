import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/layout";
const Card = () => {
  return (
    <Box bg="gray.foreground" borderRadius="10px" padding="20px">
      <Text variant="section-title" fontFamily="mono">
        Learning React in 7 days
      </Text>
      <Box align="left">
        <Text>
          Due to work needs and also personal interest nicely lining up, I
          decided to learn React in 7 days. In addition to learning the basics
          of React, I also wanted to learn more about CSS framework commonly
          used to React so I decided to learn Chakra UI as well.
        </Text>
        <Text>
          Learning frontend was pretty cool because I got flex both left and
          right brain every day.
        </Text>
      </Box>
    </Box>
  );
};

export default Card;
