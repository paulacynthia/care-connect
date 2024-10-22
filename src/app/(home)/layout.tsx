import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SearchForm } from "@/components/SearchForm";
import { Flex, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface HomeLayoutProps {
  children: ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <Flex flexDirection={"column"} height={"100vh"} gap="2rem">
      <Header />
      <SearchForm />
      <VStack
        flex={1}
        p={["0.5rem", "1rem"]}
        width={"full"}
        maxWidth={"150rem"}
        spacing={"1.5rem"}
      >
        {children}
      </VStack>
      <Footer />
    </Flex>
  );
}
