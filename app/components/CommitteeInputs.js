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
          label={`${label} ${idx + 1}`}
          value={val}
          onChange={(e) => updateItem(idx, e.target.value)}
        />
      ))}
      <Button onClick={addItem} size="small">
        Add another {label.toLowerCase()}
      </Button>
    </Stack>
  );
}
