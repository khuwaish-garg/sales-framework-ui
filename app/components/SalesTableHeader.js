// app/components/SalesTableHeader.js
import { TableHead, TableRow, TableCell, Stack } from "@mui/material";

export default function SalesTableHeader({ columns, orderBy, order, onSort }) {
  return (
    <TableHead>
      <TableRow>
        {columns.map((col) => (
          <TableCell
            key={col.id}
            sx={{ minWidth: col.minWidth, cursor: "pointer" }}
            onClick={() => onSort(col.id)}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              variant="subtitle2"
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
