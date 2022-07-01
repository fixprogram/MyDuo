import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { it, describe, expect } from "vitest";
import QuestionAnswer from ".";

const props = {
  number: 2,
  answer: "",
  setAnswer: vi.fn(),
  setReady: vi.fn(),
  setQuestion: vi.fn(),
  keywords: [],
  setKeywords: vi.fn(),
};

describe("QuestionAnswer check", () => {
  render(<QuestionAnswer {...props} />);
  const input = screen.getByPlaceholderText(/set question/i);

  it("initially should be empty", async () => {
    expect(input).toHaveTextContent("");
    await userEvent.type(input, "Hello!");
  });
});
