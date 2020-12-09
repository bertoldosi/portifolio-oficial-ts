import styled from 'styled-components'

export const BanFooter = styled.footer`
  width: 100%;
  height: 600px;
  margin-top: 3rem;
  background-color: #2c3e50;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 0 1em #2c3e50;

  h1{
    font-size: 2rem;
    margin: 2rem;
    color: white;
    font-weight: 500;
    border-bottom: .2rem solid #1ABC9C;
  }


  form{
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .inputs{
      width: 50%;
      display: flex;
      margin-bottom: 1rem;
      flex-direction: column;
      cursor: initial;

      input, textarea{
        background: transparent;
        margin: 2rem 0 0 0;
        width: 100%;
        height: 3rem;
        color: white;
        font-family: Roboto;
        font-weight: 300;
        border: none;
        border-bottom: .1rem solid white;
        border-radius: .1rem;
        cursor: text;

        ::focus{
          background: transparent;
        }
      }

      textarea{
        height: 5rem;
        overflow: hidden;
        resize: none;
        font-family: Roboto;

        ::placeholder{
          font-family: Roboto;
        }
      }
    }

    .btn{
      margin: 4rem;

      button{
        padding: .6rem 4rem .6rem 4rem;
        background-color: #1ABC9C;
        border-color: transparent;
        border-radius: .3rem;
        outline: none;
        color: #313030;
        font-weight: bold;
        text-decoration: none;
        cursor: pointer;
        transition: 1s;

        &:hover{
          background-color: #1ABC9C;
          color: white;
          padding: .7rem 4.2rem .7rem 4.2rem;
        }
      }
    }
  }

  @media (max-width: 720px) {
    form{
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .inputs{
      width: 90%;
      display: flex;
      flex-direction: column;
      cursor: initial;

      input, textarea{
        background: transparent;
        margin: 2rem 0 0 0;
        width: 100%;
        height: 3rem;
        color: white;
        border: none;
        border-bottom: .1rem solid white;
        border-radius: .1rem;
        cursor: text;

        ::focus{
          background: transparent;
        }
      }
    }
  }
  }
`
export const MsgSuccess = styled.div`

  h3{
    color: #009900;
    padding: .3rem;
    font-weight: 400;
  }

`

export const MsgError = styled.div`

  h3{
    color: red;
    padding: .3rem;
    font-weight: 400;
  }

`

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10vh;

  .c-loader {
    animation: is-rotating 1s infinite;
    border: 6px solid #e5e5e5;
    border-radius: 50%;
    border-top-color: #1abc9c;
    height: 50px;
    width: 50px;
}

@keyframes is-rotating {
  to {
    transform: rotate(1turn);
  }
}

`

