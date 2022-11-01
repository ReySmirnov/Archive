import "./index.css";
import React from "react";
import { Button as ButtonMUI, ButtonProps, styled } from "@mui/material";
import { ButtonTypeMap } from "@mui/material/Button/Button";

type BtnProps = {
  type?: "primary" | "secondary"|"text"
} & Omit<ButtonProps, "type">;

const NewBtn = styled(ButtonMUI)<ButtonProps>(() => ({
  textTransform: "none",
}));

const Button = ({
  children,
  type,
  color,
  ...restProps
}: BtnProps): React.ReactElement => {
  let variant: ButtonTypeMap["props"]["variant"] = "contained";
  let setColor: ButtonTypeMap["props"]["color"] = "secondary";
  if (type === "secondary") {
    variant = "outlined";
  }
    if (type === "text") {
        variant = "text";
    }
  if (color === "primary") {
    setColor = "primary";
  }

  return (
      <NewBtn variant={variant} color={setColor} {...restProps}>
        {children}
      </NewBtn>
  );
};

export default Button;
