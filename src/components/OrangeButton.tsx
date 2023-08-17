import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import "./OrangeButton.css";

interface OrangeButtonProps {
  children: ReactNode;
}

function OrangeButton({ children }: OrangeButtonProps) {
  return (
    <>
      <NavLink to="/shop">
        <button className="orange-btn">{children}</button>
      </NavLink>
    </>
  );
}

export default OrangeButton;
