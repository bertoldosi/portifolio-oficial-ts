import React, { useEffect, useState } from 'react'
import Baner from '../../baner';
import Footer from '../../footer';
import Profiler from '../../profiler';

import { Container, Context, Card, Loading } from './styles'
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
    api.get('/repos?sort=pushed').then((response) => {
      setRepositorys(response.data)
    });

  }, [])

  console.log(repositorys)

  return (
    <>
      <Container>
      <Profiler />
        <Context>
          {repositorys ? (
            <Card>
              <h1>Projetos</h1>

              <div>
                {
                  repositorys.map((repos) => (
                    <a key={repos.id} href={repos.html_url} target='blank'>
                      <h2>{repos.name}</h2>
                      <p>{repos.description}</p>
                    </a>
                  ))
                }
              </div>
            </Card>
          ) : (
              <Loading>
                <div className='c-loader'>

                </div>
              </Loading>
            )}
        </Context>
      </Container>
      <Baner />
      <Footer />
    </>
  )
}

export default Home;
