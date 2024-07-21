import { HospitalJob } from "./hospitalJob";

export interface Hospital {
  id: number;
  name: string;
  score: number;
  location: string;
  HospitalJobs: HospitalJob[];
}

