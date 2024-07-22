"use client";

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

interface DrawerFilterProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DrawerFilter({ isOpen, onClose }: DrawerFilterProps) {
  const router = useRouter();

  function handleFilter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    const query = Object.entries(data)
      .filter(([_, value]) => value)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    router.replace(`/search?${query}`);
    onClose();
  }

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
      <DrawerOverlay />
      <DrawerContent>
        <form onSubmit={handleFilter}>
          <DrawerCloseButton />
          <DrawerHeader>Filtros:</DrawerHeader>

          <DrawerBody>
            <Flex width="full" gap="1rem" flexDirection={"column"}>
              <Flex width="full" gap="0.5rem" flexDirection={"row"}>
                <VStack width="full" alignItems={"flex-start"}>
                  <Text>Hora inicial:</Text>
                  <NumberInput width="full" step={1} min={0} max={24}>
                    <NumberInputField name="initialHour" />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </VStack>
                <VStack width="full" alignItems={"flex-start"}>
                  <Text>Hora final:</Text>
                  <NumberInput width="full" step={1} min={0} max={24}>
                    <NumberInputField name="finishHour" />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </VStack>
              </Flex>

              <VStack width="full" alignItems={"flex-start"}>
                <Text>Avaliação mínima:</Text>
                <NumberInput width="full" step={0.25} min={0} max={5}>
                  <NumberInputField name="minimumScore" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </VStack>

              <VStack width="full" alignItems={"flex-start"}>
                <Text>Remuneração mínima:</Text>
                <NumberInput width="full" step={15} min={10}>
                  <NumberInputField name="minimumPayment" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </VStack>

              <Flex gap="0.5rem" flexDirection={"column"}>
                <Text>Ordenar por:</Text>
                <HStack
                  gap={["1rem", "0.5rem"]}
                  flexDirection={["column", "row"]}
                  width="full"
                >
                  <Select
                    name="orderBy"
                    borderColor="gray.200"
                    background={"white"}
                    minWidth="70%"
                  >
                    <option selected hidden disabled value="">
                      Campo
                    </option>
                    <option value="payment">Remuneração</option>
                    <option value="createdAt">Data de postagem</option>
                  </Select>
                  <Select
                    name="orderType"
                    borderColor="gray.200"
                    background={"white"}
                  >
                    <option selected hidden disabled value="">
                      Ordem
                    </option>
                    <option value="desc">Desc &#8595;</option>
                    <option value="asc">Asc &#8593;</option>
                  </Select>
                </HStack>
              </Flex>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" variant={"custom"} color="white">
              Filtrar
            </Button>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
}
