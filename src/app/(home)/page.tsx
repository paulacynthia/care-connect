import { HospitalJobCard } from "@/components/HospitalJobCard";
import { api } from "@/data/api";
import { HospitalJob } from "@/data/types/hospitalJob";
import { Flex } from "@chakra-ui/react";
import { Metadata } from "next";
import { headers } from "next/headers";

async function getHospitalJobs() {
  const response = await api("/hospital-jobs", headers());

  const hospitalJobs: ApiResponse<HospitalJob[]> = await response.json();
  return hospitalJobs.data;
}

export const metadata: Metadata = {
  title: "Vagas",
};

export default async function Home() {
  const hospitalJobs = await getHospitalJobs();

  return (
    <Flex flexDirection={"column"} gap="0.5rem">
      <Flex gap="1rem" flexWrap={"wrap"} justifyContent={"center"}>
        {hospitalJobs?.map((hospitalJob) => (
          <HospitalJobCard key={hospitalJob.id} hospitalJob={hospitalJob} />
        ))}
      </Flex>
    </Flex>
  );
}
