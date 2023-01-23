import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import PartFour from "./PartFour";
import PartThreeDetails from "./PartThreeDetails";
import { Field } from "redux-form";

const PartThree = () => {
  const [courseConfirm, setCourseConfirm] = useState();
  const onCourseConfirmChange = (e) => {
    setCourseConfirm(e.target.value);
  };

  return (
    <div>
      <h4>Part 3 - Course Particulars</h4>
      <Divider />
      <Grid container spacing={2} className="diviBottom">
        <Grid item xs={5}>
          <label>
            Please confirm you have completed the course within the last 1 year{" "}
            {""}
            <span className="errortext">*</span> :
          </label>
        </Grid>
        <Grid item xs={7}>
          <Field
            name="courseConfirm"
            component="select"
            value={courseConfirm}
            onChange={onCourseConfirmChange}
          >
            <option>--- Select an option --- </option>
            <option value="yes"> Yes, it is confirmed</option>
            <option value="pending">
              No, I have yet to complete the course
            </option>
            <option value="no">
              No, I have completed the course more than 1 year ago
            </option>
          </Field>
        </Grid>
      </Grid>
      {courseConfirm === "yes" && <PartThreeDetails />}
      {courseConfirm === "pending" && <PartThreeDetails />}
      {courseConfirm === "no" && <PartFour />}
    </div>
  );
};
export default PartThree;
