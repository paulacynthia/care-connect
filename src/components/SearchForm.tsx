"use client";

import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import { Filter, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { DrawerFilter } from "./DrawerFilter";

export function SearchForm() {
  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    const query = data.q;
    router.push(`/search?q=${query}`);
  }

  return (
    <Flex
      width="full"
      gap="0.5rem"
      justifyContent="center"
      alignItems="center"
      px="0.5rem"
    >
      <Box
        as="form"
        onSubmit={handleSearch}
        display={"flex"}
        justifyContent={"center"}
      >
        <Flex
          flexDirection={["column", "row"]}
          width="full"
          maxWidth="45rem"
          alignItems={"center"}
          gap="0.5rem"
        >
          <InputGroup size="md" width="full" gap="0.5rem">
            <Input
              type="text"
              name="q"
              borderColor={"gray.200"}
              background={"white"}
              placeholder="Pesquisar"
              _placeholder={{ opacity: 1, color: "gray.500" }}
              maxWidth={"full"}
            />
            <InputRightElement position={"relative"}>
              <IconButton
                type="submit"
                aria-label="Filter"
                h="full"
                w="full"
                size="sm"
                icon={<Search color="#184796" size={"1rem"} />}
                color={"gray.200"}
                background={"white"}
                border={"1px solid"}
                position={"relative"}
                _hover={{}}
              />
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Box>

      <IconButton
        aria-label="Filter"
        background={"white"}
        icon={<Filter color="#184796" size={"1rem"} />}
        h="full"
        w="auto"
        variant={"outline"}
        onClick={onOpen}
        type="submit"
        size="sm"
        color={"gray.200"}
        border={"1px solid"}
        position={"relative"}
        _hover={{}}
      />

      {isOpen && <DrawerFilter isOpen={isOpen} onClose={onClose} />}
    </Flex>
  );
}
