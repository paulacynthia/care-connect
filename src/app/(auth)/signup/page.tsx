import { SignUpForm } from "@/components/SignUpForm";
import { Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function SignUp() {
  return (
    <Stack width="full" flexDirection="column">
      <Flex width="full" flexDirection="column" gap={["1rem"]} mb="2.5rem">
        <Text
          fontSize="3xl"
          fontWeight="bold"
          color="blueX.500"
          textAlign={["center", "start"]}
        >
          Cadastro
        </Text>

        <Text fontSize="md" color="gray.500" textAlign={"center"}>
          Faça seu cadastro e tenha acesso ...
        </Text>
      </Flex>

      <SignUpForm />

      <Flex width="full" justifyContent={"center"}>
        <Text align={"center"}>
          Já tem conta?{" "}
          <Link
            href={"/signin"}
            color={"blueX.500"}
            style={{
              textDecoration: "underline",
              textDecorationColor: "#253deb",
            }}
          >
            <Text as="span" color="blueX.500">
              Faça seu login!
            </Text>
          </Link>
        </Text>
      </Flex>
    </Stack>
  );
}
