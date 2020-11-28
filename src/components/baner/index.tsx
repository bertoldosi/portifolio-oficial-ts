import React from 'react'
import { BanFooter } from './styles'


const Baner = function () {
  return (
    <BanFooter>
      <h1>Contate-me</h1>
        <form>
          <div className='inputs'>
            <input type="text" placeholder='Seu nome'/>
            <input type="text" placeholder='Seu email'/>
            <textarea  placeholder='Sua mensagem'/>
          </div>
          <div className='btn'>
            <a href='/'><button>Enviar</button></a>
          </div>
        </form>
    </BanFooter>
  )
}

export default Baner;
