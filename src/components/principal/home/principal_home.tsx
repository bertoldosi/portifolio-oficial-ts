import React from 'react'
import { Container } from './styles'

import ContextHome from '../../context/home/context_home'
import Profiler from '../../profiler/profile'


const Conteudo = function () {
  return (
    <Container>
      <Profiler />
      <ContextHome />
    </Container>
  )
}

export default Conteudo;
