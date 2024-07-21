"use client";

import { Button, Stack, useToast } from "@chakra-ui/react";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { Input } from "./Form/Input";
import { PasswordInput } from "./Form/PasswordInput";

export function SignInForm() {
  const router = useRouter();
  const toast = useToast();
  async function handleLoginSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (!response?.error) {
      router.push("/");
      router.refresh();
    } else {
      toast({
        position: "top",
        title: "Erro ao fazer login",
        description: "Verifique suas credenciais e tente novamente.",
        status: "error",
        duration: 5000,
        isClosable: true,
      })
    }
  }

  return (
    <form onSubmit={handleLoginSubmit} noValidate>
      <Stack spacing={"4"}>
        <Input
          name={"email"}
          label={"E-mail:"}
          placeholder="Seu e-mail"
          type="email"
          isRequired
        />

        <PasswordInput />
      </Stack>

      <Button
        width="full"
        type="submit"
        variant={"custom"}
        mt="6"
        rightIcon={<LogIn />}
        mb="2rem"
      >
        Entrar
      </Button>
    </form>
  );
}
