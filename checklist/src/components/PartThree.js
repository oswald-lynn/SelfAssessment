import React from "react";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
//import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

const PartThree = () => {
  const [value, setValue] = React.useState(null);
  return (
    <div>
      <h4>Part 3 - Course Particulars</h4>
      <Divider />
      <Grid container spacing={2} className="diviBottom">
        <Grid item xs={4}>
          <p>
            Please confirm you have completed the course within the last 1 year
          </p>
        </Grid>
        <Grid item xs={8}>
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
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item lg={4}>
          <p>
            Year of Admission
            <span className="pC">*</span> :
          </p>
        </Grid>
        <Grid item lg={8}>
          <Select id="" size="small" className="select">
            <option>-- Select an option --</option>
          </Select>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item lg={4}>
          <p>
            Course Name
            <span className="pC">*</span> :
          </p>
        </Grid>
        <Grid item lg={8}>
          <Select id="courseSelect" size="small" className="select">
            <option disabled selected value>
              -- Select an option --
            </option>
          </Select>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item lg={4}>
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
        <Grid item lg={8}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Basic example"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <span id="errormsg_start_date" className="errorMessage"></span>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item lg={4}>
          Co Funding Support :<br />
          <span id="supportNote" class="labelNotes"></span>
        </Grid>
        <Grid item xs={8}>
          <span id="co_funding_support" className="cofundingSupportContent">
            70%
          </span>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item lg={4}>
          <p>
            Tuition/Course Fee (w/o GST or its equivalent)
            <span className="pC">*</span> :<br />
            <span className="labelNotes">
              Note : If the fee is in foreign currency, please key in fee in SGD
              equivalent.
            </span>
          </p>
        </Grid>
        <Grid item lg={8}>
          SGD
          <TextField id="outlined-basic" size="small" />
          <span id="errormsg_tuition_fee" className="errorMessage"></span>
        </Grid>
      </Grid>
    </div>
  );
};
export default PartThree;
