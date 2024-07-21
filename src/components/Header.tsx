import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { HeaderClient } from "./HeaderClient";

export function Header() {
  return (
    <Box>
      <Flex
        bg={"white"}
        color={"white"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"white"}
        align={"center"}
        justifyContent={"space-between"}
        gap="1rem"
      >
        <Image
            src={"/assets/care-connect-logo.svg"}
            alt="Care Connect Logo"
            width={30}
            height={80}
            quality={100}
          />
        <HeaderClient />

        
      </Flex>
    </Box>
  );
}
