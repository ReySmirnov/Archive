import "./index.css";
import React, { ChangeEvent, useState } from "react";
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
    const [email, setEmail] = useState<string>("");
    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
    };
  return (
    <NewInput
      {...restProps}
      value={email}
      onChange={handleChangeEmail}
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
