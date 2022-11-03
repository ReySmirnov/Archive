import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import InputEmail from "../../Input/InputEmail";
import Button from "../../Button";
import InputPassword from "../../Input/InputPassword";
import NewModal from "../index";
import FinalFormLogin from "../../FinalForm/FinalFormLogin";
import FinalFormSignUp from "../../FinalForm/FinalFormSignUp";

type ModalSignUpProps = { open: boolean; onClose: () => void };
const ModalSignUp = (props: ModalSignUpProps): React.ReactElement => {
  //     const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  return (
    <NewModal {...props}>
      <>
        <FinalFormSignUp></FinalFormSignUp>
      </>
    </NewModal>
  );
};
export default ModalSignUp;
