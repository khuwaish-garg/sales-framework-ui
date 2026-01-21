// app/components/SalesTableHeader.js
import { TableHead, TableRow, TableCell, Stack } from "@mui/material";

export default function SalesTableHeader({ columns, orderBy, order, onSort }) {
  return (
    <TableHead>
      <TableRow>
        {columns.map((col) => (
          <TableCell
            key={col.id}
            align="center" // ✅ centers text in the cell
            sx={{ minWidth: col.minWidth, cursor: "pointer" }}
            onClick={() => onSort(col.id)}
          >
            <Stack
              direction="row"
              justifyContent="center" // ✅ centers horizontally
              alignItems="center"
              spacing={1}
              sx={{ fontWeight: "bold" }}
            >
              <span>{col.label}</span>
              {orderBy === col.id ? (
                <small>{order === "asc" ? "▲" : "▼"}</small>
              ) : null}
            </Stack>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
