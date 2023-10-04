import { createContext } from "react";
import { Misdemeanour } from "../types/misdemeanours.types";

interface IMisdemeanourContext {
  misdemeanours: Misdemeanour[] | undefined;
  setMisdemeanours: React.Dispatch<
    React.SetStateAction<Misdemeanour[] | undefined>
  >;
}

export const MisdemeanourContext = createContext<IMisdemeanourContext>({
  misdemeanours: [{ citizenId: 0, misdemeanour: "rudeness", date: "" }],
  setMisdemeanours: () => {},
});

export default MisdemeanourContext;
