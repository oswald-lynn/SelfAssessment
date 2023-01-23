import React from "react";
//import CheckList from "./CheckList";
import PartOne from "./PartOne";
import Container from "@mui/material/Container";
import { reduxForm } from "redux-form";

const Main = (props) => {
  const { handleSubmit } = props;
  return (
    <Container maxWidth="lg">
      <form onSubmit={handleSubmit}>
        <PartOne />
      </form>
    </Container>
  );
};
export default reduxForm({
  form: "Main",
})(Main);
