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
  Image,
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
import { getData } from "./Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import { SearchIcon } from "@chakra-ui/icons";
import { BsGithub, BsLinkedin } from "react-icons/bs";

import Icons from "./component/icons/Icons";


function App() {

  const weathers = useSelector((state) => state.weather);
  const error = useSelector((state) => state.error);

  const [ open, setOpen] = useState(true)

  const [search, setSeach] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData("argentina"));
  }, [ dispatch ]);

  
  const onChange = (e) => {
    setSeach(e.target.value);
  };
  const handleSubmit = () => {
    return dispatch(getData(search));
  };
  return (
    <Container>
      <Center>
        <Text
          fontSize={{ base: "25px", md: "35px", lg: "35px" }}
          mt="1%"
          p="0.5%"
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
                placeholder="Search your next weather..."
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

      {weathers ? (
        <Container
          bg="white"
          mt={10}
          w={{ base: "60vw", md: "35vw", lg: "25vw" }}
          h={{ base: "45vh", md: "55vh", lg: "60vh" }}
          borderRadius={12}
          pt={4}
          border="2px"
          borderColor="black"
          color="black"
        >
          <Center fontSize={{ base: "30px", md: "25px", lg: "30px" }} p={0}>
            {weathers.name.toUpperCase()}
          </Center>

          <Center bg="#0D74FF" borderRadius={12}>
            <Image
              src={Icons(weathers.weather[0].main)}
              alt="icons-weather"
              type="img/svg"
              boxSize={{ base: "55vh", md: "45vh", lg: "35vh" }}
              borderRadius="full"
              h={{ base: "20vh", md: "25vh", lg: "30vh" }}
            />
          </Center>

          <Text>Temperature : {weathers.main.temp.toFixed(0)}&deg; K</Text>
          <Text>
            Max\Min: {weathers.main.temp_min.toFixed(0)}&deg; K \{" "}
            {weathers.main.temp_max.toFixed(0)}&deg; K
          </Text>
        </Container>
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
              <Text fontSize={{ base: "20px", md: "25px", lg: "36px" }}>
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
            />
          </a>
        </Center>
      </Box>
    </Container>
  );
}

export default App;
