"use client";

import {
  Button,
  Collapse,
  Flex,
  IconButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { Menu, X } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

export function HeaderClient() {
  const { isOpen, onToggle } = useDisclosure();
  const { data: session } = useSession();

  console.log("session", { session });

  return (
    <>
      <Flex display={{ base: "none", md: "flex" }} align="center">
        <Stack direction="row" spacing={6}>
          {session ? (
            <Button
              onClick={() => signOut()}
              variant="link"
              fontSize="sm"
              fontWeight={400}
            >
              Sair
            </Button>
          ) : (
            <Button
              onClick={() => signIn()}
              variant="link"
              fontSize="sm"
              fontWeight={400}
            >
              Entrar
            </Button>
          )}
        </Stack>
      </Flex>

      <IconButton
        onClick={onToggle}
        icon={isOpen ? <X /> : <Menu />}
        variant={"ghost"}
        aria-label={"Toggle Navigation"}
        display={{ md: "none" }}
      />

      <Collapse in={isOpen} animateOpacity>
        <Flex
          width="full"
          direction="column"
          alignItems="flex-start"
          bg="white"
          p={4}
          display={{ md: "none" }}
          gap="1rem"
        >
          {session ? (
            <Button
              onClick={() => signOut()}
              variant="link"
              fontSize="sm"
              fontWeight={400}
            >
              Sair
            </Button>
          ) : (
            <Button
              onClick={() => signIn()}
              variant="link"
              fontSize="sm"
              fontWeight={400}
            >
              Entrar
            </Button>
          )}
        </Flex>
      </Collapse>
    </>
  );
}
