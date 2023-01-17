import React from "react";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
//import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

const PartThree = () => {
  return (
    <div>
      <h4>Part 3 - Course Particulars</h4>
      <Divider className="divi" />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <p>
            Please confirm you have completed the course within the last 1 year
          </p>
          <p>
            Year of Admission
            <span className="pC">*</span> :
          </p>
          <p>
            Course Name
            <span className="pC">*</span> :
          </p>
          <p>
            Start Date
            <span className="pC">*</span> :<br />
            <span className="labelNotes">
              Indicate start date of course. For courses offered by Institute of
              Chartered Shipbrokers (ICS), please use the examination date of
              first module as the start date.
            </span>
          </p>
        </Grid>
        <Grid item xs={8}>
          <p>
            <Select id="" size="small" className="select">
              <option>-- Select an option --</option>
              <option value="yes">Yes, it is confirmed.</option>
              <option value="pending">
                No, I have yet to complete the course.
              </option>
              <option value="no">
                No, I have completed the course more than 1 year ago.
              </option>
            </Select>
          </p>
          <p>
            <Select id="" size="small" className="select">
              <option>-- Select an option --</option>
            </Select>
          </p>
          <p>
            <Select id="courseSelect" size="small" className="select">
              <option disabled selected value>
                -- Select an option --
              </option>
            </Select>
          </p>
          <p>
            <TextField id="outlined-basic" size="small" />
            <span id="errormsg_start_date" class="errorMessage"></span>
          </p>
        </Grid>
      </Grid>
    </div>
  );
};
export default PartThree;
