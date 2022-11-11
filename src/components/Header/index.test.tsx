import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import App from "../../App";

it("renders learn react link", async () => {
  render(<App />);

  fireEvent.click(screen.getByText("Log in"));

  fireEvent.change(screen.getByLabelText("Email"), {
    target: { value: "admin@mail.ru" },
  });

  fireEvent.change(screen.getByLabelText("Password"), {
    target: { value: "admin" },
  });

  const submit = screen.getByText("Submit");
  expect(submit).not.toBeDisabled();
  fireEvent.click(submit);

  await waitForElementToBeRemoved(screen.getByLabelText("Email"));

  expect(screen.getByText("Log Out")).toBeInTheDocument();
});
