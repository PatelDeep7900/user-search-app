import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { getUserById } from "../api/user";
import type { User } from "../types/user";
import StatusMessage from "../components/StatusMessage";
import { UserDtlModel } from "../model/UserDtlModel";
import '../style/UserDetailPage.css'

export default function UserDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data: user, loading, error } = useFetch<User>(getUserById(id || ""));

  const getValue = (user: User, path: string): string => {
    let value: unknown = user;

    for (const key of path.split(".")) {
      if (typeof value === "object" && value !== null) {
        value = (value as Record<string, unknown>)[key];
      } else {
        return "";
      }
    }

    return typeof value === "string" || typeof value === "number"
      ? String(value)
      : "";
  };

  return (
    <div className="user-dtl-card-container">
      {loading && <StatusMessage type="loading" />}
      {error && <StatusMessage type="error" message={error} />}
      {!loading && !error && !user && <StatusMessage type="error" message="User not found." />}
     { !loading && !error && user && <div className="user-dtl-card">
        <div className="card-header">
          <h1>{user?.name}</h1>
        </div>
        <div className="card-body">
          {UserDtlModel.map((ud) => {
            const Icon = ud.icon;
           return <div className="card-body-wraper">
              <div className="card-body-title">
                <Icon className="title-icon" />
                <span>{ud.title}</span>
                </div>
              <div className="card-body-title-content">
                {ud.data.map((d) => (
                  <div className="content">
                    <span className="label">{d.label}</span>
                    <span className="value">{getValue(user, d.value)}</span>
                  </div>
                ))}
              </div>
            </div>
})}
        </div>
      </div>}
    </div>
  );
}
