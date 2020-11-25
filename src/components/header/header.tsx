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

      <div className="Toggle">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
        <div className="four"></div>
      </div>

    </Header>
  )
}

export default Home;
