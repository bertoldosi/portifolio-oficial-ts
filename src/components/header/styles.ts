import styled from 'styled-components'


export const Header = styled.div`
  height: 150px;
  background-color: #2c3e50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: .3rem solid #1abc9c;

  padding: 1rem;

  img{
    margin-left: 10rem;
    height: 90%;
  }

  nav{
    display: flex;
    align-items: center;
    height: 100%;

    margin-right: 10rem;


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



`
