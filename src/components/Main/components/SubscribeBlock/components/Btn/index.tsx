import "./index.css";
import React, { MouseEventHandler, PropsWithChildren } from "react";

type BtnProps = PropsWithChildren<{
  type?: "primary" | "secondary";
  color?: "orange" | "grey";
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}>;

const Btn = ({
  children,
  type,
  color,
  disabled,
  onClick,
}: BtnProps): React.ReactElement => {
  let typeClassName = "btn-primary";
  let colorClassName = "btn-grey";
  if (type === "secondary") {
    typeClassName = "btn-secondary";
  }
  if (color === "orange") {
    colorClassName = "btn-orange";
  }
  return (
    <button
      disabled={disabled}
      className={`btn ${typeClassName} ${colorClassName}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Btn;
