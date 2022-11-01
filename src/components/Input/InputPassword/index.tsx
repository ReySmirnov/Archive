import React, {ChangeEvent, useState} from "react";
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
    const [password, setPassword] = useState<string>("");
    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    };
  return (
      <NewInput
        {...restProps}
        value={password}
        onChange={handleChangePassword}
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
