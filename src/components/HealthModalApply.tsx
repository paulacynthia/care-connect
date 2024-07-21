"use client";

import { post } from "@/data/api";
import { HospitalJob } from "@/data/types/hospitalJob";
import { formatCurrency, formatTime } from "@/utils";
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
import { differenceInDays } from "date-fns";
import { motion } from "framer-motion";
import {
  Calendar,
  CircleCheckBig,
  HandCoins,
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

const MotionButton = motion(Button);
const buttonVariants = {
  unchecked: {
    scale: 1,
    transition: { type: 'spring', stiffness: 300 },
  },
  checked: {
    scale: 1.05,
    transition: { type: 'spring', stiffness: 300 },
  },
};

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

  const daysPassed = differenceInDays(new Date(), new Date(hospitalJob.createdAt));

  return (
    <Modal
      size="lg"
      motionPreset="scale"
      isOpen={isOpenModalApply}
      onClose={onCloseModalApply}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{hospitalJob.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDirection={"column"} gap="1.5rem">
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
            <VStack alignItems="flex-start">
              <Text fontWeight={500}>Descrição da vaga:</Text>
              <Text fontSize={14}>{hospitalJob.description}</Text>
              <Text fontSize={14}>{hospitalJob.requirements}</Text>
            </VStack>
            <List spacing={2} width="full" maxWidth={"20rem"}>
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
                {formatCurrency(hospitalJob.payment)} por hora
              </ListItem>

              <ListItem color="gray.500">
                <ListIcon w={5} h={5} as={Calendar} color="blueX.900" />
                {daysPassed === 0 ? "Postado hoje" : `Postado há ${daysPassed} dias`}
              </ListItem>
              <ListItem color="gray.500">
                <ListIcon w={5} h={5} as={HandCoins} color="blueX.900" />
                {hospitalJob.benefits}
              </ListItem>
            </List>

            <Flex flexWrap={"wrap"} gap="0.5rem">
              {hospitalJob.availableShifts.map((shift) => {
                const formattedInitialHour = formatTime(shift.initialHour);
                const formattedFinishHour = formatTime(shift.finishHour);

                return (
                  // <Button
                  //   as={motion.div}
                  //   transition="0.5s linear"
                  //   cursor={"pointer"}
                  //   key={shift.id}
                  //   variant={isSelected(shift.id) ? "outline" : "solid"}
                  //   colorScheme={isSelected(shift.id) ? "blue" : "gray"}
                  //   size={"sm"}
                  //   leftIcon={
                  //     isSelected(shift.id) ? (
                  //       <CircleCheckBig size={"14"} />
                  //     ) : undefined
                  //   }
                  //   onClick={() => toggleSelectedShift(shift.id)}
                  // >
                  //   {shift.shift} - {formattedInitialHour} até às {formattedFinishHour}

                  // </Button>
                  <MotionButton
                    transition="0.5s linear"
                    cursor="pointer"
                    variant={isSelected(shift.id) ? "outline" : "solid"}
                    colorScheme={isSelected(shift.id) ? "blue" : "gray"}
                    key={shift.id}
                    size="sm"
                    leftIcon={
                      isSelected(shift.id) ? (
                        <CircleCheckBig size="14" />
                      ) : undefined
                    }
                    onClick={() => toggleSelectedShift(shift.id)}
                    variants={buttonVariants}
                    animate={isSelected(shift.id) ? 'checked' : 'unchecked'}
                  >
                    {shift.shift} - {formattedInitialHour} até às {formattedFinishHour}
                  </MotionButton>
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
