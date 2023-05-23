import { fireEvent, render } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

test("selecting checkbox should change value to true", () => {
  const { getByLabelText } = render(<Checkbox />);
  const checkbox = getByLabelText(/not checked/i);
  //fireEvent lets you automate an event for testing by triggering an event change
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
});
