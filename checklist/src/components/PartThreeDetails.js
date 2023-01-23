import React from "react";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { Field } from "redux-form";

const PartThreeDetails = () => {
  return (
    <div>
      <Grid container spacing={2} className="diviBottom">
        <Grid item lg={5}>
          <label>
            Year of Admission
            <span className="errortext">*</span> :
          </label>
        </Grid>
        <Grid item lg={7}>
          <Field name="admissionYear" component="select">
            <option>-- Select an option --</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
          </Field>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item lg={5}>
          <label>
            Course Name
            <span className="errortext">*</span> :
          </label>
        </Grid>
        <Grid item lg={7}>
          <Field name="courseSelect" component="select">
            <option>-- Select an option --</option>
            <option>
              Institute of Chartered Shipbrokers - ICS Advanced Diploma
            </option>
            <option>
              Lloyd's Maritime Academy - Certificate in Vessel Valuation
            </option>
          </Field>
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={2}>
        <Grid item lg={5}>
          <label>
            Start Date
            <span className="errortext">*</span> :<br />
            <span className="labelNotes">
              Indicate start date of course. For courses offered by Institute of
              Chartered Shipbrokers (ICS), please use the examination date of
              first module as the start date.
            </span>
          </label>
        </Grid>
        <Grid item lg={7}>
          <span id="errormsg_start_date" className="errorMessage"></span>
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={2}>
        <Grid item lg={5}>
          Co Funding Support :<br />
          <span id="supportNote" class="labelNotes"></span>
        </Grid>
        <Grid item xs={7}></Grid>
      </Grid>
      <br />
      <Grid container spacing={2}>
        <Grid item lg={5}>
          Tuition/Course Fee (w/o GST or its equivalent)
          <span className="errortext">*</span> :<br />
          <span className="labelNotes">
            Note : If the fee is in foreign currency, please key in fee in SGD
            equivalent.
          </span>
        </Grid>
        <Grid item lg={7}>
          SGD
          <Field name="tuition_fee" component="input" type="number" />
        </Grid>
      </Grid>
    </div>
  );
};

export default PartThreeDetails;
