"use client";

import { FormControlLabel, Switch, Typography, TextField } from "@mui/material";
import CommitteeInputs from "./CommitteeInputs";

export default function GoNoGoForm({
  isGo,
  setIsGo,
  committee,
  setCommittee,
  reason,
  setReason,
  skipDecision,
  setSkipDecision,
  salesOpsEmails,
  setSalesOpsEmails,
  proposalMgrEmails,
  setProposalMgrEmails,
}) {
  return (
    <>
      {/* Go / No-Go toggle */}
      <FormControlLabel
        control={
          <Switch
            checked={isGo}
            onChange={() => setIsGo(!isGo)}
            disabled={skipDecision}
          />
        }
        label={isGo ? "Go" : "No-Go"}
      />

      {/* Skip Decision toggle only for Go */}
      {isGo && (
        <FormControlLabel
          control={
            <Switch
              checked={skipDecision}
              onChange={() => setSkipDecision(!skipDecision)}
            />
          }
          label="Skip Decision"
        />
      )}

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

      {/* ✅ Go/No-Go Reason (disabled when skipDecision is true) */}
      <Typography variant="subtitle2" sx={{ mt: 2 }} fontWeight="bold">
        Reason for the decision
      </Typography>
      <TextField
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        placeholder="Enter reason for the decision"
        variant="outlined"
        size="small"
        fullWidth
        multiline
        minRows={4}
        disabled={skipDecision} // ✅ disables input when skipDecision is true
        sx={{ mt: 1 }}
      />
    </>
  );
}
