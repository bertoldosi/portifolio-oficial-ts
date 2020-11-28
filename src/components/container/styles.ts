import styled from 'styled-components'


export const Container = styled.div`
  width: 60%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 40px 0px 40px 0px;

  display: flex;
  justify-content: space-between;


  @media (max-width: 1020px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`

export const Profiler = styled.div`
  width: 250px;
  height: min-content;
  background-color: white;
  border-radius: .5rem;
  padding: 2rem 0 5rem 0;
  margin: 0 1rem 1rem 1rem;
  box-shadow: 0 0 1em #2c3e50;

  div{

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
      width: 150px;
      margin: 0 1rem 0 1rem;
      border-radius: 50%;
    }

    button{
      background-color: #1abc9c;
      width: 70%;
      padding: .5rem;
      margin: 2rem 0 1rem 0;
      border: none;
      border-radius: .2rem;
      cursor: pointer;
      font-weight: 500;
      color: #313030;
    }

  }

  a{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;

    svg{
      margin-right: .1rem;
    }
  }

  @media (max-width: 420px) {
    width: 90%;
    background-color: white;
    padding: 2rem 0 5rem 0;

  }

`

export const Context = styled.div`
  width: 70%;

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
