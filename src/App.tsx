import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./style/App.css";
import Header from "./components/Header";
import UserTypeList from "./pages/UserTypeList";
import UserDetailPage from "./pages/UserDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="app">
      <Header title="User Search App" onClickBack={() => navigate("/users")} isBackButton={location.pathname != "/users"}/>

      <main className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />
          <Route path="/users" element={<UserTypeList />} />
          <Route path="/users/:id" element={<UserDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
