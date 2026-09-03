import type { ChangeEvent } from "react";
import { MdSearch } from "react-icons/md";

interface SearchBarProp {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProp) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange(e.target.value);
  };
  return (
    <div className="input-wrapper">
      <input
        type="text"
        name="search"
        value={value}
        placeholder="Search Users...."
        onChange={handleChange}
        style={{ width: "100%", padding: "8px", marginBottom: "16px" }}
      />
      <span className="input-icon">
        <MdSearch />
      </span>
    </div>
  );
}
