import { findByLabelText } from "@testing-library/dom";
import React from "react";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

function WelcomePage() {
  return (
    <div style={containerStyle}>
      <div style={{ fontSize: "5rem" }}>✌Welcome to React❤</div>
    </div>
  );
}

export default WelcomePage;
