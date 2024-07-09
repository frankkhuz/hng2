import React from "react";
import vector from "../images/vector.png";
const TopBar = () => {
  return (
    <div style={{ backgroundColor: "black", color: "white", display: 'flex', justifyContent: 'space-between', padding: '0 0.5rem' }}>
      <ul style={{ display: 'flex' , gap: '2rem'}}>
        <li style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <h1>EN</h1>{" "}
          <span>
            <img
              src={vector}
              alt=""
              style={{ height: "7px", width: "7px", marginLeft: "3px" }}
            />
          </span>
        </li>

        <li style={{ display: "flex", alignItems: "center",  }}>
          {" "}
          <h1>USD</h1>{" "}
          <span>
            <img
              src={vector}
              alt=""
              style={{ height: "7px", width: "7px", marginLeft: "3px" }}
            />
          </span>
        </li>
      </ul>

      <ul style={{display:'flex', gap: '2rem' , alignItems: 'center' , marginRight: ' 10rem'}}>
        <p>join us</p>
        <p>sign in</p>
      </ul>
    </div>
  );
};

export default TopBar;
