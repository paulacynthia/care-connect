import { UserShiftCandidacy } from "./userShiftCandidacy";

export interface Shift {
  id: number;
  shift: string;
  initialHour: string;
  finishHour: string;
  hospitalJobId: number;
  userShiftCandidacy?: UserShiftCandidacy[];
}