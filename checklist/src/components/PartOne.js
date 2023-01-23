import React from "react";
import { Field } from "redux-form";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import PartTwo from "./PartTwo";
import PartFour from "./PartFour";
import PartThree from "./PartThree";

const PartOne = () => {
  const [selectedCitizen, setSelectedCitizen] = useState();
  const [selectedSponsorship, setSelectedSponsorship] = useState();

  const onCitizenChange = (e) => {
    setSelectedCitizen(e.target.value);
  };
  const onSponsorshipChange = (e) => {
    setSelectedSponsorship(e.target.value);
  };

  return (
    <div>
      <Grid item lg={12}>
        <p className="firstp">Best viewed in Chrome or Microsoft Edge</p>
      </Grid>
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
      <Grid container spacing={2} className="diviBottom">
        <Grid item lg={6}>
          <label>Name</label>
        </Grid>
        <Grid item lg={6}>
          <Field name="Name" component="input" type="text" />
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <label>
            Citizenship <span className="errortext">*</span> :
          </label>
          <br />
          <span class="labelNotes">
            Note: To qualify for MCF grant support, you must be a Singapore
            Citizen or Singapore Permanent Resident throughout the course
            duration.
          </span>
        </Grid>
        <Grid item lg={6}>
          <Field
            name="Citizenship"
            component="select"
            value={selectedCitizen}
            onChange={onCitizenChange}
          >
            <option>--- Select an option ---</option>
            <option value="foreigner">Foreigner</option>
            <option value="singaporecitizen">Singapore Citizen</option>
            <option value="singaporepermanent">
              Singapore Permanent Resident
            </option>
          </Field>
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <label>
            Sponsorship Status <span className="errortext">*</span> :
          </label>
        </Grid>
        <Grid item lg={6}>
          <Field
            name="Sponsorship"
            component="select"
            value={selectedSponsorship}
            onChange={onSponsorshipChange}
          >
            <option>--- Select an option ---</option>
            <option value="selfsponsored">Self-sponsored</option>
            <option value="companysponsored">Company-sponsored</option>
          </Field>
        </Grid>
      </Grid>
      {selectedCitizen === "foreigner" && <PartFour />}

      {selectedCitizen === "singaporecitizen" &&
        selectedSponsorship === "selfsponsored" && <PartThree />}

      {selectedCitizen === "singaporecitizen" &&
        selectedSponsorship === "companysponsored" && <PartTwo />}

      {selectedCitizen === "singaporepermanent" &&
        selectedSponsorship === "selfsponsored" && <PartThree />}
      {selectedCitizen === "singaporepermanent" &&
        selectedSponsorship === "companysponsored" && <PartTwo />}
    </div>
  );
};

export default PartOne;
