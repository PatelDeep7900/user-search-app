import type { User } from '../types/user'
import { Link } from 'react-router-dom'


interface UserCardProp{
    user:User
} 

export default function UserCard({user}:UserCardProp) {
  return (
   <Link to={`/users/${user.id}`}  style={{
        display: "block",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        marginBottom: "8px",
        textDecoration: "none",
        color: "inherit",
      }}>
    <strong>{user.name}</strong>
    <p style={{ margin: 0, color: "#666" }}>{user.email}</p>
   </Link>
  )
}
