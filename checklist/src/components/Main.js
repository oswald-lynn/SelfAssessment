import React from "react";
//import CheckList from "./CheckList";
import PartOne from "./PartOne";
import PartTwo from "./PartTwo";
import PartThree from "./PartThree";
import PartFour from "./PartFour";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
const Main = () => {
  return (
    <Container maxWidth="lg">
      <FormControl>
        {/* <CheckList /> */}
        <PartOne />
        <PartTwo />
        <PartThree />
        <PartFour />
      </FormControl>
    </Container>
  );
};
export default Main;
