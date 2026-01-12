"use client";

import { FormControlLabel, Switch, Typography, TextField } from "@mui/material";
import CommitteeInputs from "./CommitteeInputs";

export default function BidDecisionForm({
  isGo,
  setIsGo,
  committee,
  setCommittee,
  reason,
  setReason,
  bidReviewDate,
  setBidReviewDate,
}) {
  return (
    <>
      <FormControlLabel
        control={<Switch checked={isGo} onChange={() => setIsGo(!isGo)} />}
        label={isGo ? "Bid" : "No-Bid"}
      />

      {isGo ? (
        <>
          <Typography variant="subtitle2" sx={{ mt: 2 }} fontWeight="bold">
            Bid Review date
          </Typography>
          <TextField
            type="date"
            fullWidth
            value={bidReviewDate}
            onChange={(e) => setBidReviewDate(e.target.value)}
          />
        </>
      ) : (
        <>
          <Typography variant="subtitle2" sx={{ mt: 2 }} fontWeight="bold">
            Committee Members names
          </Typography>
          <CommitteeInputs
            committee={committee}
            setCommittee={setCommittee}
            label="Committee Member"
          />

          <Typography variant="subtitle2" sx={{ mt: 2 }} fontWeight="bold">
            No-Bid reason
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={3}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Reason for the decision"
          />
        </>
      )}
    </>
  );
}
