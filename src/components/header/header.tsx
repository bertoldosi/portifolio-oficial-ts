import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { Header } from './styles'


const Home = function () {

  const [click, setClick] = useState(false)

  function handleClick() {
    setClick(click == true ? (false) : true);

    console.log(click)
  }

  return (
    <Header hasClick={click}>
      <div className='ToggleLeft'>
        <div className='fechar' onClick={handleClick}>x</div>
        <div className='itens'>
          <Link to='/'>Home</Link>
          <Link to='/projetos'>Projetos</Link>
          <Link to='/login'>Login</Link>
        </div>
      </div>

      <img src={Logo} alt='logo'></img>

      <nav>
        <Link to='/'>Home</Link>
        <Link to='/projetos'>Projetos</Link>
        <Link to='/login'>Login</Link>
      </nav>

      <div className="Toggle" onClick={handleClick}>
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
        <div className="four"></div>
      </div>

    </Header>
  )
}

export default Home;
