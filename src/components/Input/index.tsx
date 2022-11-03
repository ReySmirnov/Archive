import * as React from "react";
import { TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material/TextField/TextField";
import { ChangeEvent } from "react";

type NewInputProps = Omit<TextFieldProps, "onChange"> & {
  onChange: (value: string) => void;
};
const NewInput = ({
  onChange,
  ...restProps
}: NewInputProps): React.ReactElement => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };

  return <TextField {...restProps} onChange={handleChange} />;
};
export default NewInput;
