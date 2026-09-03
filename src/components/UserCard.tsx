import type { User } from "../types/user";
import { Link } from "react-router-dom";
import "../style/UserCard.css";

interface UserCardProp {
  user: User;
}

export default function UserCard({ user }: UserCardProp) {
  return (
    <Link to={`/users/${user.id}`} className="user-card">
      <span className="user-name">{user.name}</span>
      <p className="user-email">{user.email}</p>
    </Link>
  );
}
