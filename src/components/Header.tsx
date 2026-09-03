import { MdArrowBack } from "react-icons/md";
import "../style/Header.css";

interface HeaderProp {
  title: string;
  onClickBack: () => void;
  isBackButton?: boolean;
}

export default function Header({
  title,
  onClickBack,
  isBackButton = false,
}: HeaderProp) {
  return (
    <header className="header">
      {isBackButton ? (
        <div className="back-button" onClick={onClickBack}>
          <MdArrowBack />
        </div>
      ) : null}
      <div className="header-title">{title}</div>
    </header>
  );
}
