import type { ChangeEvent } from "react";

interface SearchBarProp {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProp) {
     const handleChange = (e : ChangeEvent<HTMLInputElement>) :void =>{
        onChange(e.target.value);
   }
  return (
    <input
      type="text"
      name="search"
      value={value}
      placeholder="Search Users...."
      onChange={handleChange}
      style={{ width: "100%", padding: "8px", marginBottom: "16px" }}
    />
  );
}
