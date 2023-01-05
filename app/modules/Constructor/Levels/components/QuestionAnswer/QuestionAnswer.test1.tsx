import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import QuestionAnswer from ".";

const props = {
  number: 2,
  answer: "",
  setAnswer: jest.fn(),
  setReady: jest.fn(),
  setQuestion: jest.fn(),
  keywords: [],
  setKeywords: jest.fn(),
};

// describe("QuestionAnswer check", () => {
//   render(<QuestionAnswer {...props} />);
//   const input = screen.getByPlaceholderText(/set question/i);

//   it("initially should be empty", async () => {
//     expect(input).toHaveTextContent("");
//     await userEvent.type(input, "Hello!");
//   });
// });
