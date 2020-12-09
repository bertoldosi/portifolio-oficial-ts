import styled from 'styled-components'

export const Copyright = styled.footer`
  width: 100%;
  height: 90px;
  background-color: #1A252F;

  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: .3rem solid #1abc9c;

  h5{
    color: white;
    font-weight: 300;
    margin-left: 2rem;
  }

  div{
    a{
      height: 80px;
      color: white;
      border-radius: 50%;
    }

    svg{
      margin: .2rem;
    }
  }

  h1{
    margin: 0;
    margin-right: 2rem;
    color: white;
    font-weight: 300;
  }


  @media (max-width: 420px) {
    h5{
      font-size: .8rem;
    }
  }

  @media (max-width: 720px) {
    flex-direction: column;
    justify-content: center;
    height: 120px;

    h1{
      margin: 0;
    }

    h5{
      margin: 0;
      font-size: 1rem;
    }
  }

`
