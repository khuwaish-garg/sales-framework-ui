// app/components/SalesTableRow.js
import { TableRow, TableCell, Button, Chip } from "@mui/material";
import DecisionChip from "./DecisionChip";

export default function SalesTableRow({ row, onDecisionClick }) {
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
      <TableCell>{row.title}</TableCell>
      <TableCell>{row.client}</TableCell>
      <TableCell>{row.due}</TableCell>
      <TableCell>
        <Button variant="text" size="small">
          MS Form
        </Button>
      </TableCell>
      <TableCell>
        <DecisionChip value={row.goNoGo} />
      </TableCell>
      <TableCell>
        <DecisionChip value={row.bidDecision} />
      </TableCell>
      <TableCell>{renderBoolChip(row.guidanceReviewed)}</TableCell>
      <TableCell>{renderBoolChip(row.bidSubmitted)}</TableCell>
      <TableCell>{renderBoolChip(row.bidAccepted)}</TableCell>
      <TableCell>
        <Button
          variant="contained"
          size="small"
          onClick={() => onDecisionClick(row)}
        >
          Set decision
        </Button>
      </TableCell>
    </TableRow>
  );
}
