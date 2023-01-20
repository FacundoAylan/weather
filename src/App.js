import React, { useEffect, useState } from "react";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  CircularProgress,
  Container,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { getWeather, getForecast } from "./Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import { SearchIcon } from "@chakra-ui/icons";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Card from "./component/card/Card";




function App() {

  const weathers = useSelector((state) => state.weather);
  const forecast = useSelector( (state) => state.forecast);
  const error = useSelector((state) => state.error);

  const [ open, setOpen] = useState(true)

  const [search, setSeach] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather("argentina"));
    dispatch(getForecast("argentina"))
  }, [ dispatch ]);

  
  const onChange = (e) => {
    setSeach(e.target.value);
  };
  const handleSubmit = () => {
    dispatch(getWeather(search));
    dispatch(getForecast(search))
  };
  return (
    <>
      <Center>
        <Text
          fontSize={{ base: "25px", md: "35px", lg: "35px" }}
          mt="1%"
          p="0.5%"
          color='white'
        >
          React weather App
        </Text>
      </Center>
      {/* search */}
      <Center mt="7px">
        <Formik initialValues={{}} onSubmit={handleSubmit}>
          <Form>
            <InputGroup size="md">
              <Input
                fontSize={{ base: "12px", md: "22px", lg: "22px" }}
                pr="8rem"
                placeholder="Select a country..."
                value={search}
                onChange={onChange}
                background="white"
                border="2px"
                borderColor="black"
              />
              <InputRightElement>
                <Button type="submit">
                  <IconButton
                    colorScheme="blue"
                    aria-label="Search database"
                    icon={<SearchIcon />}
                    
                  />
                </Button>
              </InputRightElement>
            </InputGroup>
          </Form>
        </Formik>
      </Center>
      {/* search */}

      {weathers && forecast ? (
        <Center>
          <Card weathers={weathers} forecast={forecast}/>
        </Center>
      ) : (
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
      )}
      {error ? (
        <Container>
          <Modal isOpen={open} >
            <ModalOverlay />
            <ModalContent  ml={{base:'8px'}} mr={{base:'8px'}} mt={{base:'25vh'}}>
              <Alert status="error" bg='none' pt='50px' pl='40%'>
                <AlertIcon boxSize='80px'/>
              </Alert>
              <ModalHeader pl='40%'>{error}</ModalHeader>
              <ModalCloseButton onClick={()=>setOpen(false)}/>
            </ModalContent>
          </Modal>
        </Container>
      ) : (
        <></>
      )}
      <Box mt={3}>
        <Center>
          <a
            href="https://github.com/FacundoAylan"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton
              aria-label="github"
              variant="ghost"
              size="lg"
              isRound={true}
              _hover={{ bg: "#0D74FF" }}
              icon={<BsGithub size="40px" />}
              color='white'
            />
          </a>

          <a
            href="https://www.linkedin.com/in/facundo-aylan-582b52257/"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton
              aria-label="github"
              variant="ghost"
              size="lg"
              _hover={{ bg: "#0D74FF" }}
              icon={<BsLinkedin size="40px" />}
              color='white'
            />
          </a>
        </Center>
      </Box>
    </>
  );
}

export default App;
