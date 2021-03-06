import styled from 'styled-components';

export const LoginCss = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #2c3e50;

  span {
    color: red;
  }

  .login {
    width: 500px;
    height: 450px;
    background: white;
    margin: 1rem;
    border-radius: 0 0 0.3rem 0.3rem;

    header {
      height: 100px;
      border-bottom: 0.2rem solid #2c3e50;
      background: #1abc9c;

      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      font-size: 2rem;
      color: #313030;
    }

    form {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .inputs {
        width: 60%;
        display: flex;
        flex-direction: column;

        label {
          font-weight: 500;
          margin: 1rem 0.5rem 0.5rem 0;
        }
      }

      .btn {
        margin: 4rem;

        button {
          padding: 0.6rem 4rem 0.6rem 4rem;
          background-color: transparent;
          border-color: transparent;
          border-radius: 0.3rem;
          outline: none;
          color: #313030;
          font-weight: bold;
          text-decoration: none;
          cursor: pointer;

          &:hover {
            background-color: #1abc9c;
            transition: 1s;
            color: white;
          }
        }
      }
    }
  }
`;
