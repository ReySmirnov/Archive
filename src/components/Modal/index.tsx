import Modal from "react-modal";
import {Box, Modal as ModalMUI} from "@mui/material"
import Button from "../Button";
import React from "react";

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
type ModalLoginProps = {open:boolean, onClose:()=>void, children:React.ReactElement}
const NewModal = (props:ModalLoginProps): React.ReactElement => {
    return (
        <ModalMUI
            {...props}
        >
            <Box padding='0' sx={style} display={"flex"} flexDirection={"column"}>
                <Box margin={"5px"} display={"flex"} justifyContent={"flex-end"}>
                    <Button
                        size={"small"}
                        type={"text"}
                        color={"primary"}
                        onClick={props.onClose}
                    >
                        Close X
                    </Button>
                </Box>
                {props.children}
            </Box>
        </ModalMUI>
    );
}
export default NewModal