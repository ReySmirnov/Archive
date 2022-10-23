import "./index.css";
import React, { InputHTMLAttributes } from "react";

const Input = (
  props: InputHTMLAttributes<HTMLInputElement>
): React.ReactElement => {
  return <input className="input" {...props} />;
};
export default Input;
