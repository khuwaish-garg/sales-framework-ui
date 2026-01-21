import { Stack, TextField, Button } from "@mui/material";

export default function CommitteeInputs({ committee, setCommittee, label }) {
  const addItem = () => setCommittee([...committee, ""]);
  const updateItem = (idx, value) => {
    const updated = [...committee];
    updated[idx] = value;
    setCommittee(updated);
  };

  return (
    <Stack spacing={1}>
      {committee.map((val, idx) => (
        <TextField
          key={idx}
          // Use placeholder instead of label to avoid blue text inside boundary
          placeholder={`${label} ${idx + 1}`}
          value={val}
          onChange={(e) => updateItem(idx, e.target.value)}
          variant="outlined"
          size="small"
          fullWidth
          InputLabelProps={{ shrink: true }} // ensures no floating label overlap
        />
      ))}
      <Button onClick={addItem} size="small">
        Add another {label.toLowerCase()}
      </Button>
    </Stack>
  );
}
