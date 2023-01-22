import React from "react";
import { Box, Center, Divider, Flex, Image, Text } from "@chakra-ui/react";

function Card({ weathers, forecast }) {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var date = day + "/" + month + "/" + year;

  const forecastDate3 =
    forecast.list[1].dt_txt.substring(8, 10) +
    "/" +
    forecast.list[1].dt_txt.substring(5, 7) +
    "/" +
    forecast.list[1].dt_txt.substring(0, 4) +
    " " +
    forecast.list[1].dt_txt.substring(11, 13);
  const forecastDate6 =
    forecast.list[2].dt_txt.substring(8, 10) +
    "/" +
    forecast.list[2].dt_txt.substring(5, 7) +
    "/" +
    forecast.list[2].dt_txt.substring(0, 4) +
    " " +
    forecast.list[2].dt_txt.substring(11, 13);
  const forecastDate9 =
    forecast.list[3].dt_txt.substring(8, 10) +
    "/" +
    forecast.list[3].dt_txt.substring(5, 7) +
    "/" +
    forecast.list[3].dt_txt.substring(0, 4) +
    " " +
    forecast.list[3].dt_txt.substring(11, 13);
  const url = "http://openweathermap.org/img/w/";
  return (
    <Flex
      bg="#0D74FF"
      color="white"
      mt={{ base: "5px", md: "10px", lg: "10px" }}
      w={{ base: "90vw", md: "600px", lg: "700px" }}
      h={{ base: "70vh", md: "58vh", lg: "50vh" }}
      ml={{ base: "5%", md: "10vw", lg: "25vw" }}
      flexDirection={{ base: "column", md: "row", lg: "row" }}
      borderRadius={12}
      border="2px"
      borderColor="black"
      position="relative"
    >
      <Box
        w={{ base: "100%", md: "45%", lg: "45%" }}
        h={{ base: "40%", md: "100%", lg: "100%" }}
      >
        <Box position="absolute" w={{ base: "100%", md: "45%", lg: "45%" }}>
          <Center>
            <Text fontSize="100%">{weathers.name.toUpperCase()}</Text>
          </Center>
          <Center>
            <Text position="absolute" pl={2} mt={5}>
              {date}
            </Text>
          </Center>
          <Center>
            <Text
              fontSize={{ base: "25px", md: "36px", lg: "36px" }}
              position="absolute"
              mt="80px"
            >
              {(weathers.main.temp - 273.15).toFixed(1)}ºC
            </Text>
          </Center>
        </Box>

        <Box ml="14%" mt="6%" position="absolute" borderRadius={12}></Box>

        <Image
          src="https://i.ibb.co/WKWWyTd/jujuy.jpg"
          alt="icons-weather"
          type="img"
          borderTopLeftRadius={12}
          w="100%"
          h="100%"
        />
      </Box>

      <Box>
        <Box
          pt={{ base: "2px", md: "5px", lg: "15px" }}
          pl={3}
          fontSize={{ base: "75%", md: "100%", lg: "100%" }}
        >
          <Text>
            Temperatura máxima: {(weathers.main.temp_max - 273.15).toFixed(1)}ºC
          </Text>
          <Text>
            Temperatura mínima: {(weathers.main.temp_min - 273.15).toFixed(1)}ºC
          </Text>
          <Text>
            sensación térmica: {(weathers.main.feels_like - 273.15).toFixed(1)}
            ºC
          </Text>
          <Text>Humedad: {weathers.main.humidity}%</Text>
          <Text>Velocidad del viento: {weathers.wind.speed}m/s</Text>
        </Box>

        <Divider pt={{ base: "0", md: "5%", lg: "5%" }} />

        <Flex
          pt={{ base: "5%", md: "10%", lg: "10%" }}
          ml={{ base: "2%", md: "5%", lg: "5%" }}
          w="100%"
        >
          <Box>
            <Text fontSize={{ base: "80%", md: "80%", lg: "90%" }}>
              {forecastDate3}h
            </Text>
            <Center>
              <Text fontSize={{ base: "65%", md: "80%", lg: "100%" }}>
                {forecast.list[1].weather[0].description}
              </Text>
            </Center>

            <Center>
              <Image
                src={url + forecast.list[1].weather[0].icon + ".png"}
                alt="icon"
              />
            </Center>

            <Center>
              <Text>{(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC</Text>
            </Center>
          </Box>

          <Box ml={{ base: "10%", md: "10%", lg: "10%" }}>
            <Text fontSize={{ base: "80%", md: "80%", lg: "90%" }}>
              {forecastDate6}h
            </Text>

            <Center>
              <Text fontSize={{ base: "65%", md: "80%", lg: "100%" }}>
                {forecast.list[2].weather[0].description}
              </Text>
            </Center>

            <Center>
              <Image
                src={url + forecast.list[2].weather[0].icon + ".png"}
                alt="icon"
              />
            </Center>

            <Center>
              <Text>{(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC</Text>
            </Center>
          </Box>

          <Box ml={{ base: "10%", md: "5px", lg: "5px" }}>
            <Text fontSize={{ base: "80%", md: "80%", lg: "90%" }}>
              {forecastDate9}h
            </Text>

            <Center>
              <Text fontSize={{ base: "65%", md: "80%", lg: "100%" }}>
                {forecast.list[3].weather[0].description}
              </Text>
            </Center>

            <Center>
              <Image
                src={url + forecast.list[3].weather[0].icon + ".png"}
                alt="icon"
              />
            </Center>

            <Center>
              <Text>{(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC</Text>
            </Center>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Card;
