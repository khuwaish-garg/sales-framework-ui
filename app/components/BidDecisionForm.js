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
      {/* Toggle between Bid and No-Bid */}
      <FormControlLabel
        control={<Switch checked={isGo} onChange={() => setIsGo(!isGo)} />}
        label={isGo ? "Bid" : "No-Bid"}
      />

      {isGo ? (
        <>
          {/* Bid case: show review date */}
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
          {/*No-Bid case: committee members */}
          <Typography variant="subtitle2" sx={{ mt: 2 }} fontWeight="bold">
            Committee Members names
          </Typography>
          <CommitteeInputs
            committee={committee}
            setCommittee={setCommittee}
            label="Committee Member"
          />

          {/* No-Bid case: reason field */}
          <Typography variant="subtitle2" sx={{ mt: 2 }} fontWeight="bold">
            Reason for No-Bid decision
          </Typography>
          <TextField
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Enter reason for No-Bid decision"
            variant="outlined"
            size="small"
            fullWidth
            multiline
            minRows={4}
          />
        </>
      )}
    </>
  );
}
