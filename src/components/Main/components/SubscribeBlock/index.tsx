import "./index.css";
import InputEmail from "../../../Input/InputEmail";
import Btn from "../../../Button";
import React, { ChangeEvent, useState } from "react";
import { Box, InputAdornment, Typography } from "@mui/material";
import { Mail } from "@mui/icons-material";

const SubscribeBlock = (): React.ReactElement => {
  const [email, setEmail] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  return (
    <Box display={"flex"} justifyContent={"space-around"}>
      <Box
        sx={{
          backgroundColor: "#FAFAFA",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <Box
          sx={{ margin: "10px" }}
          display={"flex"}
          justifyContent={"space-around"}
        >
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
          alignItems={"center"}
          sx={{
            "& > :not(style)": { m: 1 },
          }}
        >
          <InputEmail
            size={"small"}
            value={email}
            onChange={handleChange}
          />
          <Btn
            disabled={!Boolean(email)}
            type="primary"
            color="orange"
            onClick={() => {}}
          >
            Subscribe
          </Btn>
        </Box>
      </Box>
    </Box>
  );
};
export default SubscribeBlock;
