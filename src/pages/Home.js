import React from 'react'
import Banner from '../components/Banner'
import Feature from '../components/Feature'
import TopProduct from '../components/TopProduct'
import SubBanner from '../components/SubBanner'
import Featured from '../components/Featured'
import Play from '../components/Play'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Feature/>
      <TopProduct/>
      <SubBanner/>
      <Featured/>
      <Play/>
    </div>
  )
}

export default Home
