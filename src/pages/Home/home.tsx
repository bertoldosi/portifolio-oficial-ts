import React from 'react'
import Header from '../../components/header/header'
import Baner from '../../components/rodape/baner/baner'
import Footer from '../../components/rodape/footer/footer'
import PrincipalHome from '../../components/principal/home/principal_home'

const Home = function () {
  return (
    <>
      <Header />
      <PrincipalHome />
      <Baner />
      <Footer />
    </>
  )
}

export default Home;
