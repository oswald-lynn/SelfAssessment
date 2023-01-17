import React from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

const PartOne = () => {
  return (
    <div>
      <Grid item lg={12}>
        <p className="firstp">Best viewed in Chrome or Microsoft Edge</p>
      </Grid>
      <FormControl>
        <Grid item lg={12} className="bgcolor">
          <h3>
            Eligibility for Maritime Cluster Fund Certifiable Courses Training
            Grant (MCF-CC) - Self Assessment Checklist
          </h3>
        </Grid>
        <Grid item lg={12}>
          <p className="pC">(Compulsory fields are denoted by *)</p>
          <p>
            <u>Important Notes</u>
          </p>
          <p>
            1. If you have already completed the course more than one year ago,
            please note that you would not be eligible for the MCF-CC training
            grant.
          </p>
          <p>
            2. The course completion date refers to date of conferment of degree
            or date of issuance as indicated on the certificate of completion.
          </p>
        </Grid>
        <Grid item lg={12}>
          <h4 className="">Part 1 - Participant's Particulars</h4>
        </Grid>
        <Divider />
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <p>Name :</p>
            <p>
              Citizenship<span className="pC">*</span> :
            </p>
            <span className="labelNotes">
              Note: To qualify for MCF grant support, you must be a Singapore
              Citizen or Singapore Permanent Resident throughout the course
              duration.
            </span>
            <p>
              Sponsorship Status <span className="pC">*</span> :
            </p>
          </Grid>
          <Grid item lg={6}>
            <TextField id="outlined-basic" size="small" />
            <p>
              I am/will be
              <Select id="" size="small" className="select">
                <option>-- Select an option --</option>
                <option value="">Red</option>
                <option value="">Green</option>
                <option value={"0000ff"}>Blue</option>
              </Select>
              on or before commencement of the course, and on course completion
              date.
            </p>
            <span id="errormsg_name" class="errorMessage"></span>
            <p>
              I am/will be
              <Select size="small" className="select">
                <option>-- Select an option --</option>
                <option value={"ff0000"}>Red</option>
                <option value={"00ff00"}>Green</option>
                <option value={"0000ff"}>Blue</option>
              </Select>
            </p>
            <span id="errormsg_name" class="errorMessage"></span>
          </Grid>
        </Grid>
      </FormControl>
    </div>
  );
};
export default PartOne;
