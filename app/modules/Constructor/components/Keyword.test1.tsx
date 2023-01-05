import { screen, render } from "@testing-library/react";
import Keyword from "./Keyword";

// describe("Testing keyword component", () => {
//   test("check keyword children render", () => {
//     render(
//       <Keyword initiallyActive={true} onSet={() => {}}>
//         {"Hello"}
//       </Keyword>
//     );
//     const keyword = screen.getByText(/hello/i);

//     expect(keyword.innerHTML).toBe("Hello");
//   });

//   test("check keyword empty children render", () => {
//     render(<Keyword initiallyActive={true} onSet={() => {}}></Keyword>);
//     const keyword = screen.queryByText(/hello/i);

//     expect(keyword).toBe(null);
//   });
// });
