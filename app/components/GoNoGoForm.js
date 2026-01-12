"use client";

import {
  FormControlLabel,
  Switch,
  Typography,
  TextField,
  Checkbox,
} from "@mui/material";
import CommitteeInputs from "./CommitteeInputs";

export default function GoNoGoForm({
  isGo,
  setIsGo,
  committee,
  setCommittee,
  reason,
  setReason,
  skipReason,
  setSkipReason,
  salesOpsEmails,
  setSalesOpsEmails,
  proposalMgrEmails,
  setProposalMgrEmails,
}) {
  return (
    <>
      <FormControlLabel
        control={<Switch checked={isGo} onChange={() => setIsGo(!isGo)} />}
        label={isGo ? "Go" : "No-Go"}
      />

      {isGo ? (
        <>
          {/* Reviewers */}
          <Typography variant="subtitle2" sx={{ mt: 2 }} fontWeight="bold">
            Reviewers
          </Typography>
          <CommitteeInputs
            committee={committee}
            setCommittee={setCommittee}
            label="Reviewer email"
          />

          {/* Sales Operation Team */}
          <Typography variant="subtitle2" sx={{ mt: 2 }} fontWeight="bold">
            Sales Operation Team
          </Typography>
          <CommitteeInputs
            committee={salesOpsEmails}
            setCommittee={setSalesOpsEmails}
            label="Sales Operation email"
          />

          {/* Proposal Manager */}
          <Typography variant="subtitle2" sx={{ mt: 2 }} fontWeight="bold">
            Proposal Manager
          </Typography>
          <CommitteeInputs
            committee={proposalMgrEmails}
            setCommittee={setProposalMgrEmails}
            label="Proposal Manager email"
          />
        </>
      ) : (
        <>
          {/* No-Go case: committee members */}
          <Typography variant="subtitle2" sx={{ mt: 2 }} fontWeight="bold">
            Committee Members names
          </Typography>
          <CommitteeInputs
            committee={committee}
            setCommittee={setCommittee}
            label="Committee Member"
          />
        </>
      )}

      {/* Reason section */}
      <Typography variant="subtitle2" sx={{ mt: 2 }} fontWeight="bold">
        {isGo ? "Go reason" : "No-Go reason"}
      </Typography>
      {isGo && (
        <FormControlLabel
          control={
            <Checkbox
              checked={skipReason}
              onChange={() => setSkipReason(!skipReason)}
            />
          }
          label="Skip reason"
        />
      )}
      {(!isGo || !skipReason) && (
        <TextField
          fullWidth
          multiline
          rows={3}
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Reason for the decision"
        />
      )}
    </>
  );
}
