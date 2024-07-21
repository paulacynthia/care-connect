import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <Grid
      height="100vh"
      gridTemplateColumns={["repeat(1, 1fr)", "full", "repeat(2, 1fr)"]}
    >
      <GridItem bg="#f1f7fc">
        <Flex
          width="full"
          height="full"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          padding={["2rem 4rem 2rem 4rem"]}
          gap="2rem"
        >
          {children}
        </Flex>
      </GridItem>

      <GridItem bg="blueX.500">
        <Flex
          width="full"
          height="full"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          padding={["2rem 4rem 2rem 4rem"]}
          gap="2rem"
        >
          <Flex maxWidth="300px">
            <Text
              fontSize="3xl"
              fontWeight="bold"
              color="white"
              textAlign="center"
            >
              Care Connect
            </Text>
          </Flex>

          <Flex maxWidth="350px">
            <Text fontSize="md" color="white" textAlign="center">
              Marketplace inovador dedicado a conectar enfermeiros a
              oportunidades de trabalho em unidades de saúde.
            </Text>
          </Flex>

          <Image
            src={"/assets/team.svg"}
            width={400}
            height={450}
            alt={"Time de enfermeiros"}
          />
        </Flex>
      </GridItem>
    </Grid>
  );
}
