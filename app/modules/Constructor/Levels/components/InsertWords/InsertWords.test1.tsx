import { screen, render, fireEvent } from "@testing-library/react";
import InsertWords from "./index";

const props = {
  number: 2,
  answer: "",
  setAnswer: jest.fn(),
  setReady: jest.fn(),
};

// describe("InsertWords check", () => {
//   render(<InsertWords {...props} />);
//   const textarea = screen.getByRole("textbox");

//   it("initially should be empty", async () => {
//     expect(textarea).toHaveTextContent("");
//     expect(textarea).toHaveTextContent("");
//   });
// });
