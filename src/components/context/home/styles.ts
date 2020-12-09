import styled from "styled-components"



export const Contexto = styled.div`
max-width: 900px;
padding: 2rem;
display: flex;
justify-content: center;
flex-direction: column;

@media (max-width: 420px) {
    padding: 0;
  }

  @media (max-width: 720px) {
    padding: 0;
  }

h1{
  border-bottom: solid .1rem #2c3e50;
}

@media (max-width: 1020px) {
  width: 90%;
}
`

export const Sobre = styled.div`
background-color: white;
border-radius: .5rem;
margin-top: 0;
padding: 2rem 2rem 5rem 2rem;
box-shadow: 0 0 1em #2c3e50;
`

export const Card = styled.div`
background-color: white;
border-radius: .5rem;
margin-top: 1rem;
padding: 2rem 2rem 5rem 2rem;
box-shadow: 0 0 1em #2c3e50;

h1{
    margin-bottom: .5rem;
}

div{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;


  a{
    padding: 0 0 0 .5rem ;
    transition: 1s;

    :hover{
      background-color: #f0f0f5;
      border-bottom: solid .2rem #1abc9c;
      border-radius: .2rem;
    }

    h2{
      margin-top: 1rem;
    }

    p{
      margin: 0;
      margin-bottom: 1rem;
      font-size: .8rem;
    }
  }
}

@media (max-width: 1020px) {

  div{
    grid-template-columns: 1fr;

    a{
    background-color: #f0f0f5;
    border-bottom: solid .2rem #1abc9c;
    border-radius: .2rem;
  }
  }
}
`
