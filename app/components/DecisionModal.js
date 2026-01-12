"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";

import DecisionStepSelect from "./DecisionStepSelect";
import GoNoGoForm from "./GoNoGoForm";
import BidDecisionForm from "./BidDecisionForm";

export default function DecisionModal({ open, onClose, bid, onSetDecision }) {
  const [isGo, setIsGo] = useState(true);
  const [committee, setCommittee] = useState([""]);
  const [reason, setReason] = useState("");
  const [skipDecision, setSkipDecision] = useState(false); // <-- NEW state
  const [step, setStep] = useState("select"); // "select", "goNoGo", "bidDecision"
  const [salesOpsEmails, setSalesOpsEmails] = useState([""]);
  const [proposalMgrEmails, setProposalMgrEmails] = useState([""]);

  const [bidReviewDate, setBidReviewDate] = useState("");

  useEffect(() => {
    if (bid) {
      setIsGo(true);
      setCommittee([""]);
      setReason("");
      setSkipDecision(false); // <-- reset skipDecision
      setStep("select");
      setBidReviewDate("");
    }
  }, [bid]);

  const handleSetDecision = () => {
    const updated = {
      title: bid.title,
      goNoGo: step === "goNoGo" ? (isGo ? "Go" : "No-Go") : bid.goNoGo,
      bidDecision:
        step === "bidDecision" ? (isGo ? "Bid" : "No-Bid") : bid.bidDecision,
      committee,
      reason: skipDecision ? "Skipped" : reason, // <-- use skipDecision
      bidReviewDate,
      skipDecision, // <-- include in updated object
    };

    if (onSetDecision) {
      onSetDecision(updated);
    }

    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle gutterBottom fontWeight="bold">
        {bid?.title || "Bid title"}
      </DialogTitle>
      <DialogContent>
        <Typography variant="body2" gutterBottom fontWeight="bold">
          {bid?.client} • {bid?.due}
        </Typography>

        {step === "select" && <DecisionStepSelect setStep={setStep} />}

        {step === "goNoGo" && (
          <GoNoGoForm
            isGo={isGo}
            setIsGo={setIsGo}
            committee={committee}
            setCommittee={setCommittee}
            reason={reason}
            setReason={setReason}
            skipDecision={skipDecision} // <-- pass new state
            setSkipDecision={setSkipDecision}
            salesOpsEmails={salesOpsEmails}
            setSalesOpsEmails={setSalesOpsEmails}
            proposalMgrEmails={proposalMgrEmails}
            setProposalMgrEmails={setProposalMgrEmails}
          />
        )}

        {step === "bidDecision" && (
          <BidDecisionForm
            isGo={isGo}
            setIsGo={setIsGo}
            committee={committee}
            setCommittee={setCommittee}
            reason={reason}
            setReason={setReason}
            bidReviewDate={bidReviewDate}
            setBidReviewDate={setBidReviewDate}
          />
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Discard</Button>
        {(step === "goNoGo" || step === "bidDecision") && (
          <Button variant="contained" onClick={handleSetDecision}>
            Set decision
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
