import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import App, { AuthContext } from "../../App";
import Header from "./index";

it("should login on submitting form", async () => {
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

test("should logout on click to button LogOut", () => {
  const setValue = jest.fn();
  render(
    <AuthContext.Provider
      value={{
        value: { userName: "userName", email: "admin@mail.ru" },
        setValue,
      }}
    >
      <Header />
    </AuthContext.Provider>
  );
  fireEvent.click(screen.getByText("Log Out"));

  expect(setValue).toBeCalledWith(null)
});
