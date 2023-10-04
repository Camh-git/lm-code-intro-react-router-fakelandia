import { createContext } from "react";
export const MISDEMEANOURS = [
  "rudeness",
  "vegetables",
  "lift",
  "united",
] as const;
export type MisdemeanourKind = (typeof MISDEMEANOURS)[number];

export const JUST_TALK = "just-talk";
export type JustTalk = typeof JUST_TALK;

export type Misdemeanour = {
  citizenId: number;
  misdemeanour: MisdemeanourKind;
  date: string; // we'll stringify this for easy sending via HTTP rather than storing the full Date object
};
export const placeholderMisdemeanour: Misdemeanour = {
  citizenId: 0,
  misdemeanour: "rudeness",
  date: "",
};

export const MisdemeanourContext = createContext<Misdemeanour[]>([
  placeholderMisdemeanour,
]);
