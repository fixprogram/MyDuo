import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Skill, { SkillContext } from "../..";
import { MemoryRouter } from "react-router-dom";

// const defaultProps = {
//   userAnswer: [""],
//   setUserAnswer: jest.fn(),
//   keyDownCheck: jest.fn(),
// };

const insertClassicProps = {
  answer: [""],
  setValue: jest.fn(),
  changeDisabled: jest.fn(),
  text: "Hello world people",
  contentAnswer: ["world"],
  formDisabled: false,
  isToChoose: false,
  variants: [],
};

const insertVariants = {
  ...insertClassicProps,
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
  ...insertClassicProps,
  contentAnswer: ["Hello", "world", "people"],
  isToChoose: true,
};

const stepsData = [
  {
    id: "1",
    number: 1,
    stepType: "Insert",
    question: null,
    text: "Hello world people",
    answer: ["words"],
    keywords: [],
    definition: "",
    variants: [],
    chapter: 1,
    languageId: "1",
    isToChoose: false,
    difficulty: null,
  },
];

const totalXP = 10;

// const customRender = (ui: ReactElement, {value, ...renderOptions}: {value: SkillContextType}) => {
//   return render(
//     <SkillContext.Provider value={value}>{ui}</SkillContext.Provider>,
//     renderOptions,
//   )
// }

test("InsertWords shows value from provider", () => {
  render(<Skill steps={stepsData} totalXP={totalXP} />, {
    wrapper: MemoryRouter,
  });
  expect(screen.getByText(/add missing words/)).toBeInTheDocument();
});

// describe("Insert words classic without variants", () => {
//   it("Count of inputs should be equal length of right answer", () => {
//     render(<InsertWordsScreen {...defaultProps} />);
//     const inputs = screen.getAllByRole("text");
//     expect(inputs.length).toBe(insertClassicProps.contentAnswer.length);
//   });

//   it("Should render 2 variants for 1 input", () => {
//     render(<InsertWordsScreen {...defaultProps} />);
//     const firstVariant = screen.getByRole("button", { name: /hello/i });
//     const secondVariant = screen.getByRole("button", { name: /world/i });
//     const inputs = screen.getAllByRole<HTMLInputElement>("input");

//     expect(firstVariant).toBeInTheDocument();
//     expect(secondVariant).toBeInTheDocument();
//     expect(inputs[0]).toBeInTheDocument();

//     userEvent.click(firstVariant);
//     expect(inputs[0].value).toBe("Hello");
//     userEvent.click(secondVariant);
//     expect(inputs[1].value).toBe("world");
//   });

//   it("Should render puzzle", async () => {
//     render(<InsertWordsScreen {...defaultProps} />);

//     const inputs = screen.getAllByRole("input");
//     const puzzleOne = screen.getByRole("button", { name: /hello/i });
//     const puzzleTwo = screen.getByRole("button", { name: /world/i });
//     const puzzleThree = screen.getByRole("button", { name: /people/i });
//     expect(inputs.length).toBe(insertPuzzle.contentAnswer.length);
//     expect(puzzleOne).toBeInTheDocument();
//     expect(puzzleTwo).toBeInTheDocument();
//     expect(puzzleThree).toBeInTheDocument();
//   });
// });
