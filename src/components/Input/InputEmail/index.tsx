import "./index.css";
import React from "react";
import NewInput from "../index";
import { InputAdornment } from "@mui/material";
import { Mail } from "@mui/icons-material";
import { TextFieldProps } from "@mui/material/TextField/TextField";

type InputEmailProps = Omit<TextFieldProps, "InputProps"> & {
  InputProps?: Omit<TextFieldProps["InputProps"], "startAdornment">;
};
const InputEmail = ({
  placeholder = "Input your email",
  InputProps,
  ...restProps
}: InputEmailProps): React.ReactElement => {
  return (
    <div>
      <NewInput
        {...restProps}
        placeholder={placeholder}
        InputProps={{
          ...InputProps,
          startAdornment: (
            <InputAdornment position="start">
              <Mail />
            </InputAdornment>
          ),
        }}
      ></NewInput>
    </div>
  );
};
export default InputEmail;
