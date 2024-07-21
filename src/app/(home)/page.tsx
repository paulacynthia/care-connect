import { HospitalJobCard } from "@/components/HospitalJobCard";
import { api } from "@/data/api";
import { HospitalJob } from "@/data/types/hospitalJob";
import { Flex } from "@chakra-ui/react";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function getHospitalJobs() {
  const response = await api("/hospital-jobs");

  const hospitalJobs: ApiResponse<HospitalJob[]> = await response.json();
  return hospitalJobs.data;
}

export const metadata: Metadata = {
  title: "Vagas",
};

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log("home session: ", session);
  const hospitalJobs = await getHospitalJobs();

  return (
    <Flex flexDirection={"column"}>
      <Flex gap="1rem" flexWrap={"wrap"} justifyContent={"center"}>
        {hospitalJobs.map((hospitalJob) => (
          <HospitalJobCard key={hospitalJob.id} hospitalJob={hospitalJob} />
        ))}
      </Flex>
    </Flex>
  );
}
