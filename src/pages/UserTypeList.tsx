import useFetch from "../hooks/useFetch";
import { USERS_URL } from "../api/user";
import type { User } from "../types/user";
import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import StatusMessage from "../components/StatusMessage";
import '../style/UserTypeList.css'

export default function UserTypeList() {
  const { data: users, loading, error } = useFetch<User[]>(USERS_URL);
  const [search, setSearch] = useState<string>("");

  const filterSearch: User[] =
    users?.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()),
    ) ?? [];

  return (
  <div className="user-type-list-container">
    <SearchBar value={search} onChange={setSearch} />
    {loading && <StatusMessage type="loading" />}
    {error && <StatusMessage type="error" message={error} />}
    {!loading && !error && (
      <div className="user-list-scroll-area">
        {filterSearch.map((u) => (
          <UserCard user={u} key={u.id} />
        ))}
      </div>
    )}
  </div>
);
}
