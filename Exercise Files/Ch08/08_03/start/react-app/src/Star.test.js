import { render } from "@testing-library/react";
import { Star } from "./Star";

test("renders an h1", () => {
  const { getByText } = render(<Star />);
  console.log(getByText);
  const h1 = getByText(/Cool Star/);
  console.log(h1);
  expect(h1).toHaveTextContent("Cool Star");
});
