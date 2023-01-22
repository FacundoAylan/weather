import React from "react";
import { Formik, Form } from "formik";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

function Forms({ handleSubmit, onChange, search }) {
  return (
    <Formik initialValues={{}} onSubmit={handleSubmit}>
      <Form>
        <InputGroup size="md">
          <Input
            fontSize={{ base: "12px", md: "22px", lg: "22px" }}
            pr="8rem"
            placeholder="Escribe el pais..."
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
  );
}

export default Forms;
