import Logo from "./components/Logo";
import { Box } from "@mui/material";
import Button from "../Button";
import React from "react";
import ModalLogin from "../Modal/ModalLogin";
import ModalSignUp from "../Modal/ModalSignUp";

const Header = () => {
  const [modalLoginIsOpen, setLoginIsOpen] = React.useState(false);
  const openModalLogin = () => {
    setLoginIsOpen(true);
  };
  const closeModalLogin = () => {
    setLoginIsOpen(false);
  };
    const [modalSignUpIsOpen, setSignUpIsOpen] = React.useState(false);
    const openModalSignUp = () => {
        setSignUpIsOpen(true);
    };
    const closeModalSignUp = () => {
        setSignUpIsOpen(false);
    };


  return (
    <Box margin={"5px"} display={"flex"} justifyContent={"space-between"}>
      <Box>
        <Logo/>
      </Box>
      <Box>
        <Button size="small" variant="text" color="primary" onClick={openModalSignUp}>
          Sign Up
        </Button>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={openModalLogin}
        >
          Log in
        </Button>
          <ModalSignUp open={modalSignUpIsOpen} onClose={closeModalSignUp}/>
        <ModalLogin open={modalLoginIsOpen} onClose={closeModalLogin}/>
      </Box>
    </Box>
  );
};
export default Header;
