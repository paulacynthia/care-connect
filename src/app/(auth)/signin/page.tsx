import { SignInForm } from "@/components/SignInForm";

import { Flex, Stack, Text } from "@chakra-ui/react";

import Link from "next/link";

export default function SignIn() {
  return (
    <Stack width="full" flexDirection="column">
      <Flex width="full" flexDirection="column" gap={["1rem"]} mb="2.5rem">
        <Text
          fontSize="3xl"
          fontWeight="bold"
          color="blueX.500"
          textAlign={["center", "start"]}
        >
          Login
        </Text>

        <Text fontSize="md" color="gray.500" textAlign={"center"}>
          Bem-vindo de volta! Logue-se para continuar!
        </Text>
      </Flex>

      <SignInForm />

      <Flex width="full" justifyContent={"center"}>
        <Text align={"center"}>
          Ainda não tem conta?{" "}
          <Link
            href={"/signup"}
            color={"blueX.500"}
            style={{
              textDecoration: "underline",
              textDecorationColor: "#253deb",
            }}
          >
            <Text as="span" color="blueX.500">
              Registre-se!
            </Text>
          </Link>
        </Text>
      </Flex>
    </Stack>
  );
}
