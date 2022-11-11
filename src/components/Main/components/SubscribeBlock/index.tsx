import InputEmail from "../../../Input/InputEmail";
import Button from "../../../Button";
import React, { useContext, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery, Theme } from "@mui/material";
import { AuthContext } from "../../../../App";

const SubscribeBlock = (): React.ReactElement => {
  const [email, setEmail] = useState<string>("");

  const mobile = useMediaQuery<Theme>((theme) => theme.breakpoints.down(700));
  const { value: authValue } = useContext(AuthContext);

  useEffect(() => {
    authValue ? setEmail(authValue.email) : setEmail("");
  }, [authValue]);

  return (
    <Box display="flex" justifyContent="space-around">
      <Box bgcolor="#FAFAFA" borderRadius="10px" padding="10px 40px">
        <Box margin="10px" display="flex" justifyContent="space-around">
          <img
            src="/IconImg/imgClock.jpg"
            height="50"
            width="50"
            alt="clock on the hand"
          />
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="body1" gutterBottom>
            Subscribe and be the first
          </Typography>
          <Typography variant="body1" gutterBottom>
            who know about the new dream job
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection={mobile ? "column" : "row"}
          alignItems="center"
        >
          <Box margin="5px" width={mobile ? "100%" : undefined}>
            <InputEmail
              fullWidth={true}
              size="small"
              value={email}
              onChange={setEmail}
            />
          </Box>
          <Box margin="5px" width={mobile ? "100%" : undefined}>
            <Button
              fullWidth={true}
              disabled={!Boolean(email)}
              variant="contained"
              color="primary"
              onClick={() => {
                console.log(email);
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default SubscribeBlock;
