import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { it, describe, expect } from "vitest";
import InsertWords from "./index";

const insertClassic = {
  answer: [""],
  setValue: vi.fn(),
  changeDisabled: vi.fn(),
  text: "Hello world people",
  contentAnswer: ["world"],
  formDisabled: false,
  isToChoose: false,
  variants: [],
};

const insertVariants = {
  ...insertClassic,
  variants: [
    {
      idx: 0,
      value: "Hello",
      isFocused: false,
    },
    {
      idx: 1,
      value: "world",
      isFocused: false,
    },
    {
      idx: 2,
      value: "people",
      isFocused: false,
    },
  ],
};

const insertPuzzle = {
  ...insertClassic,
  contentAnswer: ["Hello", "world", "people"],
  isToChoose: true,
};

describe("Insert words classic without variants", () => {
  it("Count of inputs should be equal length of right answer", () => {
    render(<InsertWords {...insertClassic} />);
    const inputs = screen.getAllByRole("searchbox");
    expect(inputs.length).toBe(insertClassic.contentAnswer.length);
  });

  it("Should render 2 variants for 1 input", () => {
    render(<InsertWords {...insertVariants} />);
    const firstVariant = screen.getByRole("button", { name: /hello/i });
    const secondVariant = screen.getByRole("button", { name: /world/i });
    const input = screen.getByRole("searchbox");

    expect(firstVariant).toBeInTheDocument();
    expect(secondVariant).toBeInTheDocument();
    expect(input).toBeInTheDocument();

    userEvent.click(firstVariant);
    expect(input.value).toBe("Hello");
    userEvent.click(secondVariant);
    expect(input.value).toBe("world");
  });

  it("Should render puzzle", async () => {
    render(<InsertWords {...insertPuzzle} />);

    const inputs = screen.getAllByRole("searchbox");
    const puzzleOne = screen.getByRole("button", { name: /hello/i });
    const puzzleTwo = screen.getByRole("button", { name: /world/i });
    const puzzleThree = screen.getByRole("button", { name: /people/i });
    expect(inputs.length).toBe(insertPuzzle.contentAnswer.length);
    expect(puzzleOne).toBeInTheDocument();
    expect(puzzleTwo).toBeInTheDocument();
    expect(puzzleThree).toBeInTheDocument();
  });
});
