import React, { useState } from "react";
import { Field } from "redux-form";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import PartFour from "./PartFour";
import PartThree from "./PartThree";

const PartTwo = () => {
  const [sponsored, setSponsored] = useState();
  const [placeOfIncorporation, setPlaceOfIncorporation] = useState();
  const onSponsoredChange = (e) => {
    setSponsored(e.target.value);
  };
  const onPlaceOfIncorporationChange = (e) => {
    setPlaceOfIncorporation(e.target.value);
  };
  return (
    <div>
      <h4>Part 2 - Sponsoring Employer's Particulars</h4>
      <Divider />
      <Grid container spacing={2} className="diviBottom">
        <Grid item lg={6}>
          <label>
            Employment Status:
            <span className="errortext">*</span> :
          </label>
        </Grid>
        <Grid item lg={6}>
          <Field
            name="sponsored"
            component="select"
            value={sponsored}
            onChange={onSponsoredChange}
          >
            <option value>-- Select an option --</option>
            <option value="gov-sponsored">
              I am/will be sponsored by government body/statutory board
            </option>
            <option value="not-gov-sponsored">
              I am not/will not be sponsored by any government bodies, including
              statutory boards
            </option>
          </Field>
        </Grid>
      </Grid>
      <br />
      {/* <------ first Row ----------> */}
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <label>Name of Employer :</label>
        </Grid>
        <Grid item lg={6}>
          <Field name="Name" component="input" type="text" />
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <p>
            Nature of Business of Sponsoring Employer
            <span className="errortext">*</span> :<br />
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
          <Field name="nature-of-business" component="select">
            <option>-- Select an option --</option>
            <option value="maritime-law">Maritime Law</option>
            <option value="marine-insurance">Marine Insurance</option>
            <option value="port-terminal-operator">
              Port terminal operator
            </option>
            <option value="port-services">
              Port services eg. bunkering, towage
            </option>
            <option value="ship-broking">Ship broking</option>
            <option value="ship-agency">Ship agency</option>
            <option value="ship-finance">Ship finance</option>
            <option value="shipowning">Shipowning/operating/management</option>
            <option value="others">Others</option>
          </Field>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <p>
            Place of Incorporation
            <span className="errortext">*</span> :<br />
            <span className="labelNotes">
              Note: Only Singapore registered / incorporated maritime business
              entities / organisations can qualify for MCF support.
            </span>
          </p>
        </Grid>
        <Grid item lg={6}>
          <Field
            name="placeOfIncorporation"
            component="select"
            value={placeOfIncorporation}
            onChange={onPlaceOfIncorporationChange}
          >
            <option>-- Select an option --</option>
            <option value="singapore">Singapore</option>
            <option value="others">Others</option>
          </Field>
        </Grid>
      </Grid>
      {sponsored === "gov-sponsored" && <PartFour />}
      {placeOfIncorporation === "singapore" && <PartThree />}
      {placeOfIncorporation === "others" && <PartFour />}
    </div>
  );
};
export default PartTwo;
