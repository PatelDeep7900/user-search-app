import useFetch from "../hooks/useFetch";
import { USERS_URL } from "../api/user";
import type { User } from "../types/user";
import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";
import { useState} from "react";

export default function UserTypeList() {
  const { data: users, loading, error } = useFetch<User[]>(USERS_URL);
   const [search, setSearch] = useState<string>("");

   const filterSearch: User[] = users?.filter((user)=> user.name.toLowerCase().includes(search.toLowerCase())) ?? [];
   

  if (loading) return <p>Loading.....</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "10px" }}>
         
        <SearchBar value={search} onChange={setSearch}/>
        {filterSearch?.length !== 0 ? filterSearch?.map((u) => <UserCard user={u} key={u.id}/>) : null}
    </div>
  );
}
