import React from "react";
import "./Button.css";

interface ButtonProps {
  label: string;
  addClassName?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button className={`yk_button_class ${props.addClassName}`}>
      {props.label} teste to npm
    </button>
  );
};

export default Button;
