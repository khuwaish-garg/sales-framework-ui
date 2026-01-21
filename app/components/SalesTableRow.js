import { TableRow, TableCell, Button, Chip, Switch } from "@mui/material";
import DecisionChip from "./DecisionChip";

export default function SalesTableRow({
  row,
  onDecisionClick,
  onToggleChange,
}) {
  const renderBoolChip = (val) => (
    <Chip
      label={val ? "Yes" : "No"}
      color={val ? "success" : "default"}
      size="small"
      variant="outlined"
    />
  );

  return (
    <TableRow hover tabIndex={-1}>
      <TableCell align="center">{row.title}</TableCell>
      <TableCell align="center">{row.client}</TableCell>
      <TableCell align="center">{row.due}</TableCell>
      <TableCell align="center">
        <Button variant="text" size="small">
          MS Form
        </Button>
      </TableCell>
      <TableCell align="center">
        <DecisionChip value={row.goNoGo} />
      </TableCell>
      <TableCell align="center">{row.goNoGoReason}</TableCell>
      <TableCell align="center">
        <DecisionChip value={row.bidDecision} />
      </TableCell>
      <TableCell align="center">{row.bidReason}</TableCell>
      <TableCell align="center">
        <Button
          variant="contained"
          size="small"
          onClick={() => onDecisionClick(row)}
        >
          Set decision
        </Button>
      </TableCell>
      <TableCell align="center">
        <Switch
          checked={row.guidanceReviewed}
          onChange={(e) =>
            onToggleChange(row.title, "guidanceReviewed", e.target.checked)
          }
        />
      </TableCell>
      <TableCell align="center">
        <Switch
          checked={row.bidSubmitted}
          onChange={(e) =>
            onToggleChange(row.title, "bidSubmitted", e.target.checked)
          }
        />
      </TableCell>
      <TableCell align="center">
        <Switch
          checked={row.bidAccepted}
          onChange={(e) =>
            onToggleChange(row.title, "bidAccepted", e.target.checked)
          }
        />
      </TableCell>
    </TableRow>
  );
}
