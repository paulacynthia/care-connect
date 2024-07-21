import { UserShiftCandidacy } from "./userShiftCandidacy";

export interface Shift {
  id: number;
  shift: string;
  initialHour: number;
  finishHour: number;
  hospitalJobId: number;
  userShiftCandidacy?: UserShiftCandidacy[];
}