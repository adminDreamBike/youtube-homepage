"use client"

import { SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  InputRightElement,
  InputGroup,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { BsMic } from "react-icons/bs";
import { StyledInputContainer } from "./SearchInput.styled";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const SearchInput = () => {
  const [value, setValue] = useState('')
  const router = useRouter()
  return (
    <StyledInputContainer>
      <Flex height="40px">
        <InputGroup size="lg" marginRight="12px">
          <Input
            type="text"
            placeholder="Buscar"
            border="1px solid lightgray"
            height="40px"
            onChange={(event) => setValue(event.target.value)}
          />
          <InputRightElement
            width="3.5rem"
            background="lightgray"
            position="absolute"
            // right="80px"
            height="40px"
          >
            <IconButton
              aria-label="Search database"
              icon={<SearchIcon />}
              color="gray"
              colorScheme="gray"
              onClick={() => router.push(`/results?q=${value}`)}
            />
          </InputRightElement>
        </InputGroup>
        <IconButton
          aria-label="Search database"
          icon={<BsMic />}
          color="teal"
          colorScheme="teal"
          fontSize="20px"
          borderRadius="50px"
          backgroundColor="lightblue"
          variant="solid"
          minHeight="40px"
          minWidth="40px"
        />
      </Flex>
    </StyledInputContainer>
  );
};
