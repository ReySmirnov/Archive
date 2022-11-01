import React, { ChangeEvent } from "react";
import NewInput from "../index";
import { InputAdornment } from "@mui/material";
import { Mail } from "@mui/icons-material";
import { TextFieldProps } from "@mui/material/TextField/TextField";

type InputEmailProps = Omit<TextFieldProps, "InputProps" | "onChange"> & {
  InputProps?: Omit<TextFieldProps["InputProps"], "startAdornment">;
  onChange: (value: string) => void;
};

const InputEmail = ({
  placeholder = "Input your email",
  InputProps,
  onChange,
  ...restProps
}: InputEmailProps): React.ReactElement => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };

  return (
    <NewInput
      {...restProps}
      onChange={handleChange}
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
  );
};
export default InputEmail;
