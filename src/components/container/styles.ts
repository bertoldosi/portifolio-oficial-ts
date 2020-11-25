import styled from 'styled-components'


export const Container = styled.div`
  max-width: 60%;
  margin: 0 auto;
  padding: 40px 0px 40px 0px;

  display: flex;
  justify-content: space-between;
`

export const Profiler = styled.div`
  width: 25%;
  background-color: white;
  border-radius: .5rem;
  padding: 2rem 0 5rem 0;

  div{

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
      width: 200px;
      border-radius: 50%;
    }

    button{
      background-color: #1abc9c;
      width: 70%;
      padding: .5rem;
      margin: 2rem 0 2rem 0;
      border: none;
      border-radius: .2rem;
      cursor: pointer;
      font-weight: 500;
      color: #313030;
    }
  }

  ul{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    a{
      color: #2c3e50;
    }
  }


`

export const Context = styled.div`
  width: 70%;

  h1{
    border-bottom: solid .1rem #2c3e50;
  }
`

export const Sobre = styled.div`
  background-color: white;
  border-radius: .5rem;
  margin-top: 0;
  padding: 2rem 2rem 5rem 2rem;
`
export const Curso = styled.div`
  background-color: white;
  border-radius: .5rem;
  margin-top: 2rem;
  padding: 2rem 2rem 5rem 2rem;
`

export const Experiencia = styled.div`
  background-color: white;
  border-radius: .5rem;
  margin-top: 2rem;
  padding: 2rem 2rem 5rem 2rem;
`
