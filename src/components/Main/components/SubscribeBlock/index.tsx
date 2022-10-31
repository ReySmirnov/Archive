import "./index.css";
import InputEmail from "../../../Input/InputEmail";
import Button from "../../../Button";
import React, { ChangeEvent, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery, Theme } from "@mui/material";

const SubscribeBlock = (): React.ReactElement => {
  const [email, setEmail] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const mobile = useMediaQuery<Theme>((theme) => theme.breakpoints.down(700));
  return (
    <Box display={"flex"} justifyContent={"space-around"}>
      <Box bgcolor={"#FAFAFA"} borderRadius={"10px"} padding={"10px 40px"}>
        <Box margin={"10px"} display={"flex"} justifyContent={"space-around"}>
          <img
            src="/IconImg/imgClock.jpg"
            height="50"
            width="50"
            alt="clock on the hand"
          />
        </Box>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Typography variant="body1" gutterBottom>
            Subscribe and be the first
          </Typography>
          <Typography variant="body1" gutterBottom>
            who know about the new dream job
          </Typography>
        </Box>
        <Box
          display={"flex"}
          flexDirection={mobile ? "column" : "row"}
          alignItems={"center"}
        >
          <Box margin={"5px"} width={mobile?"100%":undefined}>
            <InputEmail fullWidth={true} size={"small"} value={email} onChange={handleChange} />
          </Box>
          <Box margin={"5px"} width={mobile?"100%":undefined}>
            <Button
                fullWidth={true}
              disabled={!Boolean(email)}
              type="primary"
              color="orange"
              onClick={() => {}}
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
