import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch"
import { getUserById } from "../api/user";
import type { User } from "../types/user";



export default function UserDetailPage() {
  const {id} = useParams<{id : string}>();
  const navigate = useNavigate();
  const {data : user,loading,error} = useFetch<User>(getUserById(id || "" ));
  
  if(loading) return <p>Loading...</p>;
  if(error) return <p style={{color:"red"}}>{error}</p>;
  return (
      <div>
      <button onClick={() => navigate("/users")}>
        ← Back to Users
      </button>

      <h1>User Details</h1>

      <p>
        <strong>ID:</strong> {user?.id}
      </p>

      <p>
        <strong>Name:</strong> {user?.name}
      </p>

      <p>
        <strong>Email:</strong> {user?.email}
      </p>

      <p>
        <strong>Username:</strong> {user?.username}
      </p>

      <p>
        <strong>Phone:</strong> {user?.phone}
      </p>
    </div>
  )
}
