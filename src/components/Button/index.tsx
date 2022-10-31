import "./index.css";
import React, { MouseEventHandler, PropsWithChildren, ReactNode } from "react";
import { Button as ButtonMUI, ButtonProps, styled } from "@mui/material";
import { ButtonTypeMap } from "@mui/material/Button/Button";

type BtnProps = {
  type?: "primary" | "secondary";
  color?: "orange" | "grey";
} & Omit<ButtonProps, "type"|"color">;

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
  if (color === "orange") {
    setColor = "primary";
  }

  return (
      <NewBtn variant={variant} color={setColor} {...restProps}>
        {children}
      </NewBtn>
  );
};

export default Button;
