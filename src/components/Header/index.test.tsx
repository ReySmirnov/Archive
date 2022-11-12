import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import Header from "./index";
import AuthProvider from "../AuthProvider";

it("should login on submitting form", async () => {
  render(
    <AuthProvider>
      <Header />
    </AuthProvider>
  );

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
  render(
    <AuthProvider value={{ userName: "userName", email: "admin@mial.ru" }}>
      <Header />
    </AuthProvider>
  );
  fireEvent.click(screen.getByText("Log Out"));
  expect(screen.getByText("Log in")).toBeInTheDocument();
});
