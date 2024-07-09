import React from "react";
import searchicon from "../images/search.png";
import second from "../images/second.png";
import third from "../images/third.png";
import love from "../images/love.png";
const NavBar = () => {
  return (
    <div style={{ maxWidth: "100%", backgroundColor: "white", display:"flex",justifyContent:"space-between", alignItems:"center",padding:"0.5rem 3rem" }}>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "40%",  
        }}
      >
        <li style={{fontWeight:"bold",color:"#109D95"}}>shoply</li>
        <li>Home</li>
        <li>Shop</li>
        <li>Blog</li>
        <li>Pages</li>
        <li>Contact</li>
      </ul>
      <ul style={{display:"flex", alignItems:"center", justifyContent:"space-around", width:"35%",marginRight:"7rem"}}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid black",
            padding: "5px",
            width: "200px",
            backgroundColor:" rgba(217, 217, 217, 1)"
            ,
            borderRadius:"1rem",
            height:"20px"
          }}
        >
          <img
            src={searchicon}
            alt="Search Icon"
            style={{ width: "15px", height: "15px", marginRight: "5px" }}
          />
          <input
            type="text"
            style={{
              fontSize:"13px",
              width: "100%",
              height: "20px",
              border: "none",
              outline: "none",
              backgroundColor: "rgba(217, 217, 217, 1)"
            
              
              
            }}
            placeholder="What are you looking for...."
          />
        </div>
        <img src={second} alt=""style={{ width: "15px", height: "15px",  }} />
        <img src={third} alt="" style={{ width: "15px", height: "15px",  }} />
        <img src={love} alt="" style={{ width: "15px", height: "15px",  }} />
      </ul>
    </div>
  );
};

export default NavBar;
