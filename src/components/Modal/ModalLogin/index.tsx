import React from "react";
import {Box, Typography, Modal as ModalMUI} from "@mui/material";
import InputEmail from "../../Input/InputEmail";
import Button from "../../Button";
import InputPassword from "../../Input/InputPassword";
import Modal from "react-modal";
import NewInput from "../../Input";

Modal.setAppElement("#root");

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
};
type ModalLoginProps = {open:boolean, onClose:()=>void}
const ModalLogin = (props:ModalLoginProps) => {

    return (
      <ModalMUI
          {...props}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} display={"flex"} flexDirection={"column"}>
          <Box margin={"5px"} display={"flex"} justifyContent={"space-between"}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Log In
            </Typography>
            <Button
              size={"small"}
              type={"text"}
              color={"primary"}
              onClick={props.onClose}
            >
              Close
            </Button>
          </Box>
          <Box margin={"5px"}>
            <InputEmail fullWidth={true} size={"small"} />
          </Box>
          <Box margin={"5px"}>
            <InputPassword fullWidth={true} size={"small"} />
          </Box>
          <Box margin={"5px"}>
            <Button
              fullWidth={true}
              size={"small"}
              type={"primary"}
              color={"primary"}
              onClick={()=>{console.log()}}
            >
              Log In
            </Button>
          </Box>
        </Box>
      </ModalMUI>
    );
};
export default ModalLogin;
