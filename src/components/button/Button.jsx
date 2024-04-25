import React from "react";
import { Link } from "react-router-dom";
const Button = ({ value, color = "", path = "#", width }) => {
  return (
    <Link to={`${path}`}>
      <button
        style={{ backgroundColor: color, width }}
        className={`w-full rounded-xl text-lg bg-blue-500 text-white py-3`}
      >
        {value}
      </button>
    </Link>
  );
};

export default Button;
