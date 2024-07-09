import React from 'react'
import TopBar from '../components/TopBar'
import NavBar from '../components/NavBar'
import LeftBar from '../components/LeftBar'
import RightBar from '../components/RightBar'
import Banner from '../components/Banner'
import SemiFooter from '../components/SemiFooter'
import Footer from '../components/Footer'


const MyPage = () => {
  return (
    <div style={{maxWidth: '100%', border: '2px solid black'}}>
        <TopBar/>
        <NavBar/>
        <Banner/>
        <div style={{marginBottom:"2rem", display: 'flex', alignItems: 'center'}}>
            <LeftBar/>
            <RightBar/>
        </div>
        <SemiFooter/>
        <Footer/>

    </div>
  )
}

export default MyPage