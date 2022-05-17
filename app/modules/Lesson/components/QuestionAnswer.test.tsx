import { screen, render } from "@testing-library/react";
import QuestionAnswer from "./QuestionAnswer";

describe("Testing footer", () => {
  test("check button idle state", () => {
    render(<QuestionAnswer />);
    const answerInput = screen.getByRole("textbox");

    expect(answerInput.value).toBe("");
  });
});
