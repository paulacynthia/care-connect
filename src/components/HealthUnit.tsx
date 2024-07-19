"use client";

import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  HStack,
  Icon,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ArrowRight, Star } from "lucide-react";

export function HealthUnit() {
  return (
    <Card p="8px" minWidth={["full", "25rem"]} background={"white"}>
      <CardHeader p="0.4rem">
        <Flex
          width="full"
          alignItems={"center"}
          justifyContent={"space-between"}
          gap="4px"
        >
          <Avatar
            borderRadius={"md"}
            name="Registered Nurse"
            size={"md"}
            bgColor="blueX.500"
            color="white"
          />

          <Text fontSize={"12px"} color={"grayX.500"}>
            4 dias atrás
          </Text>
        </Flex>
      </CardHeader>
      <CardBody p="0.4rem">
        <VStack alignItems={"flex-start"} gap="5px">
          <Text fontWeight={"semibold"}>Registered Nurse - CVICU</Text>
          <Text fontSize={"14px"}>
            Children&lsquo;s Hospital Of Los Angeles
          </Text>
          <Text fontSize={"14px"}>Los Angeles, CA</Text>
        </VStack>
      </CardBody>
      <CardFooter width="full" p="0.5rem" justifyContent={"flex-start"}>
        <VStack
          width="full"
          alignItems={"flex-start"}
          justifyContent={"flex-end"}
        >
          <Flex alignItems={"center"} gap="0.5rem">
            <Text fontSize={"14px"} fontWeight={"semibold"} color={"blueX.900"}>
              R$ 50/hora
            </Text>
            4.5
            <Icon
              color={"yellow.400"}
              w={4}
              h={4}
              as={Star}
              fill={"yellow.400"}
            />
          </Flex>

          <HStack width="full" justifyContent={"space-between"}>
            <Tag
              size="sm"
              padding={"0.2rem"}
              borderRadius={"sm"}
              variant="subtle"
              colorScheme="green"
            >
              3 TURNOS DISPONÍVEIS
            </Tag>

            <Button
              variant={"outline"}
              size="sm"
              borderRadius={"md"}
              borderColor="blueX.500"
              color="blueX.500"
              rightIcon={<ArrowRight size="20px" />}
            >
              Ver mais
            </Button>
          </HStack>
        </VStack>
      </CardFooter>
    </Card>
  );
}
