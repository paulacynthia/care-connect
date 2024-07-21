import { Button, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Input } from "./Input";

interface PasswordInputProps {
  showPassword?: boolean;
}

export function PasswordInput({ showPassword = false }: PasswordInputProps) {
  const [show, setShow] = useState(showPassword);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        name={"password"}
        label={"Senha:"}
        type={show ? "text" : "password"}
        pr="4.5rem"
        placeholder="Dever ter no mínimo 6 caracteres"
        isRequired
      />
      <InputRightElement width="4.5rem" mt="2rem">
        <Button variant="ghost" h="1.75rem" size="sm" onClick={handleClick}>
          {show ? <EyeOff color="#253deb" /> : <Eye color="#253deb" />}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
