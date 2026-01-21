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
  const [skipDecision, setSkipDecision] = useState(false);
  const [step, setStep] = useState("select");
  const [salesOpsEmails, setSalesOpsEmails] = useState([""]);
  const [proposalMgrEmails, setProposalMgrEmails] = useState([""]);
  const [bidReviewDate, setBidReviewDate] = useState("");

  useEffect(() => {
    if (bid) {
      setIsGo(true);
      setCommittee([""]);
      setReason("");
      setSkipDecision(false);
      setStep("select");
      setBidReviewDate("");
    }
  }, [bid]);

  // ✅ Check if Go/No-Go step is complete
  const isGoNoGoComplete = () => {
    return (
      skipDecision ||
      reason.trim().length > 0 ||
      (committee.length > 0 && committee.some((c) => c.trim() !== ""))
    );
  };

  const handleSetDecision = () => {
    const updated = {
      title: bid.title,
      goNoGo: step === "goNoGo" ? (isGo ? "Go" : "No-Go") : bid.goNoGo,
      goNoGoReason: skipDecision ? "Skipped" : reason,
      bidDecision:
        step === "bidDecision" ? (isGo ? "Bid" : "No-Bid") : bid.bidDecision,
      bidReason: step === "bidDecision" && !isGo ? reason : bid.bidReason,
      committee,
      reason: skipDecision ? "Skipped" : reason,
      bidReviewDate,
      skipDecision,
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

        {step === "select" && (
          <DecisionStepSelect
            setStep={setStep}
            disableBidStep={!isGoNoGoComplete()} // ✅ pass control to disable Bid button
          />
        )}

        {step === "goNoGo" && (
          <GoNoGoForm
            isGo={isGo}
            setIsGo={setIsGo}
            committee={committee}
            setCommittee={setCommittee}
            reason={reason}
            setReason={setReason}
            skipDecision={skipDecision}
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
