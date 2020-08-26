import React from "react";

const PillButton = (props) => {
  const styling = {
    backgroundColor: props.bgcol,
    border: "none",
    color: props.col,
    padding: "10px 20px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    margin: "4px 2px",
    borderRadius: "16px",
  };

  return <p style={styling}>{props.title}</p>;
};

export default PillButton;
