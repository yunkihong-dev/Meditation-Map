import type { CSSProperties } from "react";
import { KOREA_REGIONS } from "@/data/koreaRegions";
import { AdminField, AdminLabel } from "./adminStyles";

export const adminSelectStyle: CSSProperties = {
  width: "100%",
  padding: 8,
  borderRadius: 8,
  background: "#09090b",
  color: "#fff",
  border: "1px solid #3f3f46",
};

interface AdminRegionSelectProps {
  label?: string;
  value: string;
  onChange: (regionId: string) => void;
}

export function AdminRegionSelect({ label = "지역", value, onChange }: AdminRegionSelectProps) {
  return (
    <AdminField>
      <AdminLabel>{label}</AdminLabel>
      <select value={value} onChange={(e) => onChange(e.target.value)} style={adminSelectStyle}>
        {KOREA_REGIONS.map((r) => (
          <option key={r.id} value={r.id}>
            {r.name}
          </option>
        ))}
      </select>
    </AdminField>
  );
}
