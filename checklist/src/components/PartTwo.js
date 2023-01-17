import React from "react";
//import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

const PartTwo = () => {
  return (
    <div>
      <h4>Part 2 - Sponsoring Employer's Particulars</h4>
      <Divider />
      <Grid container spacing={2} className="diviBottom">
        <Grid item lg={6}>
          <p>
            Employment Status:
            <span className="pC">*</span> :
          </p>
        </Grid>
        <Grid item lg={6}>
          <Select id="" size="small" className="select">
            <option value>-- Select an option --</option>
            <option value="gov-sponsored">
              I am/will be sponsored by government body/statutory board
            </option>
            <option value="not-gov-sponsored">
              I am not/will not be sponsored by any government bodies, including
              statutory boards
            </option>
          </Select>
        </Grid>
      </Grid>
      {/* <------ first Row ----------> */}
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <p>Name of Employer :</p>
        </Grid>
        <Grid item lg={6}>
          <TextField id="outlined-basic" size="small" />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <p>
            Nature of Business of Sponsoring Employer
            <span className="pC">*</span> :<br />
            <span className="labelNotes">
              Note: To qualify for MCF grant support, the sponsoring company
              must be a maritime business entity / organisation registered or
              incorporated in Singapore. This
              <span className="boldUnderlineNotes">excludes</span> shipyards,
              companies in the offshore and marine engineering sector, ferry
              cruise lines, government bodies, including statutory boards, etc.
            </span>
          </p>
        </Grid>
        <Grid item lg={6}>
          <p>
            <Select id="" size="small" className="select">
              <option>-- Select an option --</option>
              <option value="maritime-law">Maritime Law</option>
              <option value="marine-insurance">Marine Insurance</option>
              <option value="ship-broking">Ship broking</option>
              <option value="ship-agency">Ship agency</option>
              <option value="others">Others</option>
            </Select>
          </p>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item lg={6}>
          <p>
            Place of Incorporation
            <span className="pC">*</span> :<br />
            <span className="labelNotes">
              Note: Only Singapore registered / incorporated maritime business
              entities / organisations can qualify for MCF support.
            </span>
          </p>
        </Grid>
        <Grid item lg={6}>
          <Select id="" size="small" className="select">
            <option>-- Select an option --</option>
            <option value="singapore">Singapore</option>
            <option value="others">Others</option>
          </Select>
        </Grid>
      </Grid>
    </div>
  );
};
export default PartTwo;
