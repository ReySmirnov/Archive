import Header from "../../components/Header";
import MainContent from "../../components/Main";
import React from "react";
import {Container} from "@mui/material";

function Main():React.ReactElement {
  return (
    <Container maxWidth="md">
      <Header />
      <MainContent />
    </Container>
  );
}

export default Main;
