"use client";

import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure
} from "@chakra-ui/react";
import { Search } from "lucide-react";
import { FormEvent } from "react";

export function SearchForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    const query = data.q;
    console.log("query", query);
  }

  return (
    <Box as="form" onSubmit={handleSearch} display={"flex"} justifyContent={"center"}>
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
            required
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

        {/* <IconButton
          aria-label="Filter"
          background={"white"}
          icon={<Filter color="#184796" size={"1rem"} />}
          onClick={onOpen}
          variant={"outline"}
        />

        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Filtros:</DrawerHeader>

            <DrawerBody>
              <Flex width="full" gap="1rem" flexDirection={"column"}>
                <Flex gap="0.5rem" flexDirection={"column"}>
                  <Text>Geral:</Text>
                  <Select borderColor="gray.200" background={"white"}>
                    <option selected hidden disabled value="">
                      Selecione uma ordenação
                    </option>
                    <option value="payment-ASC">Maior remuneração</option>
                    <option value="grade-ASC">Maior nota</option>
                    <option value="date-ASC">Mais recente</option>
                    <option value="date-DESC">Mais antigo</option>
                  </Select>
                </Flex>

                <Flex width="full" gap="0.5rem" flexDirection={"row"}>
                  <VStack width="full" alignItems={"flex-start"}>
                    <Text>Data inicial:</Text>
                    <Input
                      placeholder="Select Date and Time"
                      size="md"
                      type="date"
                    />
                  </VStack>

                  <VStack width="full" alignItems={"flex-start"}>
                    <Text>Data final:</Text>
                    <Input
                      placeholder="Select Date and Time"
                      size="md"
                      type="date"
                    />
                  </VStack>
                </Flex>

                <VStack width="full" alignItems={"flex-start"}>
                  <Text>Avaliação mínima:</Text>
                  <NumberInput width="full" step={0.25} min={0} max={5}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </VStack>

                <VStack width="full" alignItems={"flex-start"}>
                  <Text>Remuneração mínima:</Text>
                  <NumberInput width="full" step={0.25} min={0} max={5}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </VStack>
              </Flex>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancelar
              </Button>
              <Button backgroundColor="blueX.500" color="white">
                Filtrar
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer> */}
      </Flex>
    </Box>
  );
}
