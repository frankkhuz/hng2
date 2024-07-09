import React from 'react'
import face from "../images/face.png"
import link from "../images/link.png"
import insta from "../images/insta (1).png"
import master1 from "../images/Vector (9).png"
import master2 from "../images/Vector (10).png"
import master3 from "../images/Vector (11).png"

const Last = () => {
  return (
    <div style={{backgroundColor:"white",display:"flex",alignItems:"center"}}>
      <div style={{display:"flex"}}>
       <img src={face} alt=""  style={{height:"2rem", width:"2rem"}}/>
       <img src={link} alt=""  style={{height:"2rem", width:"2rem"}}/>
       <img src={insta} alt=""  style={{height:"2rem", width:"2rem"}}/>
      </div>
      <div style={{display:"flex", flexDirection:"column", height:"5rem",width:"5rem", border:"1px solid black"}}>
        <p>Accept for</p>
        <img src={master1} alt=""  style={{height:"2rem", width:"2rem"}}/>
        <img src={master2} alt=""  style={{height:"2rem", width:"2rem"}}/>
        <img src={master3} alt=""  style={{height:"2rem", width:"2rem"}}/>
      </div>
    </div>
  )
}

export default Last