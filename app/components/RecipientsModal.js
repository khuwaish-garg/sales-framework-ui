"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  TextField,
  Stack,
} from "@mui/material";
import { useState } from "react";

export default function RecipientsModal({ open, onClose }) {
  const [captureEmails, setCaptureEmails] = useState([""]);
  const [frameworkEmails, setFrameworkEmails] = useState([""]);

  const addEmail = (setter, emails) => setter([...emails, ""]);

  const updateEmail = (setter, emails, idx, value) => {
    const updated = [...emails];
    updated[idx] = value;
    setter(updated);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle fontWeight="bold">Framework Recipients</DialogTitle>
      <DialogContent>
        <Typography variant="subtitle2" sx={{ mt: 2 }} fontWeight="bold">
          Capture Manager
        </Typography>
        <Stack spacing={1}>
          {captureEmails.map((email, idx) => (
            <TextField
              key={idx}
              label={`Capture Manager email ${idx + 1}`}
              value={email}
              onChange={(e) =>
                updateEmail(
                  setCaptureEmails,
                  captureEmails,
                  idx,
                  e.target.value
                )
              }
            />
          ))}
          <Button
            size="small"
            onClick={() => addEmail(setCaptureEmails, captureEmails)}
          >
            Add another email
          </Button>
        </Stack>

        <Typography variant="subtitle2" sx={{ mt: 3 }} fontWeight="bold">
          Framework Manager
        </Typography>
        <Stack spacing={1}>
          {frameworkEmails.map((email, idx) => (
            <TextField
              key={idx}
              label={`Framework Manager email ${idx + 1}`}
              value={email}
              onChange={(e) =>
                updateEmail(
                  setFrameworkEmails,
                  frameworkEmails,
                  idx,
                  e.target.value
                )
              }
            />
          ))}
          <Button
            size="small"
            onClick={() => addEmail(setFrameworkEmails, frameworkEmails)}
          >
            Add another email
          </Button>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
