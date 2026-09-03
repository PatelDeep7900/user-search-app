import Loader from "./Loader";
import "../style/StatusMessage.css";

interface StatusMessageProps {
  type: "loading" | "error";
  message?: string;
}

function StatusMessage({ type, message }: StatusMessageProps) {
  return (
    <div className="status-message-container">
      {type === "loading" ? (
        <Loader />
      ) : (
        <p className="status-error">{message ?? "Something went wrong."}</p>
      )}
    </div>
  );
}

export default StatusMessage;
