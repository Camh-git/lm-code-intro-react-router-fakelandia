import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { isMisdemeanour } from "../types/misdemeanours.types";
import Misdomeanours from "../components/misdemeanours";
//The above show up as unused import errors but are essential, the code that relies on them is commented out due to bugs

describe("Render test", () => {
  //render(<Misdomeanours/>);
  test("Find the rendered tite", () => {
    expect(screen.getByText("Misdemeanours")).toBeInTheDocument();
  });
});
describe("Testing the fetch", () => {
  //render(<Misdomeanours>)
  test("Check that the fetch returns 3 entries", () => {
    expect(screen.getAllByRole("img").length).toBe(3);
  });
  test("Check that the first entry for citizen ID is valid", () => {
    expect(screen.getAllByTestId("citizenId")[0]).toBeLessThanOrEqual(5000000);
    expect(screen.getAllByTestId("citizenId")[0]).toBeGreaterThanOrEqual(0);
  });
  test("Check that the first entry for misdemeanour type is valid", () => {
    expect(
      isMisdemeanour(screen.getAllByTestId("incidentType")[0].textContent)
    ).toBe(true);
  });
});
export {};
