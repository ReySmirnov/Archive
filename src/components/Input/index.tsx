import * as React from "react";
import {Button, ButtonProps, styled, TextField} from "@mui/material";
import { TextFieldProps } from "@mui/material/TextField/TextField";


const NewInput = (props: TextFieldProps) => {
  return <TextField {...props}  />;
};
export default NewInput;
