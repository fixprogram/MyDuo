import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Keywords from "./Keywords";

describe("Testing keywords component", () => {
  test("Keywords renders answer correctly", () => {
    render(<Keywords answer={"Hello world"} onSet={() => {}} />);
    const firstKeyword = screen.getByText(/hello/i);
    const secondKeyword = screen.getByText(/world/i);

    expect(firstKeyword).toBeInTheDocument();
    expect(secondKeyword).toBeInTheDocument();
  });

  test("Keywords renders answer correctly", () => {
    const onSet = vi.fn();
    render(<Keywords answer={"Hello world"} onSet={onSet} />);
    const firstKeyword = screen.getByText(/hello/i);

    expect(onSet).toBeCalledTimes(1);
    userEvent.click(firstKeyword);
    expect(onSet).toBeCalledTimes(2);
  });
});
