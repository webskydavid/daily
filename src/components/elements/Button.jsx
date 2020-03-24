import React from "react";
import { string, func, oneOf } from "prop-types";
import ButtonStyle from "./Button.module.scss";

const mergeClasses = (styles, prefix, ...attr) => {
  let str = [];
  for (const a of attr) {
    if (styles[a]) {
      str.push(styles[a]);
    }
  }

  return `${prefix} ${str.join(" ")}`;
};

const Button = ({
  size = "medium",
  variant = "default",
  text = "",
  onClick,
  type = "button"
}) => {
  return (
    <button
      className={mergeClasses(ButtonStyle, ButtonStyle.btn, variant, size)}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  size: oneOf(["small", "medium", "large"]).isRequired,
  variant: oneOf(["default", "primary", "info", "warning", "danger"])
    .isRequired,
  text: string.isRequired,
  onClick: func.isRequired,
  type: oneOf(["button", "submit", "reset"]).isRequired
};

export default Button;
