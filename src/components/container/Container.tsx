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
            <h1>Educação</h1>
            <div>
              <a href='01'>
                <h2>Sistemas de Informação - Bacharelado</h2>
                <p>Unimeta | 2017 - 2021</p>
              </a>
            </div>
          </Card>

          <Card>
            <h1>Experiências</h1>
            <div>
              <a href='01'>
                <h2>Developer Front-end | Estágio</h2>
                <p>SQUADS | Set 2020 - Atual</p>
              </a>

              <a href='02'>
                <h2>Analista de desenvolvimento | Estágio</h2>
                <p>SEFAZ | Mar 2020 - Set 2020</p>
              </a>

              <a href='03'>
                <h2>Analista de suporte | Estágio</h2>
                <p>PDV Informática | Nov 2019 - Março 2019</p>
              </a>
            </div>
          </Card>

          <Card>
            <h1>Qualificações</h1>
            <div>
              <a href='01'>
                <h2>Django 2.0 avançado</h2>
                <p>Udemy | Nov 2020</p>
              </a>

              <a href='02'>
                <h2>Testes automatizados com Cypress | Intermediário</h2>
                <p>Udemy | Out 2020</p>
              </a>

              <a href='02'>
                <h2>Testes automatizados com Cypress | Básico</h2>
                <p>Udemy | Out 2020</p>
              </a>

              <a href='02'>
                <h2>Django templates</h2>
                <p>TreinaWeb | Dez 2019</p>
              </a>

              <a href='02'>
                <h2>Django fundamentos</h2>
                <p>TreinaWeb | Jul 2019</p>
              </a>

              <a href='02'>
                <h2>JavaScript | Básico</h2>
                <p>TreinaWeb | Out 2019</p>
              </a>

              <a href='02'>
                <h2>HTML E CSS3 | Web Básico</h2>
                <p>Udemy | 2020 - 3H</p>
              </a>

              <a href='02'>
                <h2>Rede de computadores</h2>
                <p>TreinaWeb | Jan 2019</p>
              </a>
            </div>
          </Card>

          <Card>
            <h1>Skills</h1>
            <div>
              <a href='01'>
                <h2>Python | Intermediário</h2>
                <p>2 anos de experiência</p>
              </a>

              <a href='02'>
                <h2>Django | Intermediário</h2>
                <p>2 anos de experiência</p>
              </a>

              <a href='03'>
                <h2>JavaScript | Básico</h2>
                <p>1 anos de experiência</p>
              </a>

              <a href='03'>
                <h2>React | Básico</h2>
                <p>1 anos de experiência</p>
              </a>

              <a href='03'>
                <h2>HTML | Intermediário</h2>
                <p>2 anos de experiência</p>
              </a>

              <a href='03'>
                <h2>CSS | Intermediário</h2>
                <p>2 anos de experiência</p>
              </a>


            </div>
          </Card>

        </Context>
      </Container>
      <Baner />
      <Footer />
    </>
  )
}

export default Home;
