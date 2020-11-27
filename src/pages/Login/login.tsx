import React from 'react'
import { Link } from 'react-router-dom';
import { LoginCss } from './styles'

const Login = function () {
  return (
    <LoginCss>
      <div className='login'>
        <header><h1>ACESSO</h1></header>
        <form>
          <div className='inputs'>
            <label>LOGIN</label>
            <input type="text" placeholder='Digite seu usuário'/>

            <label>SENHA</label>
            <input type="text"  placeholder='Digite sua senha'/>
          </div>
          <div className='btn'>
            <Link to='/'><button>LOGAR</button></Link>
          </div>
        </form>
      </div>
    </LoginCss>
  )
}

export default Login;
