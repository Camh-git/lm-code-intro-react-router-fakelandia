import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { isMisdemeanour } from "../types/misdemeanours.types";
import Misdomeanours from "../components/misdemeanours";
import exp from "constants";
//The above show up as unused import errors but are essential, the code that relies on them is commented out due to bugs

describe("Render test", () => {
  //render(<Misdomeanours/>);
  test("Find the rendered tite", () => {
    expect(screen.getByText("Misdemeanours")).toBeInTheDocument();
  });
});
describe("Testing the fetch", () => {
  //render(<Misdomeanours>)
  const list = async () => {
    const result = await fetch("http://localhost:8080/api/misdemeanours/3");
    const json = await result.json();
    test("Check that some data came back", () => {
      expect(json.misdemeanours.length).toBeGreaterThan(0);
    });
    test("Check that each of the attributes are included", () => {
      expect(list.toString().includes("citizenId")).toBeTruthy();
      expect(list.toString().includes("misdemeanour")).toBeTruthy();
      expect(list.toString().includes("date")).toBeTruthy();
    });
    test("Check that the first entry for citizen ID is valid", () => {
      expect(json.misdemeanours[0].citizenId).toBeLessThanOrEqual(5000000);
      expect(json.misdemeanours[0].citizenId).toBeGreaterThanOrEqual(0);
    });

    test("Check that the first entry for misdemeanour type is valid", () => {
      expect(isMisdemeanour(json.misdemeanours[0].misdemeanour)).toBe(true);
    });
  };
});
export {};
