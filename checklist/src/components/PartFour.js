import React from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

const PartFour = () => {
  return (
    <div>
      <h4>Part 4 - Preliminary Assessment</h4>
      <Divider className="divi" />
      <Grid container>
        <Grid item lg={12}>
          <p>
            Based on the input above, you do not qualify for MCF grant support.
          </p>
        </Grid>
        <Grid item lg={12}>
          <h4>Notes</h4>
          <Divider className="divi" />
          <Grid item lg={12}>
            <ol>
              <li>
                The purpose of this Self Assessment Checklist is solely to
                provide persons who are considering applying for the MCF-CC
                Training Grant (the "<b>Training Grant</b>") with a means of
                assessing their eligibility to receive the Training Grant.
                Please note that:-
                <ul>
                  <li>
                    This Self Assessment Checklist is not an application for the
                    Training Grant, and the completion of this Self Assessment
                    Checklist does not constitute an application for the
                    Training Grant.
                  </li>
                  <li>
                    An indication of your eligibility for the Training Grant and
                    an indication of the amount which you are eligible for (if
                    any) will be given upon your completion of the Self
                    Assessment Checklist, based on the information provided by
                    you in the Self Assessment Checklist. These indications are
                    given solely for your reference and consideration, and are
                    not to be taken as approval on MPA's part to award the
                    MCF-CC Training Grant, and any particular amount(s), to you.
                    Nothing in this Self-Assessment Checklist binds or otherwise
                    obliges MPA to award the MCF-CC Training Grant, and any
                    particular amount(s), to you.
                  </li>
                </ul>
              </li>
              <li>
                Your eligibility may change if there are changes to any of the
                above inputs that occurred during the course duration (eg.
                employment status, citizenship).
              </li>
              <li>
                The grant support if shown above, is an
                <b>
                  <u>estimated</u>
                </b>
                sum. The actual grant amount will be calculated and approved by
                MPA based on actual course fee incurred by you, subject to cap,
                stated in part 3 above, upon submission of the required document
                to support your claim and MPA's review and acceptance of such
                documents.
              </li>
              <li>
                Claim submissions for the training grant must be submitted via
                email to MPA at <a href="/">mcf@mpa.gov.sg</a> within{" "}
                <b>
                  <u>1 year</u>
                </b>
                of course completion date, and must comply fully with the terms
                and conditions stated in the claim submission form to be
                eligible for consideration by MPA. The following supporting
                documents must be submitted:
                <ul>
                  <li>
                    copies of the invoice(s) and receipt(s) for payment of the
                    course fee;
                  </li>
                  <li>
                    if course fee is paid in foreign currency, copies of
                    relevant bank statement or remittance transfer to show the
                    equivalent payment in local currency or the foreign exchange
                    rate used. Otherwise, payment will be converted to SGD using
                    the prevailing foreign exchange rate provided by Monetary
                    Authority of Singapore (MAS) on date of payment;
                  </li>
                  <li>
                    copy of the course certificate to show successful
                    completion;
                  </li>
                  <li>NRIC (front and back);</li>
                  <li>bank account number.</li>
                </ul>
              </li>
              <li>
                You may wish to save a copy of this preliminary assessment for
                your reference.
              </li>
            </ol>
            <p>
              I have noted the above and agree that approval of grant is
              subjected to the fulfilment of all eligibility criteria. MPA
              reserves the right to reject any claim in the event that I failed
              to comply or observe any of the eligibility criteria or fail to
              produce any supporting documents.
            </p>
          </Grid>
        </Grid>
      </Grid>
      <div className="btn">
        <Button>I Agree</Button>
      </div>
    </div>
  );
};
export default PartFour;
