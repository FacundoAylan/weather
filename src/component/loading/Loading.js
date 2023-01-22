import { Center, CircularProgress, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

function Loading () {
  return (
    <Container
    mt={10}
    w={{ base: "60vw", md: "35vw", lg: "25vw" }}
    h={{ base: "45vh", md: "55vh", lg: "60vh" }}
    borderRadius={12}
    pt={4}
    pl={{ base: "15vw", md: "9vw", lg: "6vw" }}
  >
    <Center>
      <Flex flexDirection="column">
        <CircularProgress
          isIndeterminate
          color="#0D74FF"
          size={{ base: "100px", md: "150px", lg: "200px" }}
          thickness="4px"
          //
        />
        <Text fontSize={{ base: "20px", md: "25px", lg: "36px" }} color='white'>
          LOADING WEATHER
        </Text>
      </Flex>
    </Center>
  </Container>
  )
};

export default Loading;