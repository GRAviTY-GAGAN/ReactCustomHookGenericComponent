import React, { useState } from "react";
import "./Input.css";
import PropTypes from "prop-types";

const Input = ({ type = "text", size = "md", variant, value, onChange }) => {
  return (
    <input
      className={`${variant} ${size}`}
      onChange={onChange}
      value={value}
      type={type}
      data-testid="inputTag"
    />
  );
};

export default Input;

Input.propTypes = {
  variant: PropTypes.string.isRequired,
  type: PropTypes.string,
  size: PropTypes.string,
  value: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  size: "md",
};
