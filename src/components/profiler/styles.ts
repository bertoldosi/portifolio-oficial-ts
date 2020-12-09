import styled from 'styled-components'


export const Container = styled.div`
  height: min-content;
  background-color: white;
  border-radius: .5rem;
  padding: 2rem;
  margin: 2rem 1rem 1rem 1rem;
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
      transition: 1s;

      :hover{
        width: 75%;
        padding: .6rem;
        font-size: 1.2rem;
      }
    }

  }

  a{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    transition: 1s;
    cursor: pointer;

    :hover{
      font-size: 1.2rem;
      color: #1abc9c;
    }

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