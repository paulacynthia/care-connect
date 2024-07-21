import { HospitalJobCard } from "@/components/HospitalJobCard";
import { api } from "@/data/api";
import { HospitalJob } from "@/data/types/hospitalJob";
import { Flex, Text } from "@chakra-ui/react";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

interface SearchProps {
  searchParams: SearchParams;
}

interface SearchParams {
  [key: string]: string;
}

async function getHospitalJobs(query: string = "") {
  const headersConfig = new Headers(headers());
  const apiURL = `/hospital-jobs${query}`;
  const response = await api(apiURL, headersConfig);

  const hospitalJobs: ApiResponse<HospitalJob[]> = await response.json();
  return hospitalJobs.data;
}

export default async function Search({ searchParams }: SearchProps) {
  const queryString =
    searchParams &&
    "?" +
      Object.entries(searchParams)
        .map(
          ([key, value]) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        )
        .join("&");

  if (!queryString) return redirect("/");

  const hospitalJobs = await getHospitalJobs(queryString);

  return (
    <Flex flexDirection={"column"}>
      <Flex gap="1rem" flexWrap={"wrap"} justifyContent={"center"}>
        {hospitalJobs &&
          hospitalJobs.map((hospitalJob) => (
            <HospitalJobCard key={hospitalJob.id} hospitalJob={hospitalJob} />
          ))}

        {!hospitalJobs && (
          <Flex
            width="full"
            flexDirection={"column"}
            justifyContent="center"
            textAlign={"center"}
            height="50vh"
            gap="1.5rem"
          >
            <Text>Ops! 😿</Text>
            <Text>Não encontramos vagas com a filtragem escolhida</Text>

            <Link
              href={"/"}
              color={"blueX.500"}
              style={{
                textDecoration: "underline",
                textDecorationColor: "#253deb",
              }}
            >
              <Text as="span" color="blueX.500">
                Voltar para a home
              </Text>
            </Link>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
