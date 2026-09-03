import { Link, useNavigate } from "react-router-dom";
import '../style/NotFoundPage.css'
import { MdArrowBack } from "react-icons/md";

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div
      className="not-found-container">
      <div className="code">404</div>
      <div className="page-not-found">Page Not Found</div>
      <button type="button" className="go-back-btn" onClick={() => navigate("/",{replace:true})}>
        <span className="go-back-icon"><MdArrowBack/></span>
        <span>Go back home</span>
        </button>
    </div>
  );
}

export default NotFoundPage;
