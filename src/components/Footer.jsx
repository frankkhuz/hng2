import React from 'react'
import message from "../images/Vector (6).png"
import phone from "../images/Vector (7).png"

const Footer = () => {
  return (
    <div style={{width:"90%",backgroundColor:"grey",display:"flex",justifyContent:"space-between"}}>
        <div style={{border:"1px solid black",height:"8rem", width:"7rem"}}>
        <ul>
            <li>Support</li>
            <li>No 6, Zika street Avenue Lagos,Nigeria</li>
            <div style={{display:"flex"}}><img src={message} alt="" style={{height:"15px", width:"15px"}}/></div>
            <img src={phone} alt="" style={{height:"15px", width:"15px"}}/> <span>08066784588</span>
        </ul>
        </div>
        <div  style={{border:"1px solid black",height:"7rem",width:"7rem"}}>
        <ul>
            <li>Account</li>
            <li>My Account</li>
            <li>Login</li>
            <li>whislist</li>
        </ul>
        </div>
        <div style={{border:"1px solid black",height:"7rem",width:"7rem"}}>
            <ul>
            <li>Quick link</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
        </ul>
        </div>
    </div>
  )
}

export default Footer