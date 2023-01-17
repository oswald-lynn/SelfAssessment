import React from "react";
//import CheckList from "./CheckList";
import PartOne from "./PartOne";
import PartTwo from "./PartTwo";
import PartThree from "./PartThree";
import PartFour from "./PartFour";
import Container from "@mui/material/Container";
const Main = () => {
  return (
    <Container maxWidth="lg">
      {/* <CheckList /> */}
      <PartOne />
      <PartTwo />
      <PartThree />
      <PartFour />
    </Container>
  );
};
export default Main;
