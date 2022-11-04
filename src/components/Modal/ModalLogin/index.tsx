import React, {useState} from "react";
import NewModal from "../index";
import FinalFormLogin from "../../FinalForm/FinalFormLogin";
import {Typography} from "@mui/material";


type ModalLoginProps = { open: boolean; onClose: () => void };
const ModalLogin = (props: ModalLoginProps): React.ReactElement => {
    return (
        <NewModal {...props}>
            <>
                <Typography margin="5px" variant={"h5"}>
                    Login
                </Typography>
                <FinalFormLogin/>
            </>
        </NewModal>
    );
};
export default ModalLogin;
