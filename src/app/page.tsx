import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HealthUnit } from "@/components/HealthUnit";
import { SearchForm } from "@/components/SearchForm";
import { Box, Flex, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex flexDirection={"column"} height={"100vh"}>
      <Header />
      <VStack
        flex={1}
        p={["0.5rem", "1rem"]}
        width={"full"}
        maxWidth={"150rem"}
        overflow={["none", "auto"]}
        spacing={"1.5rem"}
      >
        <SearchForm />
        <Flex gap="1rem" flexWrap={"wrap"} justifyContent={"center"}>
          <HealthUnit />
          <HealthUnit />
          <HealthUnit />
          <HealthUnit />
          <HealthUnit />
          <HealthUnit />
        </Flex>
      </VStack>
      <Footer />
    </Flex>
  );
}
