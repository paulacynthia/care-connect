"use client";
import { Button, Stack, useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import * as yup from "yup";
import { Input } from "./Form/Input";
import { PasswordInput } from "./Form/PasswordInput";

const schema = yup.object().shape({
  name: yup.string().required("Campo Obrigatório"),
  email: yup.string().email("Campo de email inválido").required("Campo Obrigatório"),
  password: yup.string().min(6, "O número mínimo de caracteres deve ser 6").required("Campo Obrigatório"),
})
export function SignUpForm() {
  const toast = useToast();
  const router = useRouter();

  async function handleRegisterSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const jsonBody = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
      };

      await schema.validate(jsonBody);

      await fetch("/api/auth/user", {
        method: "POST",
        body: JSON.stringify(jsonBody),
      });
      router.push("/signin");
      router.refresh();
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        toast({
          position: "top",
          title: "Erro ao cadastrar",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        })
      }
      else {
        toast({
          position: "top",
          title: "Erro ao cadastrar",
          description: "Ocorreu um erro inesperado, tente novamente mais tarde",
          status: "error",
          duration: 5000,
          isClosable: true,
        })
      }
    }
  }

  return (
    <form onSubmit={handleRegisterSubmit}>
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
