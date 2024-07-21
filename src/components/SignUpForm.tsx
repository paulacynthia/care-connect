"use client";
import { Button, Stack } from "@chakra-ui/react";
import { FormEvent } from "react";
import { Input } from "./Form/Input";
import { PasswordInput } from "./Form/PasswordInput";

export function SignUpForm() {
  async function handleRegisterSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log("formData", Object.fromEntries(formData));

    const response = await fetch("/api/auth/user", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    console.log("response", response);
  }

  return (
    <form onSubmit={handleRegisterSubmit} noValidate>
      <Stack spacing={"4"}>
        <Input
          name={"name"}
          label={"Nome:"}
          placeholder="Seu nome"
          type="text"
          isRequired
        />
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
        mt="6"
        variant={"custom"}
        size="lg"
        mb="2rem"
      >
        Cadastre-se
      </Button>
    </form>
  );
}
