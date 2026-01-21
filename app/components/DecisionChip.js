import { Chip } from "@mui/material";

export default function DecisionChip({ value }) {
  const getColor = () => {
    switch (value) {
      case "Go":
        return "success";
      case "No-Go":
        return "error";
      case "Pending":
        return "default";
      case "Bid":
        return "primary";
      case "No-Bid":
        return "warning";
      default:
        return "default";
    }
  };

  return (
    <Chip
      label={value || "-"}
      color={getColor()}
      variant="outlined"
      size="small"
      sx={{
        minWidth: 80,
        justifyContent: "center",
        textTransform: "capitalize",
      }}
    />
  );
}
