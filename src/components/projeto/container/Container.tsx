import React, { useEffect, useState } from 'react'
import Perfil from '../../../assets/profile.jpeg'
import Baner from '../../baner';
import Footer from '../../footer';
import { Container, Profiler, Context, Card } from './styles'
import api from '../../../services/api'


interface Repositorys {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

const Home = function () {

  const [repositorys, setRepositorys] = useState<Repositorys[]>()

  useEffect(() => {
    api.get('/repos').then((response) => {
      setRepositorys(response.data)
    });

  }, [])

  console.log(repositorys)

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

          <Card>
            <h1>Projetos</h1>
            <div>
              {repositorys ? (
                repositorys.map((repos) => (
                  <a key={repos.id} href={repos.html_url} target='blank'>
                    <h2>{repos.name}</h2>
                    <p>{repos.description}</p>
                  </a>
                ))
              ) : (<h1>Não tem</h1>)}
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
