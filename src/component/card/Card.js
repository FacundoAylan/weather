import React from "react";
import { Box, Center, Divider, Flex, Image, Text } from "@chakra-ui/react";

function Card({ weathers, forecast }) {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var date = day + '/' + month + '/' + year;

  const forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' +  forecast.list[1].dt_txt.substring(11, 13);
  const forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' +  forecast.list[2].dt_txt.substring(11, 13);
  const forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' +  forecast.list[3].dt_txt.substring(11, 13);
  const url = "http://openweathermap.org/img/w/";
  return (
      <Flex
        bg="#0D74FF"
        color="white"
        mt={10}
        w={{ base: "60vw", md: "35vw", lg: "700px" }}
        h={{ base: "45vh", md: "55vh", lg: "50vh" }}
        borderRadius={12}
        border="2px"
        borderColor="black"
        position="relative"
      >
        <Box w="45%" h="100%" >

          <Box position="absolute" w='45%'>
            <Center>
              <Text fontSize="100%" >
                {weathers.name.toUpperCase()}
              </Text>
            </Center>
            <Center>
              <Text position="absolute" pl={2} mt={5}>
                {date}
              </Text>
            </Center>
            <Center>
              <Text fontSize={36} position="absolute" mt='80px'>
                {(weathers.main.temp - 273.15).toFixed(1)}ºC
              </Text>
            </Center>
          </Box>

          <Box ml='14%' mt='6%'position="absolute" borderRadius={12}>
          </Box>

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
          <Box pt={5} pl={3}>
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

          <Divider pt={5}/>

          <Flex pt={10} ml={2}>
            <Box>
              <Text fontSize='90%'>{forecastDate3}h</Text>
              <Center>
                <Text>{forecast.list[1].weather[0].description}</Text>
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

            <Box ml={5}>
              <Text fontSize='90%'>{forecastDate6}h</Text>

              <Center>
                <Text>{forecast.list[2].weather[0].description}</Text>
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

            <Box ml={5}>
              <Text fontSize='90%'>{forecastDate9}h</Text>

              <Center>
                <Text>{forecast.list[3].weather[0].description}</Text>
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
