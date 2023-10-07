import { render, screen } from "@testing-library/react";
import { validateInput } from "../components/confess";
import Confess from "../components/confess";
//The above show up as unused import errors but are essential, the code that relies on them is commented out due to bugs
describe("Sanity check", () => {
  test("Guaranteed to pass", () => {
    expect(1).toBe(1);
  });
});
describe("Render test", () => {
  //render(<Confess/>);
  const subject = screen.getByTestId("confessSubject");
  const description = screen.getByTestId("confessDescription");
  const submitBtn = screen.getByTestId("submit");
  test("Find the rendered tite", () => {
    expect(
      screen.getByText(
        "It's very difficult to catch people commiting misdomeanours"
      )
    ).toBeInTheDocument();
  });

  test("Check validation components rendered", () => {
    expect(subject).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });
});

describe("Test the validation", () => {
  /*Chosen rules: must have a subject of > 5 chars, a description >20 and a reason selected */
  //render(<Confess>)
  //Placeholder data
  let testData = {
    subject: "validIssue",
    type: 1,
    description:
      "Yay, now I have to think of some placeholder content that is at least 20 chars long",
  };
  test("Make sure the placeholder data is good", () => {
    expect(validateInput(testData.subject, 1, testData.description)).toBe(true);
  });

  test("Check the min subject length", () => {
    //Check valid and invalid subject lines
    expect(validateInput("Hi", 1, testData.description)).toBe(false);
    expect(
      validateInput(
        "Some nice and long subject matter",
        testData.type,
        testData.description
      )
    ).toBe(true);
  });

  test("Check type validation", () => {
    expect(validateInput(testData.subject, 0, testData.description)).toBe(
      false
    );
    expect(validateInput(testData.subject, 1, testData.description)).toBe(true);
    expect(validateInput(testData.subject, 2, testData.description)).toBe(true);
    expect(validateInput(testData.subject, 3, testData.description)).toBe(true);
    expect(validateInput(testData.subject, 4, testData.description)).toBe(true);
    expect(validateInput(testData.subject, 5, testData.description)).toBe(true);
    expect(validateInput(testData.subject, 6, testData.description)).toBe(
      false
    );
  });

  test("Check the min description length", () => {
    //Check valid and invalid descriptions
    expect(validateInput(testData.subject, 1, "shortDesc")).toBe(false);
    expect(
      validateInput(
        testData.subject,
        testData.type,
        "A nice and long description"
      )
    ).toBe(true);
  });
});
