import React from 'react'
import { Container } from './styles'
import Perfil from '../../assets/profile.jpeg'
import { AiOutlineWhatsApp } from "react-icons/ai";


const Profiler = () => (
  <Container>
    <div>
      <img src={Perfil} alt='perfil'></img>
      <h1>Matheus Bertoldo</h1>
      <h2>Desenvolvedor FrontEnd</h2>
      <button>Baixar CV</button>
    </div>

    <a href='https://api.whatsapp.com/send?phone=5568999896421&text=Ol%C3%A1%2C%20estava%20olhando%20seu%20portf%C3%B3lio%2C%20e%20queria%20falar%20com%20voc%C3%AA!' target='blank'>
      <AiOutlineWhatsApp size={32} />
            WhatsApp
          </a>
  </Container>
)

export default Profiler;
