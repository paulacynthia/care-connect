"use client";

import { post } from "@/data/api";
import { HospitalJob } from "@/data/types/hospitalJob";
import {
  Avatar,
  Button,
  Flex,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  Calendar,
  CircleCheckBig,
  MapPin,
  PiggyBank,
  Star,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export interface ShiftProps {
  id: string;
  shift: string;
  time: string;
}

interface HospitalJobModalApplyProps {
  isOpenModalApply: boolean;
  onCloseModalApply: () => void;
  hospitalJob: HospitalJob;
}

export function HospitalJobModalApply({
  hospitalJob,
  isOpenModalApply,
  onCloseModalApply,
}: HospitalJobModalApplyProps) {
  const selectShiftsIds = hospitalJob.availableShifts
    .filter((s) => s.userShiftCandidacy && s.userShiftCandidacy.length > 0)
    .map((shift) => shift.id);

  const [selectedShifts, setSelectedShifts] = useState(selectShiftsIds);

  const router = useRouter();

  const { data: session } = useSession();

  function toggleSelectedShift(shiftId: number) {
    setSelectedShifts((prevSelectedShifts) => {
      if (prevSelectedShifts.includes(shiftId)) {
        return prevSelectedShifts.filter((id) => id !== shiftId);
      } else {
        return [...prevSelectedShifts, shiftId];
      }
    });
  }

  function isSelected(shiftId: number) {
    return selectedShifts.includes(shiftId);
  }

  async function handleApply() {
    console.log("Pressionado");
    const response = await post(
      `/hospital-jobs/${hospitalJob.id}/candidacies`,
      {
        shiftIds: selectedShifts,
      }
    );

    if (response.ok) {
      console.log("Sucesso!");
    }
  }

  return (
    <Modal
      size="lg"
      motionPreset="slideInBottom"
      isOpen={isOpenModalApply}
      onClose={onCloseModalApply}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{hospitalJob.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDirection={"column"} gap="2rem">
            <Flex gap="0.5rem">
              <Avatar
                borderRadius={"md"}
                name={hospitalJob.hospital.name}
                size={"md"}
                bgColor="blueX.500"
                color="white"
              />
              <VStack gap="0" alignItems={"flex-start"}>
                <Text>{hospitalJob.hospital.name}</Text>
                <Text as="span" fontSize={"12px"}>
                  {hospitalJob.expertise}
                </Text>
              </VStack>
            </Flex>

            <List spacing={4} width="full" maxWidth={"20rem"}>
              <ListItem alignItems={"center"} color="gray.500">
                <ListIcon w={5} h={5} as={MapPin} color="blueX.900" />
                {hospitalJob.hospital.location}
              </ListItem>

              <ListItem alignItems={"center"} color="gray.500">
                <ListIcon w={5} h={5} as={Star} color="blueX.900" />
                {hospitalJob.hospital.score} estrelas
              </ListItem>

              <ListItem color="gray.500">
                <ListIcon w={5} h={5} as={PiggyBank} color="blueX.900" />
                {hospitalJob.payment} por hora
              </ListItem>

              <ListItem color="gray.500">
                <ListIcon w={5} h={5} as={Calendar} color="blueX.900" />
                Postado há X dias
              </ListItem>
            </List>

            <Flex flexWrap={"wrap"} gap="0.5rem">
              {hospitalJob.availableShifts.map((shift) => {
                return (
                  <Button
                    as={motion.div}
                    transition="0.5s linear"
                    cursor={"pointer"}
                    key={shift.id}
                    variant={isSelected(shift.id) ? "outline" : "solid"}
                    colorScheme={isSelected(shift.id) ? "blue" : "gray"}
                    size={"sm"}
                    leftIcon={
                      isSelected(shift.id) ? (
                        <CircleCheckBig size={"14"} />
                      ) : undefined
                    }
                    onClick={() => toggleSelectedShift(shift.id)}
                  >
                    {shift.shift} - {shift.initialHour} : {shift.finishHour}
                  </Button>
                );
              })}
            </Flex>
          </Flex>
        </ModalBody>

        <ModalFooter justifyContent={"center"}>
          <Button variant={"custom"} width="full" onClick={() => handleApply()}>
            {session ? "Aplicar" : "Faça login para aplicar"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
