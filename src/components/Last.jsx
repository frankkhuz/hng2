import React from 'react'
import face from "../images/face.png"
import link from "../images/link.png"
import insta from "../images/insta (1).png"
import master1 from "../images/Vector (9).png"
import master2 from "../images/Vector (10).png"
import master3 from "../images/Vector (11).png"

const Last = () => {
  return (
    <div style={{backgroundColor:"white",display:"flex",justifyContent:"space-between",border:"1px solid black",marginRight:"5rem",
    alignItems:"center", width:"100%"}}>
      <div style={{display:"flex", marginLeft:"5rem", justifyContent:"space-between",width:"8rem"}}>
       <img src={face} alt=""  style={{height:"2rem", width:"2rem"}}/>
       <img src={link} alt=""  style={{height:"2rem", width:"2rem"}}/>
       <img src={insta} alt=""  style={{height:"2rem", width:"2rem"}}/>
      </div>
      <div style={{display:"flex", height:"5rem",width:"8rem", justifyContent:"space-between",marginRight:"8rem",alignItems:"center"}}>
        <div style={{display:"flex", width:"10 rem",justifyContent:"space-between"}}><span style={{marginRight:"1rem"}}>Accept</span> <span style={{marginRight:"0.5rem"}}>For</span></div>
        <img src={master1} alt=""  style={{height:"2rem", width:"2rem"}}/>
        <img src={master2} alt=""  style={{height:"2rem", width:"2rem",}}/>
        <img src={master3} alt=""  style={{height:"2rem", width:"2rem"}}/>
      </div>
    </div>
  )
}

export default Last