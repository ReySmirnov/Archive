import Logo from "./components/Logo";
import { Box } from "@mui/material";
import Button from "../Button";
import React from "react";
import ModalLogin from "../Modal/ModalLogin";

const Header = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Box margin={"5px"} display={"flex"} justifyContent={"space-between"}>
      <Box>
        <Logo />
      </Box>
      <Box>
        <Button size={"small"} type={"text"} color={"primary"}>
          Sign Up
        </Button>
        <Button
          size={"small"}
          type={"primary"}
          color={"primary"}
          onClick={openModal}
        >
          Log in
        </Button>
        <ModalLogin open={modalIsOpen} onClose={closeModal}></ModalLogin>
      </Box>
    </Box>
  );
};
export default Header;

