"use client";

import {
  Avatar,
  Box,
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
import { Star } from "lucide-react";

export function HealthUnit() {
  return (
    <Box p="8px" minWidth="100%">
      <Card background={"white"} p="0.4rem">
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

            {/* <Image
              src={"/assets/test.jpeg"}
              alt=""
              width={80}
              height={80}
              quality={100}
              
            /> */}
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
        <CardFooter p="0.5rem" justifyContent={"flex-end"}>
          <VStack alignItems={"flex-end"} justifyContent={"flex-end"}>
            <Flex alignItems={"center"}  gap="0.5rem">
              <Text
                fontSize={"14px"}
                fontWeight={"semibold"}
                color={"blueX.900"}
              >
                $ 48 / hour
              </Text>
              <Icon
                color={"yellow.400"}
                w={4}
                h={4}
                as={Star}
                fill={"yellow.400"}
              />{" "}
              4.5
            </Flex>
            <HStack>
              <Tag
                size="sm"
                borderRadius={"sm"}
                variant="subtle"
                colorScheme="blue"
              >
                STAFF
              </Tag>
              <Tag
                size="sm"
                borderRadius={"sm"}
                variant="subtle"
                colorScheme="red"
              >
                DAYS
              </Tag>
              <Tag
                size="sm"
                borderRadius={"sm"}
                variant="subtle"
                colorScheme="green"
              >
                FLEXIBLE START
              </Tag>
            </HStack>
          </VStack>
        </CardFooter>
      </Card>
    </Box>
  );
}
