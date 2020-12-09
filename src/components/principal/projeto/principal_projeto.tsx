import React from 'react'
import { Container } from './styles'

import Context from '../../context/projeto/context_projeto'
import Profiler from '../../profiler/profile'



const Conteudo = function () {
  return (
    <Container>
      <Profiler/>
      <Context/>
    </Container>
  )
}

export default Conteudo;
