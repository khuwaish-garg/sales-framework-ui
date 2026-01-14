import { Stack, Button } from "@mui/material";

export default function DecisionStepSelect({ setStep }) {
  return (
    <Stack spacing={2} sx={{ mt: 2 }}>
      <Button variant="outlined" onClick={() => setStep("goNoGo")}>
        Go/No-Go/Skip Decision
      </Button>
      <Button variant="outlined" onClick={() => setStep("bidDecision")}>
        Bid/No-Bid Decision
      </Button>
    </Stack>
  );
}
