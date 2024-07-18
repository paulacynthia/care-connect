import { Header } from "@/components/Header";
import { HealthUnit } from "@/components/HealthUnit";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Header />
      <Flex width="full" justifyContent={"center"} flexDirection={"column"}>
        <HealthUnit />
        <HealthUnit />
        <HealthUnit />
        <HealthUnit />
      </Flex>
    </>
  );
}
