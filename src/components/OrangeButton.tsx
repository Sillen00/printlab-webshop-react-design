import { ReactNode } from "react";
import "./OrangeButton.css";

interface OrangeButtonProps {
  children: ReactNode;
}

function OrangeButton({ children }: OrangeButtonProps) {
  return (
    <>
      <button className="orange-btn">{children}</button>
    </>
  );
}

export default OrangeButton;
