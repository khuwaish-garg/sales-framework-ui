import Image from "next/image";
import Button from "@mui/material/Button";
import SalesTable from "./components/SalesTable";

export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <SalesTable />
    </main>
  );
}
