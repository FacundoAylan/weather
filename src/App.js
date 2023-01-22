import React, { useEffect, useState } from "react";
import {
  Alert,
  AlertIcon,
  Box,
  Center,
  Container,
  IconButton,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { getWeather, getForecast } from "./Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Card from "./component/card/Card";
import Forms from "./component/form/Form";
import Loading from "./component/loading/Loading";

function App() {
  const weathers = useSelector((state) => state.weather);
  const forecast = useSelector((state) => state.forecast);
  const error = useSelector((state) => state.error);

  const [open, setOpen] = useState(true);

  const [search, setSeach] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather("argentina"));
    dispatch(getForecast("argentina"));
  }, [dispatch]);

  const onChange = (e) => {
    setSeach(e.target.value);
  };
  const handleSubmit = () => {
    dispatch(getWeather(search));
    dispatch(getForecast(search));
  };
  return (
    <>
      <Center>
        <Text
          fontSize={{ base: "25px", md: "35px", lg: "35px" }}
          mt="1%"
          p="0.5%"
          color="white"
        >
          React weather App
        </Text>
      </Center>
      {/* search */}
      <Center mt="7px">
        <Forms
          handleSubmit={handleSubmit}
          onChange={onChange}
          search={search}
        />
      </Center>
      {/* search */}

      {weathers && forecast ? (
        <Card weathers={weathers} forecast={forecast} />
      ) : (
        <Loading />
      )}
      {error ? (
        <Container>
          <Modal isOpen={open}>
            <ModalOverlay />
            <ModalContent
              ml={{ base: "8px" }}
              mr={{ base: "8px" }}
              mt={{ base: "25vh" }}
            >
              <Alert status="error" bg="none" pt="50px" pl="40%">
                <AlertIcon boxSize="80px" />
              </Alert>
              <ModalHeader pl="40%">{error}</ModalHeader>
              <ModalCloseButton onClick={() => setOpen(false)} />
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
              color="white"
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
              color="white"
            />
          </a>
        </Center>
      </Box>
    </>
  );
}

export default App;
