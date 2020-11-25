import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { Header } from './styles'


const Home = function () {
  return (
    <Header>
      <img src={Logo} alt='logo'></img>

      <nav>
        <a href='#'>Home</a>
        <Link to='/projetos'>Projetos</Link>
        <a href='#'>Login</a>
      </nav>

    </Header>
  )
}

export default Home;
