"use client";

import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Flex,
  IconButton,
  Select,
  useDisclosure,
  Text,
  VStack,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { Filter, Search } from "lucide-react";
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
    <Box as="form" onSubmit={handleSearch}>
      <Flex alignItems={"center"} maxWidth={["30rem", "45rem"]} gap="0.5rem">
        <InputGroup size="md" width="full">
          <Input
            type="text"
            name="q"
            borderColor={"gray.200"}
            background={"white"}
            placeholder="Pesquise sobre os hospitais aqui"
            _placeholder={{ opacity: 1, color: "gray.500" }}
            required
          />
          <InputRightElement width="3.5rem">
            <IconButton
              type="submit"
              aria-label="Filter"
              h="1.75rem"
              size="sm"
              icon={<Search color="#184796" size={"1rem"} />}
              variant={"ghost"}
            />
          </InputRightElement>
        </InputGroup>

        <IconButton
          aria-label="Filter"
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
        </Drawer>
      </Flex>
    </Box>
  );
}
