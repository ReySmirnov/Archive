import { FormValues } from "../components/FinalForm/FinalFormLogin";

export const login = async (
  values: FormValues
): Promise<{ userName: string; email: string } | undefined> => {
  if (values.Email === "admin@mail.ru" && values.Password === "admin") {
    return { userName: "DefaultUser", email: `${values.Email}` };
  } else {
    return undefined;
  }
};