// app/components/DecisionChip.js
import { Chip } from "@mui/material";

export default function DecisionChip({ value }) {
  const mapColor = {
    Go: "success",
    "No-Go": "error",
    Bid: "primary",
    "No-Bid": "warning",
    Pending: "default",
  };

  return (
    <Chip
      label={value}
      color={mapColor[value] || "default"}
      variant="outlined"
      size="small"
    />
  );
}
