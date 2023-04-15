import React from 'react'
import Appbar from "../components/appbar";
import Banner from '../components/banner';
import HomeContainer from '../components/homeContainer';

function Home() {
  return (
    <div style={{backgroundColor:'#fff'}}>
      <Appbar/>
      <Banner/>
      <HomeContainer/>
    </div>
  )
}

export default Home