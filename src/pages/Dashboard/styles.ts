import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin-bottom: 100px;

    div {
      width: 100%;
      margin-top: 20px;
      padding: 10px;

      label {
        text-transform: capitalize;
        font-size: 20px;
        font-weight: 500;
      }

      input {
        height: 45px;
        border-radius: 2px;
      }
    }

    .btn {
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        width: 180px;
        height: 40px;

        cursor: pointer;
      }
    }
  }
`;

export const Header = styled.header`
  height: 100px;
  background-color: #2c3e50;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: white;
    margin-left: 20px;
    font-size: 30px;
    font-weight: 700;
  }

  a {
    color: white;
    margin-right: 20px;
    font-size: 20px;
    font-weight: 500;
  }
`;
