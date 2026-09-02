import useFetch from "../hooks/useFetch";
import { USERS_URL } from "../api/user";
import type { User } from "../types/user";
import UserCard from "../components/UserCard";

export default function UserTypeList() {
  const { data: users, loading, error } = useFetch<User[]>(USERS_URL);

  if (loading) return <p>Loading.....</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "10px" }}>
      <ul>
        {users?.length !== 0 ? users?.map((u) => <UserCard user={u} />) : null}
      </ul>
    </div>
  );
}
