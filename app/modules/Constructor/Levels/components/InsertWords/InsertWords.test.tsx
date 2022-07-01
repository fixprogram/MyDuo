import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, it, describe, expect } from "vitest";
import InsertWords from "./InsertWords";

const props = {
  number: 2,
  answer: "",
  setAnswer: vi.fn(),
  setReady: vi.fn(),
};

describe("InsertWords check", () => {
  render(<InsertWords {...props} />);
  const textarea = screen.getByRole("textbox");

  it("initially should be empty", async () => {
    expect(textarea).toHaveTextContent("");
    expect(textarea).toHaveTextContent("");
  });
});
