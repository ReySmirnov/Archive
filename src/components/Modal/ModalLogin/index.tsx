import React, { useContext } from "react";
import NewModal from "../index";
import FinalFormLogin, { FormValues } from "../../FinalForm/FinalFormLogin";
import { Typography } from "@mui/material";
import { login } from "../../../services/login";
import {AuthContext} from "../../AuthProvider";

type ModalLoginProps = { open: boolean; onClose: () => void };

const ModalLogin = (props: ModalLoginProps): React.ReactElement => {
  const { setValue: setAuthValue } = useContext(AuthContext);
  const authValidation = (values: FormValues) => {
    login(values).then((user) => {
      if (user) {
        props.onClose();
        setAuthValue(user);
      } else {
        window.alert("Неверный логин или пароль!");
      }
    });
  };

  return (
    <NewModal {...props}>
      <>
        <Typography margin="5px" variant={"h5"}>
          Login
        </Typography>
        <FinalFormLogin
          onSubmit={(values: FormValues) => {
            authValidation(values);
          }}
        />
      </>
    </NewModal>
  );
};
export default ModalLogin;
