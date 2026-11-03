import React from "react";
import { ArrowUpRight } from "lucide-react";
import "./button-with-icon.css";

const ButtonWithIcon = ({ 
  children, 
  text = "Let's Collaborate", 
  className = "", 
  type = "button",
  ...props 
}) => {
  return (
    <button 
      type={type} 
      className={`btn-collaborate ${className}`} 
      {...props}
    >
      <span className="btn-text">{children || text}</span>
      <div className="btn-icon-circle">
        <ArrowUpRight size={16} />
      </div>
    </button>
  );
};

export const ButtonWithIconDemo = () => {
  return <ButtonWithIcon />;
};

export default ButtonWithIcon;

