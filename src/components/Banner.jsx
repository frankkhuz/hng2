import React from 'react'
import banner from "../images/freestocks-_3Q3tsJ01nc-unsplash 1.png"
const Banner = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-between",backgroundColor:  "rgba(217, 217, 217, 1)"
,width:"100%", alignItems:"center"}}>
        <div style={{backgroundColor:" rgba(217, 217, 217, 1)"
,justifyContent:"space-between"}}>
            <span style={{fontSize:"12px"}}>Home</span> <span>|</span> <span style={{fontSize:"12px"}}>Shop</span>
            <p style={{fontSize:"1rem", fontWeight:"bolder"}}>UNLOCK YOUR STYLE</p>
        </div>
        <div>
            <img src={banner} alt=""  style={{width:"15rem", height:"4rem",marginRight:"13rem"}}/>
        </div>
    </div>
  )
}

export default Banner