import React from "react";
import truck from "../images/Vector (5).png";
const SemiFooter = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-between", padding:"1rem"}}>
      <div style={{ display: "flex" }}>
        <img src={truck} alt="" />{" "}
        <span style={{ color: "black" }}>Fast & secure delivery</span>
      </div>
      <span>24 Hours return policy</span>
    </div>
  );
};

export default SemiFooter;
