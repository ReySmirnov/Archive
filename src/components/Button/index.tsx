import "./index.css";
import React from "react";
import { Button as ButtonMUI, ButtonProps, styled } from "@mui/material";
import { ButtonTypeMap } from "@mui/material/Button/Button";

const NewBtn = styled(ButtonMUI)<ButtonProps>(() => ({
  textTransform: "none",
}));

const Button = ({
  children,
  color,
  ...restProps
}:ButtonProps): React.ReactElement => {
  let setColor: ButtonTypeMap["props"]["color"] = "secondary";
  if (color === "primary") {
    setColor = "primary";
  }

  return (
      <NewBtn color={setColor} {...restProps}>
        {children}
      </NewBtn>
  );
};

export default Button;
