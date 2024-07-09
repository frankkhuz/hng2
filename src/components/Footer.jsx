import React from "react";
import message from "../images/Vector (6).png";
import phone from "../images/Vector (7).png";

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "rgba(217, 217, 217, 0.85)",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div style={{ height: "8rem", width: "10rem" }}>
        <ul>
          <li>Support</li>
          <li>No 6, Zika street Avenue Lagos,Nigeria</li>
          <div style={{ display: "flex", alignItems:"center",justifyContent:"center"}}>
            <img
              src={message}
              alt=""
              
              style={{ height: "15px", width: "15px" }}
            />
            <p>shoply@gmail.com</p>
          </div>
          <div style={{ display: "flex", alignItems:"center"}}>
            <img src={phone} alt="" style={{ height: "15px", width: "15px" }} />{" "}
            <span>08066784588</span>
          </div>
        </ul>
      </div>
      <div style={{ height: "8rem", width: "7rem" }}>
        <ul>
          <li>Account</li>
          <li>My Account</li>
          <li>Login</li>
          <li>whislist</li>
        </ul>
      </div>
      <div style={{ height: "8rem", width: "7rem", display:"flex", flexDirection:"row",justifyContent:"space-evenlyS" }}>
        <ul>
          <li>Quick link</li>
          <li>About Us</li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
