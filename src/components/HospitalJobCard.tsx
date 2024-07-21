"use client";

import { HospitalJob } from "@/data/types/hospitalJob";
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
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { differenceInDays } from "date-fns";
import { ArrowRight, Star } from "lucide-react";
import { useState } from "react";
import { HospitalJobModalApply } from "./HealthModalApply";

interface HospitalJobCardProps {
  hospitalJob: HospitalJob;
}

export function HospitalJobCard({ hospitalJob }: HospitalJobCardProps) {
  const {
    isOpen: isOpenHealthModalApply,
    onOpen: onOpenHealthModalApply,
    onClose: onCloseHealthModalApply,
  } = useDisclosure();

  const [selectedHospitalJob, setHealthUnitSelected] =
    useState<HospitalJob | null>(null);

  const daysPassed = differenceInDays(new Date(), new Date(hospitalJob.createdAt));

  return (
    <>
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
              name={hospitalJob.hospital.name}
              size={"md"}
              bgColor="blueX.500"
              color="white"
            />
            <Text fontSize={"12px"} color={"grayX.500"}>
              {daysPassed === 0 ? "Publicada hoje" : `Publicada há ${daysPassed} dia${daysPassed > 1 && "s"}`}
            </Text>
          </Flex>
        </CardHeader>
        <CardBody p="0.4rem">
          <VStack alignItems={"flex-start"} gap="5px">
            <Text fontWeight={"semibold"}>{hospitalJob.title}</Text>
            <Text fontSize={"14px"}>{hospitalJob.hospital.name}</Text>
            <Text fontSize={"14px"}>{hospitalJob.hospital.location}</Text>
          </VStack>
        </CardBody>
        <CardFooter width="full" p="0.5rem" justifyContent={"flex-start"}>
          <VStack
            width="full"
            alignItems={"flex-start"}
            justifyContent={"flex-end"}
          >
            <Flex alignItems={"center"} gap="0.5rem">
              <Text
                fontSize={"14px"}
                fontWeight={"semibold"}
                color={"blueX.900"}
              >
                R$ {hospitalJob.payment}/hora
              </Text>
              {hospitalJob.hospital.score}
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
                {hospitalJob.availableShifts.length} TURNOS DISPONÍVEIS
              </Tag>

              <Button
                variant={"outline"}
                size="sm"
                borderRadius={"md"}
                borderColor="blueX.500"
                color="blueX.500"
                rightIcon={<ArrowRight size="20px" />}
                onClick={() => {
                  setHealthUnitSelected(hospitalJob);
                  onOpenHealthModalApply();
                }}
              >
                Ver mais
              </Button>
            </HStack>
          </VStack>
        </CardFooter>
      </Card>

      {!!selectedHospitalJob && (
        <HospitalJobModalApply
          hospitalJob={selectedHospitalJob}
          isOpenModalApply={isOpenHealthModalApply}
          onCloseModalApply={onCloseHealthModalApply}
        />
      )}
    </>
  );
}
