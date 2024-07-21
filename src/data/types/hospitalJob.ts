import { Shift } from "./shift";

export interface HospitalJob {
  id: number;
  title: string;
  description: string;
  expertise: string;
  payment: number;
  requirements: string;
  benefits: string;
  createdAt: Date;
  hospitalId: number;
  hospital: {
    id: number;
    name: string;
    location: string;
    score: number;
  };
  availableShifts: Shift[];
}

