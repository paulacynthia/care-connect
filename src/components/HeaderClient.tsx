"use client";

import {
  Avatar,
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

  return (
    <>
      <Flex display={{ base: "none", md: "flex" }} align="center">
        <Stack direction="row">
          {session ? (
            <Flex>
              <Button
                onClick={() => signOut()}
                variant="link"
                fontSize="sm"
                fontWeight={400}
              >
                Sair
              </Button>
              <Avatar
                name={session.user?.name || "Eu"}
                size={"sm"}
                bgColor="blueX.500"
                color="white"
              />
            </Flex>
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

      <Flex
        display={{ base: "flex", md: "none" }}
        direction="row-reverse"
        alignItems="center"
      >
        {session && (
          <Avatar
            name={session.user?.name || "Eu"}
            size={"sm"}
            bgColor="blueX.500"
            color="white"
          />
        )}
        <IconButton
          onClick={onToggle}
          justifyContent="center"
          icon={isOpen ? <X /> : <Menu />}
          variant={"ghost"}
          aria-label={"Toggle Navigation"}
        />

        <Collapse in={isOpen} animateOpacity>
          <Flex
            width="full"
            direction="column"
            alignItems="flex-start"
            bg="white"
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
      </Flex>
    </>
  );
}
