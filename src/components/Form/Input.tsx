import {
  FormControl,
  FormLabel,
  Text,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  isRequired?: boolean;
}

export function Input({ name, label, isRequired, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && 
        <FormLabel htmlFor="">{label} {" "}
          {isRequired && <Text as="span" color="red.400">*</Text> }
        </FormLabel>}

      <ChakraInput
        id={name}
        name={name}
        _placeholder={{
          color: "gray.400"
        }}
        borderColor={"gray.300"}
        focusBorderColor="blueX.900"
        {...rest}
      />
    </FormControl>
  );
}