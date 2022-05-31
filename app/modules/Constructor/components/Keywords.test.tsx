import { screen, render } from "@testing-library/react";
import Keywords from "./Keywords";

describe("Testing keywords component", () => {
  test("Keywords renders answer correctly", () => {
    render(
      <Keywords answer={"Hello world"} onSet={() => {}} initialKeywords={[]} />
    );
    const firstKeyword = screen.getByText(/hello/i);
    const secondKeyword = screen.getByText(/world/i);

    expect(firstKeyword).toBeInTheDocument();
    expect(secondKeyword).toBeInTheDocument();
  });
});
