// app/components/SalesTable.js
"use client";

import * as React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
  Stack,
  Typography,
  Button,
} from "@mui/material";

import SalesTableHeader from "./SalesTableHeader";
import SalesTableRow from "./SalesTableRow";
import DecisionModal from "./DecisionModal";
import RecipientsModal from "./RecipientsModal";
import StandardGuidanceModal from "./StandardGuidanceModal";

// ✅ Import data from separate file
import { columns, initialRows } from "./salesTableData";

export default function SalesTable() {
  const [rows, setRows] = React.useState(initialRows);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [orderBy, setOrderBy] = React.useState("due");
  const [order, setOrder] = React.useState("asc");

  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedBid, setSelectedBid] = React.useState(null);
  const [recipientsOpen, setRecipientsOpen] = React.useState(false);
  const [guidanceOpen, setGuidanceOpen] = React.useState(false);

  const openDecisionModal = (bid) => {
    setSelectedBid(bid);
    setModalOpen(true);
  };
  const closeDecisionModal = () => {
    setModalOpen(false);
    setSelectedBid(null);
  };

  const applyDecision = (updatedDecision) => {
    setRows((prev) =>
      prev.map((row) =>
        row.title === updatedDecision.title
          ? {
              ...row,
              goNoGo: updatedDecision.goNoGo,
              bidDecision: updatedDecision.bidDecision,
            }
          : row
      )
    );
    closeDecisionModal();
  };

  const handleSort = (colId) => {
    if (orderBy === colId) setOrder(order === "asc" ? "desc" : "asc");
    else {
      setOrderBy(colId);
      setOrder("asc");
    }
  };

  const sorted = React.useMemo(() => {
    const data = [...rows];
    data.sort((a, b) => {
      const av = a[orderBy] ?? "";
      const bv = b[orderBy] ?? "";
      if (orderBy === "due")
        return (new Date(av) - new Date(bv)) * (order === "asc" ? 1 : -1);
      return String(av).localeCompare(String(bv)) * (order === "asc" ? 1 : -1);
    });
    return data;
  }, [rows, orderBy, order]);

  const visible = sorted.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper elevation={1}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ p: 2 }}
      >
        <Typography variant="h6" fontWeight="bold">
          Sales Framework Automation
        </Typography>
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" onClick={() => setRecipientsOpen(true)}>
            Framework Recipients
          </Button>
          <Button variant="outlined" onClick={() => setGuidanceOpen(true)}>
            Standard Guidance
          </Button>
        </Stack>
      </Stack>

      <TableContainer>
        <Table stickyHeader>
          <SalesTableHeader
            columns={columns}
            orderBy={orderBy}
            order={order}
            onSort={handleSort}
          />
          <TableBody>
            {visible.map((row) => (
              <SalesTableRow
                key={row.title}
                row={row}
                onDecisionClick={openDecisionModal}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={rows.length}
        page={page}
        onPageChange={(_, p) => setPage(p)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        }}
        rowsPerPageOptions={[5, 10, 25]}
      />

      <DecisionModal
        open={modalOpen}
        onClose={closeDecisionModal}
        bid={selectedBid}
        onSetDecision={applyDecision}
      />
      <RecipientsModal
        open={recipientsOpen}
        onClose={() => setRecipientsOpen(false)}
      />
      <StandardGuidanceModal
        open={guidanceOpen}
        onClose={() => setGuidanceOpen(false)}
      />
    </Paper>
  );
}
