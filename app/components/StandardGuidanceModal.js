"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Stack,
} from "@mui/material";

export default function StandardGuidanceModal({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle fontWeight="bold">Standard Guidance</DialogTitle>
      <DialogContent>
        <Stack spacing={3}>
          <Typography variant="subtitle2">
            The standard Lorem Ipsum passage, used since the 1500s
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </Typography>

          <Typography variant="subtitle2">
            Section 1.10.32 of de Finibus Bonorum et Malorum, written by Cicero
            in 45 BC
          </Typography>
          <Typography variant="body2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium...
          </Typography>

          <Typography variant="subtitle2">
            1914 translation by H. Rackham
          </Typography>
          <Typography variant="body2">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born...
          </Typography>

          <Typography variant="subtitle2">
            Section 1.10.33 of de Finibus Bonorum et Malorum, written by Cicero
            in 45 BC
          </Typography>
          <Typography variant="body2">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti...
          </Typography>

          <Typography variant="subtitle2">
            1914 translation by H. Rackham
          </Typography>
          <Typography variant="body2">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized...
          </Typography>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
