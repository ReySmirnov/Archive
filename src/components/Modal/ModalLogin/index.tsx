import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import InputEmail from "../../Input/InputEmail";
import Button from "../../Button";
import InputPassword from "../../Input/InputPassword";
import NewModal from "../index";
import FinalFormLogin from "../../FinalForm/FinalFormLogin";


type ModalLoginProps = { open: boolean; onClose: () => void };
const ModalLogin = (props: ModalLoginProps): React.ReactElement => {
  //     const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  return (
    <NewModal {...props}>
        <>
        <FinalFormLogin></FinalFormLogin>
      {/*<>*/}
      {/*  <Box margin={"5px"} display={"flex"} justifyContent={"space-between"}>*/}
      {/*    <Typography id="modal-modal-title" variant="h6" component="h2">*/}
      {/*      Log In*/}
      {/*    </Typography>*/}
      {/*  </Box>*/}
      {/*  <Box margin={"5px"}>*/}
      {/*    <InputEmail*/}
      {/*      fullWidth={true}*/}
      {/*      size="small"*/}
      {/*      value={email}*/}
      {/*      onChange={setEmail}*/}
      {/*    />*/}
      {/*  </Box>*/}
      {/*  <Box margin={"5px"}>*/}
      {/*    <InputPassword*/}
      {/*      fullWidth={true}*/}
      {/*      size={"small"}*/}
      {/*      value={password}*/}
      {/*      onChange={setPassword}*/}
      {/*    />*/}
      {/*  </Box>*/}
      {/*  <Box margin={"5px"}>*/}
      {/*    <Button*/}
      {/*      fullWidth={true}*/}
      {/*      size={"small"}*/}
      {/*      type={"primary"}*/}
      {/*      color={"primary"}*/}
      {/*      onClick={() => {*/}
      {/*        console.log(email, password);*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      Log In*/}
      {/*    </Button>*/}
      {/*  </Box>*/}
      {/*</>*/}
        </>
    </NewModal>
  );
};
export default ModalLogin;
