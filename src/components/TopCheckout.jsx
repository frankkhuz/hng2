import React from 'react'
import checkout from "../images/checkout.png"
const TopCheckout = () => {
  return (
    <div >

        <p style={{backgroundColor:"grey",textAlign:"center",justifyContent:"center", height:"5rem", padding:"0.5rem"}}>Order Details</p>
        <div><img src={checkout} alt="" /></div>
        <div>
            <h2 style={{height:"50rem",backgroundColor:"grey",width:"30rem"}}>payment method</h2>

        </div>
        <button style={{height:"2rem",width:"7rem",backgroundColor:"black",color:"white"}}>Place order</button>
    </div>
  )
}

export default TopCheckout