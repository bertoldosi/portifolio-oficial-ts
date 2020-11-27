import styled, {css} from 'styled-components'


interface ClickProps{
  hasClick: boolean;
}

export const Header = styled.div<ClickProps>`
  height: 150px;
  background-color: #2c3e50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: .3rem solid #1abc9c;
  box-shadow: 0 0 1em #2c3e50;

  padding: 1rem;

  .ToggleLeft{
    width: 60vw;
    height: 100%;
    display: none;
    flex-direction: column;
    align-items: center;
    position: fixed;
    background: #2c3e50;
    top: 0;
    bottom: 0;
    right: 0;
    box-shadow: 0 0 1em #2c3e50;

    .fechar{
      width: 20%;
      font-size: 2rem;
      margin: 2rem;
      text-align: center;
      font-weight: bold;
      color: white;
      border-bottom: .2rem solid #1abc9c;
    }
    .itens{
      display: flex;
      flex-direction: column;
      align-items: center;

      a{
        padding: .5rem;
        font-size: 1.3rem;
        font-weight: 500;
        color: white;
      }
    }
  }

  img{
    margin-left: 8rem;
    height: 80%;
  }

  ${(props) => props.hasClick && css`
      .ToggleLeft{
        display: flex;
      }

  `}

  .Toggle{
    display: none;
    margin: 0 35px;
    align-items: center;
  }

  .four, .one, .three, .two {
    width: 40px;
    height: 6px;
    margin: 6px 0;
    background-color: #fff;
  }

  nav{
    display: flex;
    align-items: center;
    height: 100%;

    margin-right: 6rem;


    a{
      color: white;
      font-size: 1.6rem;
      font-weight: 400;
      margin: .8rem;
      transition: 0.2s;


      :hover{
        border-bottom: .3rem solid #1abc9c;
      }
    }
  }

  @media (max-width: 320px) {
    img{
      margin-left: .5rem;
      height: 60%;
    }
  }

  @media (max-width: 520px) {

    img{
      margin-left: .8rem;
      height: 75%;
    }
    nav{
      display: none;
    }

    .Toggle{
      display: block;
      margin: 0 25px;
      align-items: center;
    }

  }

  @media (max-width: 820px) {

    img{
      margin-left: 1rem;
      height: 80%;
    }
    nav{
    margin-right: 2rem;


    a{
      font-size: 1.2rem;
      font-weight: 400;
      margin: .2rem;
      transition: 0.2s;
    }
  }
  }



`
