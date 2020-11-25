import React from 'react'
import { FaWhatsappSquare, FaGithubSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Perfil from '../../assets/profile.jpeg'
import { Container, Profiler, Context, Sobre, Curso, Experiencia } from './styles'


const Home = function () {
  return (
    <Container>
      <Profiler>
        <div>
          <img src={Perfil} alt='perfil'></img>
          <h1>Matheus Bertoldo</h1>
          <h2>Desenvolvedor FrontEnd</h2>
          <button>Baixar CV</button>
        </div>

        <ul>
          <a href='#'><MdEmail size={40} /></a>
          <a href='#'><FaWhatsappSquare size={32} /></a>
          <a href='#'><FaLinkedin size={32} /></a>
          <a href='#'><FaGithubSquare size={32} /></a>
          <a href='#'><FaFacebookSquare size={32} /></a>
        </ul>
      </Profiler>
      <Context>

        <Sobre>
          <h1>Sobre</h1>
          <p>Graduando em sistemas de informação, com foco nas tecnologias Python, Javascript,
            ReactJS e Django para desenvolvimento de sistemas web , (HTML, CSS, Bootstrap).
            Atualmente realizando estágio com foco em aplicar todos os conhecimentos adquiridos,
            aprimorando e aprendendo novas ferramentas, como Jira, Teans, Confluence e outras.
            Estou aberto as novas oportunidades e desafios para agregar mais conhecimentos.
          </p>
        </Sobre>

        <Curso>
          <h1>Curso</h1>
        </Curso>

        <Experiencia>
          <h1>Experiência</h1>
        </Experiencia>

        <Experiencia>
          <h1>Experiência</h1>
        </Experiencia>

        <Experiencia>
          <h1>Experiência</h1>
        </Experiencia>

        <Experiencia>
          <h1>Experiência</h1>
        </Experiencia>

      </Context>
    </Container>
  )
}

export default Home;
