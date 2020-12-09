import styled from 'styled-components'


export const LoginCss = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #2C3E50;

  .login{
    width: 500px;
    height: 450px;
    background: white;
    margin: 1rem;
    border-radius: 0 0 .3rem .3rem;

    header{
      height: 100px;
      border-bottom: .2rem solid #2C3E50;
      background: #1ABC9C;

      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      font-size: 2rem;
      color: #313030;
    }

    form{
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;


      .inputs{
        width: 60%;
        display: flex;
        flex-direction: column;

        label{
          font-weight: 500;
          margin: 1rem .5rem .5rem 0;
        }

        input{
          height: 2rem;
          color: #313030;
          border: none;
          cursor: text;
          border-bottom: .1rem solid #2C3E50;
        }
      }

      .btn{
        margin: 4rem;

        button{
          padding: .6rem 4rem .6rem 4rem;
          background-color: transparent;
          border-color: transparent;
          border-radius: .3rem;
          outline: none;
          color: #313030;
          font-weight: bold;
          text-decoration: none;
          cursor: pointer;

          &:hover{
            background-color: #1ABC9C;
            transition: 1s;
            color: white;
          }
        }
      }
    }
  }
`
