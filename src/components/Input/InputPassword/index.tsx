import React from "react";
import NewInput from "../index";
import { InputAdornment } from "@mui/material";
import {Key} from "@mui/icons-material";
import { TextFieldProps } from "@mui/material/TextField/TextField";

type InputPasswordProps = Omit<TextFieldProps, "InputProps"> & {
  InputProps?: Omit<TextFieldProps["InputProps"], "startAdornment">;
};
const InputPassword = ({
  placeholder = "Input your password",
  InputProps,
  ...restProps
}: InputPasswordProps): React.ReactElement => {
  return (
      <NewInput
        {...restProps}
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
