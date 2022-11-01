import * as React from "react";
import { TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material/TextField/TextField";
import { ChangeEvent, useState } from "react";

const NewInput = (props: TextFieldProps) => {
  const [password, setPassword] = useState<string>("");
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  return (
    <TextField value={password} onChange={handleChangePassword} {...props} />
  );
};
export default NewInput;
