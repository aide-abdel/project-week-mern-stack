import React from 'react'
import Appbar from "../components/appbar";
import Banner from '../components/banner';
import HomeContainer from '../components/homeContainer';
import Footer from '../components/footer';

function Home() {
  return (
    <div style={{backgroundColor:'#fff'}}>
      <Appbar/>
      <Banner/>
      <HomeContainer/>
      <Footer/>

    </div>
  )
}

export default Home