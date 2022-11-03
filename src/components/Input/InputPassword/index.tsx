import React from "react";
import NewInput from "../index";
import { InputAdornment } from "@mui/material";
import { Key } from "@mui/icons-material";
import { TextFieldProps } from "@mui/material/TextField/TextField";

type InputPasswordProps = Omit<TextFieldProps, "InputProps" | "onChange"> & {
  InputProps?: Omit<TextFieldProps["InputProps"], "startAdornment">;
  onChange: (value: string) => void;
};
const InputPassword = ({
  placeholder = "Input your password",
  InputProps,
  onChange,
  ...restProps
}: InputPasswordProps): React.ReactElement => {
  return (
    <NewInput
      {...restProps}
      onChange={onChange}
      placeholder={placeholder}
      type={"password"}
      InputProps={{
        ...InputProps,

        startAdornment: (
          <InputAdornment position="start">
            <Key />
          </InputAdornment>
        ),
      }}
    ></NewInput>
  );
};
export default InputPassword;
