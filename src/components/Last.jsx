import React from 'react'
import face from "../images/face.png"
import link from "../images/link.png"
import insta from "../images/insta (1).png"

const Last = () => {
  return (
    <div style={{backgroundColor:"white",display:"flex",alignItems:"center"}}>
      <div style={{display:"flex"}}>
       <img src={face} alt="" />
       <img src={link} alt="" />
       <img src={insta} alt="" />
      </div>
      <div>
        <p>Accept for</p>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default Last