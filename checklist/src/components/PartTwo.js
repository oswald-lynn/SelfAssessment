import React from "react";
//import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
//import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

const PartTwo = () => {
  return (
    <div>
      <h4>Part 2 - Sponsoring Employer's Particulars</h4>
      <Divider className="divi" />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <p>
            Employment Status:
            <span className="pC">*</span> :
          </p>
          <p>Name of Employer :</p>
          <p>
            Nature of Business of Sponsoring Employer
            <span className="pC">*</span> :<br />
            <span class="labelNotes">
              Note: To qualify for MCF grant support, the sponsoring company
              must be a maritime business entity / organisation registered or
              incorporated in Singapore. This{" "}
              <span class="boldUnderlineNotes">excludes</span> shipyards,
              companies in the offshore and marine engineering sector, ferry
              cruise lines, government bodies, including statutory boards, etc.
            </span>
          </p>
          <p>
            Place of Incorporation
            <span className="pC">*</span> :<br />
            <span class="labelNotes">
              Note: Only Singapore registered / incorporated maritime business
              entities / organisations can qualify for MCF support.
            </span>
          </p>
        </Grid>
        <Grid item xs={6}>
          <p>
            <Select id="" size="small" className="select">
              <option value>-- Select an option --</option>
              <option value="gov-sponsored">
                I am/will be sponsored by government body/statutory board
              </option>
              <option value="not-gov-sponsored">
                I am not/will not be sponsored by any government bodies,
                including statutory boards
              </option>
            </Select>
          </p>
          <p>
            <TextField id="outlined-basic" size="small" />
          </p>
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
          <p>
            <Select id="" size="small" className="select">
              <option>-- Select an option --</option>
              <option value="singapore">Singapore</option>
              <option value="others">Others</option>
            </Select>
          </p>
        </Grid>
      </Grid>
    </div>
  );
};
export default PartTwo;
