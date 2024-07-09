import React from 'react'
import TopBar from '../components/TopBar'
import NavBar from '../components/NavBar'
import LeftBar from '../components/LeftBar'
import RightBar from '../components/RightBar'
import Banner from '../components/Banner'
import SemiFooter from '../components/SemiFooter'
import Footer from '../components/Footer'
import Last from '../components/Last'

const MyPage = () => {
  return (
    <div className="max-w-full border-2 border-black">
        <TopBar/>
        <NavBar/>
        <Banner/>
        <div className="mb-8 flex flex-col items-center">
            <LeftBar/>
            <RightBar/>
        </div>
        <SemiFooter/>
        <Footer/>
        <Last/>
    </div>
  )
}

export default MyPage
