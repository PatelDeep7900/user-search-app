import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div style={{height:"100vh" , display:"flex", alignItems:"center" , justifyContent:"center", flexDirection: "column"}}>
      <h2>404 — Page Not Found</h2>
      <Link to="/">Go back home</Link>
    </div>
  );
}

export default NotFoundPage;