import React from "react";

const LeftBar = () => {
  return (
    <div
      style={{
        marginTop: "1rem",
        width: "30%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button
        style={{
          backgroundColor: "grey",
          fontSize: "14px",
          width: "6rem",
          height: "2rem",
          marginLeft: "3rem",
        }}
      >
        SHOP BY
      </button>
      <div>
        <div
          style={{
            borderBottom: "2px solid green",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "60%",
            marginLeft: "2rem",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          <p>CATEGORIES</p> <span>-</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginLeft: "2rem",
          }}
        >
          {" "}
          <input type="radio" name="" id="" /> <p>FASHION</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginLeft: "2rem",
          }}
        >
          {" "}
          <input type="radio" name="" id="" /> <p>MAKEUP</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginLeft: "2rem",
          }}
        >
          {" "}
          <input type="radio" name="" id="" /> <p>ELECTRONIC</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginLeft: "2rem",
          }}
        >
          {" "}
          <input type="radio" name="" id="" /> <p>jewelry</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginLeft: "2rem",
          }}
        >
          {" "}
          <input type="radio" name="" id="" /> <p>furniture</p>
        </div>
      </div>
      <div>
        <div
          style={{
            borderBottom: "2px solid green",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "60%",
            marginLeft: "2rem",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          <p>GENDER</p> <span>-</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginLeft: "2rem",
          }}
        >
          {" "}
          <input type="radio" name="" id="" /> <p>MEN</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginLeft: "2rem",
          }}
        >
          {" "}
          <input type="radio" name="" id="" /> <p>WOMEN</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginLeft: "2rem",
          }}
        >
          {" "}
          <input type="radio" name="" id="" /> <p>UNISEX</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginLeft: "2rem",
          }}
        >
        </div>
        <div>
        <div
          style={{
            borderBottom: "2px solid green",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "60%",
            marginLeft: "2rem",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          <p>SIZE</p> <span>-</span>
        </div>
        <div style={{marginLeft:"2rem",display:"flex", justifyContent:"space-between",width:"50%"}}>
          <p>4XL</p><p>3XL</p><p>2XL</p><p>1XL</p>
        </div>
        <div style={{marginLeft:"2rem",display:"flex", justifyContent:"space-between",width:"50%"}}>
        <p>XL</p><p>L</p><p>S</p><p>XS</p>

        </div>
        
        
      </div>
        <div>
        <div
          style={{
            borderBottom: "2px solid green",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "60%",
            marginLeft: "2rem",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          <p>COLOR</p> <span>-</span>
        </div>
        
        <div style={{display:"flex",marginLeft:"2rem", width:"50%",justifyContent:"space-between"}}>
          <div style={{height:"1rem", width:"1rem",borderRadius:"50%",backgroundColor:"red"}}></div>
          <div style={{height:"1rem", width:"1rem",borderRadius:"50%",backgroundColor:"red"}}></div>
          <div style={{height:"1rem", width:"1rem",borderRadius:"50%",backgroundColor:"red"}}></div>
          <div style={{height:"1rem", width:"1rem",borderRadius:"50%",backgroundColor:"red"}}></div>
          <div style={{height:"1rem", width:"1rem",borderRadius:"50%",backgroundColor:"red"}}></div>
          <div style={{height:"1rem", width:"1rem",borderRadius:"50%",backgroundColor:"red"}}></div>
        </div>
        
      </div>
      </div>
      <button style={{backgroundColor:"blue",height:"2rem", width:"8rem", marginLeft:"5rem", marginTop:"4rem",borderRadius:"10px"}}>RESET</button>
    </div>
  );
};

export default LeftBar;
