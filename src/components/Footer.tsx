"use client";

import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export function Footer() {
  return (
    <Box
      bg={"blueX.500"}
      color={useColorModeValue("gray.50", "gray.900")}
    >
      <Container
        as={Stack}
        spacing={1}
        py={["0.5rem", "1rem"]}
        justify={"center"}
        align={"center"}
      >
        <Text fontSize={["14px", "1rem"]}>© 2024 Care Connect. All rights reserved</Text>
      </Container>
    </Box>
  );
}
