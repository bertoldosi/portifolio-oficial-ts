import React from 'react'
import { FaWhatsappSquare, FaGithubSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Perfil from '../../assets/profile.jpeg'
import Baner from '../baner';
import Footer from '../footer';
import { Container, Profiler, Context, Sobre, Card } from './styles'


const Home = function () {
  return (
    <>
      <Container>
        <Profiler>
          <div>
            <img src={Perfil} alt='perfil'></img>
            <h1>Matheus Bertoldo</h1>
            <h2>Desenvolvedor FrontEnd</h2>
            <button>Baixar CV</button>
          </div>
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


          <Card>
            <h1>Curso</h1>
            <a href='#'>
              <h2>Testes automatizados</h2>
              <p>Udemy | 2020 - 3H</p>
            </a>
          </Card>

        </Context>
      </Container>
      <Baner />
      <Footer />
    </>
  )
}

export default Home;
