import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, it, describe, expect } from "vitest";
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
    // // await userEvent.type(textarea, "hello!");
    // // fireEvent.change(textarea, { target: { value: "Hello!" } });
    // expect(input.innerHTML).toBe(/hello!/);
  });
});
