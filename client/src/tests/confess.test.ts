import { render, screen } from "@testing-library/react";
import Confess from "../components/confess";
//The above show up as unused import errors but are essential, the code that relies on them is commented out due to bugs
describe("Sanity check", () => {
  test("Guaranteed to pass", () => {
    expect(1).toBe(1);
  });
});
describe("Render test", () => {
  //render(<Confess/>);
  test("Find the rendered tite", () => {
    expect(
      screen.getByText(
        "It's very difficult to catch people commiting misdomeanours"
      )
    ).toBeInTheDocument();
  });
});
describe("Test the validation", () => {
  //render(<Confess>)
  //get the relevent fields and submit btn
  const subject = screen.getByTestId("confessSubject");
  const description = screen.getByTestId("confessDescription");
  const submitBtn = screen.getByTestId("submit");
  test("Check the min subject length", () => {
    //set and check a good inital value  for subject, make it invalid to check the submit button, then check it re-enables
    subject.nodeValue = "validIssue";
    expect(subject.nodeValue.length).toBeGreaterThanOrEqual(5);
    subject.nodeValue = "va";
    expect(submitBtn.hasAttribute("disabled")).toBe(true);
    subject.nodeValue = "validIssue";
    expect(submitBtn.hasAttribute("disabled")).toBe(false);
  });

  test("Check the min description length", () => {
    //set and check a good inital description, make it invalid to check the submit button, then check it re-enables
    description.nodeValue =
      "Yay, now I have to think of some placeholder content that is at least 20 chars long";
    expect(description.nodeValue.length).toBeGreaterThanOrEqual(20);
    description.nodeValue = "shortdesc";
    expect(submitBtn.hasAttribute("disabled")).toBe(true);
    description.nodeValue =
      "Yay, now I have to think of some placeholder content that is at least 20 chars long";
    expect(submitBtn.hasAttribute("disabled")).toBe(false);
  });
});
