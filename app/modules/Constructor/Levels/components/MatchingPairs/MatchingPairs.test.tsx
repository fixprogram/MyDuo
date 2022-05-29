import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MatchingPairs from "./MatchingPairs";

const props = {
  number: 1,
  answer: "32",
  setAnswer: () => {},
  setReady: () => {},
  variantsCount: 8,
  initialVariants: [],
};

describe("Testing MatchingPairs component", () => {
  test("Adding and removing variants", () => {
    render(<MatchingPairs {...props} variantsCount={6} />);

    const variants = screen.queryAllByRole("listitem");
    const addPairBtn = screen.getByRole("button", { name: /add pair/i });

    expect(variants.length).toBe(6);

    userEvent.click(addPairBtn);
    const newVariants = screen.queryAllByRole("listitem");
    expect(newVariants.length).toBe(8);
  });
});
